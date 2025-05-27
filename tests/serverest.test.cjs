// ServeRest API Test Suite
// Dependencies: npm install jest mport { request, spec } from 'aker } from '@faker-js/faker'

// Test configuration
import { faker } from '@faker-js/faker'
import { request, spec } from 'pactum'
import { eachLike, regex, string } from 'pactum-matchers'
import { TestUtils } from '../utils/dataGenerator.cjs'

const BASE_URL = 'https://serverest.dev/'
const TIMEOUT = 30000

// Test data storage
let testData = {
  adminUser: {},
  regularUser: {},
  adminToken: '',
  regularToken: '',
  product: {},
  cart: {}
}

// Configure etBaseUrl(BASE_URL)
request.setBaseUrl(BASE_URL)
request.setDefaultTimeout(TIMEOUT)
describe('ServeRest API Test Suite', () => {
  beforeAll(async () => {
    testData.adminUser = TestUtils.generateUser(true)

    testData.regularUser = TestUtils.generateUser(false)

    testData.product = TestUtils.generateProduct()
  })

  afterAll(async () => {
    try {
      if (testData.adminUser._id) {
        await spec().delete(`/usuarios/${testData.adminUser._id}`).expectStatus(200)
      }
      if (testData.regularUser._id) {
        await spec().delete(`/usuarios/${testData.regularUser._id}`).expectStatus(200)
      }
    } catch (error) {
      console.log('Cleanup completed with some warnings:', error.message)
    }
  })

  // Authentication & Users Tests
  describe('Authentication & Users', () => {
    describe('POST /usuarios - Create Users', () => {
      test('Should create admin user successfully', async () => {
        const response = await spec().post('/usuarios').withJson(testData.adminUser).expectStatus(201).expectJsonLike({
          message: 'Cadastro realizado com sucesso',
          _id: /.+/
        })

        testData.adminUser._id = response.json._id
      })

      test('Should create regular user successfully', async () => {
        const response = await spec().post('/usuarios').withJson(testData.regularUser).expectStatus(201).expectJsonLike({
          message: 'Cadastro realizado com sucesso',
          _id: /.+/
        })

        testData.regularUser._id = response.json._id
      })

      test('Should not create user with duplicate email', async () => {
        await spec().post('/usuarios').withJson(testData.adminUser).expectStatus(400).expectJson({
          _id: '_id não é permitido'
        })
      })

      test('Should validate required fields', async () => {
        await spec()
          .post('/usuarios')
          .withJson({
            nome: faker.person.fullName()
            // Missing required fields
          })
          .expectStatus(400)
      })
    })

    describe('POST /login - Authentication', () => {
      test('Should login admin user successfully', async () => {
        const response = await spec()
          .post('/login')
          .withJson({
            email: testData.adminUser.email,
            password: testData.adminUser.password
          })
          .expectStatus(200)
          .expectJsonLike({
            message: 'Login realizado com sucesso',
            authorization: /^Bearer .+/
          })

        testData.adminToken = response.json.authorization
      })

      test('Should login regular user successfully', async () => {
        const response = await spec()
          .post('/login')
          .withJson({
            email: testData.regularUser.email,
            password: testData.regularUser.password
          })
          .expectStatus(200)
          .expectJsonLike({
            message: 'Login realizado com sucesso',
            authorization: /^Bearer .+/
          })

        testData.regularToken = response.json.authorization
      })

      test('Should not login with invalid credentials', async () => {
        await spec()
          .post('/login')
          .withJson({
            email: testData.adminUser.email,
            password: 'wrongpassword'
          })
          .expectStatus(401)
          .expectJson({
            message: 'Email e/ou senha inválidos'
          })
      })

      test('Should not login with non-existent email', async () => {
        await spec()
          .post('/login')
          .withJson({
            email: 'nonexistent@test.com',
            password: 'anypassword'
          })
          .expectStatus(401)
          .expectJson({
            message: 'Email e/ou senha inválidos'
          })
      })
    })

    describe('GET /usuarios - List Users', () => {
      test('Should list all users', async () => {
        await spec()
          .get('/usuarios')
          .expectStatus(200)
          .expectJsonMatch({
            quantidade: regex(/\d+/),
            usuarios: eachLike({
              nome: string(),
              email: regex(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/),
              administrador: regex(/^(true|false)$/),
              _id: regex(/^[a-zA-Z0-9]{16}$/)
            })
          })
      })

      test('Should filter users by email', async () => {
        await spec()
          .get('/usuarios')
          .withQueryParams('email', testData.adminUser.email)
          .expectStatus(200)
          .expectJsonLike({
            quantidade: 1,
            usuarios: [
              {
                nome: testData.adminUser.nome,
                email: testData.adminUser.email,
                administrador: testData.adminUser.administrador,
                _id: testData.adminUser._id
              }
            ]
          })
      })

      test('Should filter users by administrator status', async () => {
        await spec()
          .get('/usuarios')
          .withQueryParams('administrador', 'true')
          .expectStatus(200)
          .expectJsonMatch({
            quantidade: regex(/\d+/),
            usuarios: eachLike({
              nome: string(),
              email: regex(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/),
              administrador: regex(/^(true)$/),
              _id: regex(/^[a-zA-Z0-9]{16}$/)
            })
          })
      })
    })

    describe('GET /usuarios/{id} - Get User by ID', () => {
      test('Should get user by valid ID', async () => {
        await spec().get(`/usuarios/${testData.adminUser._id}`).expectStatus(200).expectJsonLike({
          nome: testData.adminUser.nome,
          email: testData.adminUser.email,
          administrador: testData.adminUser.administrador,
          _id: testData.adminUser._id
        })
      })

      test('Should return 400 for non-existent user ID', async () => {
        await spec().get('/usuarios/nonexistentid123').expectStatus(400).expectJson({
          message: 'Usuário não encontrado'
        })
      })
    })

    describe('PUT /usuarios/{id} - Update User', () => {
      test('Should update existing user', async () => {
        const updatedData = {
          ...testData.regularUser,
          nome: faker.person.fullName()
        }

        await spec().put(`/usuarios/${testData.regularUser._id}`).withJson(updatedData).expectStatus(200).expectJson({
          message: 'Registro alterado com sucesso'
        })

        testData.regularUser.nome = updatedData.nome
      })

      test('Should create new user if ID does not exist', async () => {
        const newUserData = {
          nome: faker.person.fullName(),
          email: faker.internet.email().toLowerCase(),
          password: 'teste123',
          administrador: 'false'
        }

        const response = await spec().put('/usuarios/nonexistentid123').withJson(newUserData).expectStatus(201).expectJsonLike({
          message: 'Cadastro realizado com sucesso',
          _id: /.+/
        })

        // Cleanup the created user
        await spec().delete(`/usuarios/${response.json._id}`).expectStatus(200)
      })

      test('Should not update user with duplicate email', async () => {
        await spec()
          .put(`/usuarios/${testData.regularUser._id}`)
          .withJson({
            ...testData.regularUser,
            email: testData.adminUser.email
          })
          .expectStatus(400)
          .expectJson({
            _id: '_id não é permitido'
          })
      })
    })
  })

  // Products Tests
  describe('Products Management', () => {
    describe('POST /produtos - Create Product', () => {
      test('Should create product as admin', async () => {
        const response = await spec().post('/produtos').withHeaders('Authorization', testData.adminToken).withJson(testData.product).expectStatus(201).expectJsonLike({
          message: 'Cadastro realizado com sucesso',
          _id: /.+/
        })

        testData.product._id = response.json._id
      })

      test('Should not create product without authentication', async () => {
        await spec()
          .post('/produtos')
          .withJson(testData.product)
          .expectStatus(401)
          .expectJsonLike({
            message: /Token de acesso ausente.*/
          })
      })

      test('Should not create product as regular user', async () => {
        await spec()
          .post('/produtos')
          .withHeaders('Authorization', testData.regularToken)
          .withJson({
            nome: faker.commerce.productName(),
            preco: 299,
            descricao: 'Test product',
            quantidade: 50
          })
          .expectStatus(403)
          .expectJson({
            message: 'Rota exclusiva para administradores'
          })
      })

      test('Should not create product with duplicate name', async () => {
        await spec().post('/produtos').withHeaders('Authorization', testData.adminToken).withJson(testData.product).expectStatus(400).expectJson({
          _id: '_id não é permitido'
        })
      })

      test('Should validate required fields for product', async () => {
        await spec()
          .post('/produtos')
          .withHeaders('Authorization', testData.adminToken)
          .withJson({
            nome: faker.commerce.productName()
            // Missing required fields
          })
          .expectStatus(400)
      })
    })

    describe('GET /produtos - List Products', () => {
      test('Should list all products', async () => {
        await spec()
          .get('/produtos')
          .expectStatus(200)
          .expectJsonMatch({
            quantidade: regex(/\d+/),
            produtos: eachLike({
              nome: string(),
              preco: regex(/^\d+(\.\d{1,2})?$/),
              descricao: string(),
              quantidade: regex(/^[0-9]+$/),
              _id: regex(/^[a-zA-Z0-9]{16}$/)
            })
          })
      })

      test('Should filter products by name', async () => {
        await spec()
          .get('/produtos')
          .withQueryParams('nome', testData.product.nome)
          .expectStatus(200)
          .expectJsonLike({
            quantidade: 1,
            produtos: [
              {
                nome: testData.product.nome,
                preco: testData.product.preco,
                descricao: testData.product.descricao,
                quantidade: testData.product.quantidade,
                _id: testData.product._id
              }
            ]
          })
      })

      test('Should filter products by price range', async () => {
        await spec()
          .get('/produtos')
          .withQueryParams('preco', testData.product.preco)
          .expectStatus(200)
          .expectJsonMatch({
            quantidade: regex(/\d+/),
            produtos: eachLike({
              nome: string(),
              preco: regex(/^\d+(\.\d{1,2})?$/),
              descricao: string(),
              quantidade: regex(/^[0-9]+$/),
              _id: regex(/^[a-zA-Z0-9]{16}$/)
            })
          })
      })
    })

    describe('GET /produtos/{id} - Get Product by ID', () => {
      test('Should get product by valid ID', async () => {
        await spec().get(`/produtos/${testData.product._id}`).expectStatus(200).expectJsonLike({
          nome: testData.product.nome,
          preco: testData.product.preco,
          descricao: testData.product.descricao,
          quantidade: testData.product.quantidade,
          _id: testData.product._id
        })
      })

      test('Should return 400 for non-existent product ID', async () => {
        await spec().get('/produtos/nonexistentproductid').expectStatus(400).expectJson({
          message: 'Produto não encontrado'
        })
      })
    })

    describe('PUT /produtos/{id} - Update Product', () => {
      test('Should update existing product as admin', async () => {
        const updatedProduct = {
          ...testData.product,
          descricao: 'Updated description',
          preco: testData.product.preco + 100
        }

        await spec().put(`/produtos/${testData.product._id}`).withHeaders('Authorization', testData.adminToken).withJson(updatedProduct).expectStatus(200).expectJson({
          message: 'Registro alterado com sucesso'
        })

        testData.product = { ...testData.product, ...updatedProduct }
      })

      test('Should not update product without authentication', async () => {
        await spec()
          .put(`/produtos/${testData.product._id}`)
          .withJson(testData.product)
          .expectStatus(401)
          .expectJsonLike({
            message: /Token de acesso ausente.*/
          })
      })

      test('Should not update product as regular user', async () => {
        await spec().put(`/produtos/${testData.product._id}`).withHeaders('Authorization', testData.regularToken).withJson(testData.product).expectStatus(403).expectJson({
          message: 'Rota exclusiva para administradores'
        })
      })
    })
  })

  // Shopping Cart Tests
  describe('Shopping Cart Management', () => {
    describe('POST /carrinhos - Create Cart', () => {
      test('Should create cart for authenticated user', async () => {
        const cartData = {
          produtos: [
            {
              idProduto: testData.product._id,
              quantidade: 2
            }
          ]
        }

        const response = await spec().post('/carrinhos').withHeaders('Authorization', testData.regularToken).withJson(cartData).expectStatus(201).expectJsonLike({
          message: 'Cadastro realizado com sucesso',
          _id: /.+/
        })

        testData.cart._id = response.json._id
      })

      test('Should not create cart without authentication', async () => {
        await spec()
          .post('/carrinhos')
          .withJson({
            produtos: [
              {
                idProduto: testData.product._id,
                quantidade: 1
              }
            ]
          })
          .expectStatus(401)
          .expectJsonLike({
            message: /Token de acesso ausente.*/
          })
      })

      test('Should not create second cart for same user', async () => {
        await spec()
          .post('/carrinhos')
          .withHeaders('Authorization', testData.regularToken)
          .withJson({
            produtos: [
              {
                idProduto: testData.product._id,
                quantidade: 1
              }
            ]
          })
          .expectStatus(400)
          .expectJsonLike({
            message: /Não é permitido ter mais de 1 carrinho/
          })
      })

      test('Should not create cart with non-existent product', async () => {
        await spec()
          .post('/carrinhos')
          .withHeaders('Authorization', testData.adminToken)
          .withJson({
            produtos: [
              {
                idProduto: 'nonexistentproductid',
                quantidade: 1
              }
            ]
          })
          .expectStatus(400)
          .expectJsonLike({
            message: /Produto não encontrado/
          })
      })

      test('Should not create cart with insufficient product quantity', async () => {
        await spec()
          .post('/carrinhos')
          .withHeaders('Authorization', testData.adminToken)
          .withJson({
            produtos: [
              {
                idProduto: testData.product._id,
                quantidade: testData.product.quantidade + 100
              }
            ]
          })
          .expectStatus(400)
          .expectJsonLike({
            message: /Produto não possui quantidade suficiente/
          })
      })
    })

    describe('GET /carrinhos - List Carts', () => {
      test('Should list all carts', async () => {
        await spec()
          .get('/carrinhos')
          .expectStatus(200)
          .expectJsonMatch({
            quantidade: regex(/\d+/),
            carrinhos: eachLike({
              produtos: eachLike({
                idProduto: regex(/^[a-zA-Z0-9]{16}$/),
                quantidade: regex(/^[0-9]+$/),
                precoUnitario: regex(/^[0-9]+$/)
              }),
              precoTotal: regex(/^\d+(\.\d{1,2})?$/),
              quantidadeTotal: regex(/^\d+(\.\d{1,2})?$/),
              idUsuario: regex(/^[a-zA-Z0-9]{16}$/),
              _id: regex(/^[a-zA-Z0-9]{16}$/)
            })
          })
      })

      test('Should filter carts by user ID', async () => {
        await spec()
          .get('/carrinhos')
          .withQueryParams('idUsuario', testData.regularUser._id)
          .expectStatus(200)
          .expectJsonMatch({
            quantidade: 1,
            carrinhos: eachLike({
              produtos: eachLike({
                idProduto: regex(/^[a-zA-Z0-9]{16}$/),
                quantidade: regex(/^[0-9]+$/),
                precoUnitario: regex(/^[0-9]+$/)
              }),
              precoTotal: regex(/^\d+(\.\d{1,2})?$/),
              quantidadeTotal: regex(/^\d+(\.\d{1,2})?$/),
              idUsuario: regex(/^[a-zA-Z0-9]{16}$/),
              _id: regex(/^[a-zA-Z0-9]{16}$/)
            })
          })
      })
    })

    describe('GET /carrinhos/{id} - Get Cart by ID', () => {
      test('Should get cart by valid ID', async () => {
        await spec()
          .get(`/carrinhos/${testData.cart._id}`)
          .expectStatus(200)
          .expectJsonMatch({
            quantidade: regex(/\d+/),
            carrinhos: eachLike({
              produtos: eachLike({
                idProduto: regex(/^[a-zA-Z0-9]{16}$/),
                quantidade: regex(/^[0-9]+$/),
                precoUnitario: regex(/^[0-9]+$/)
              }),
              precoTotal: regex(/^\d+(\.\d{1,2})?$/),
              quantidadeTotal: regex(/^\d+(\.\d{1,2})?$/),
              idUsuario: regex(/^[a-zA-Z0-9]{16}$/),
              _id: regex(/^[a-zA-Z0-9]{16}$/)
            })
          })
      })

      test('Should return 400 for non-existent cart ID', async () => {
        await spec().get('/carrinhos/nonexistentcartid').expectStatus(400).expectJson({
          id: 'id deve ter exatamente 16 caracteres alfanuméricos'
        })
      })
    })

    describe('DELETE /carrinhos/cancelar-compra - Cancel Purchase', () => {
      test('Should cancel purchase and restore stock', async () => {
        await spec()
          .delete('/carrinhos/cancelar-compra')
          .withHeaders('Authorization', testData.regularToken)
          .expectStatus(200)
          .expectJsonLike({
            message: /Registro excluído com sucesso/
          })
      })

      test('Should not cancel purchase without authentication', async () => {
        await spec()
          .delete('/carrinhos/cancelar-compra')
          .expectStatus(401)
          .expectJsonLike({
            message: /Token de acesso ausente.*/
          })
      })

      test('Should handle cancel when no cart exists', async () => {
        await spec()
          .delete('/carrinhos/cancelar-compra')
          .withHeaders('Authorization', testData.regularToken)
          .expectStatus(200)
          .expectJsonLike({
            message: /Não foi encontrado carrinho para esse usuário/
          })
      })
    })

    describe('DELETE /carrinhos/concluir-compra - Complete Purchase', () => {
      test('Should create cart for purchase completion test', async () => {
        const cartData = {
          produtos: [
            {
              idProduto: testData.product._id,
              quantidade: 1
            }
          ]
        }

        await spec().post('/carrinhos').withHeaders('Authorization', testData.regularToken).withJson(cartData).expectStatus(201)
      })

      test('Should complete purchase successfully', async () => {
        await spec()
          .delete('/carrinhos/concluir-compra')
          .withHeaders('Authorization', testData.regularToken)
          .expectStatus(200)
          .expectJsonLike({
            message: /Registro excluído com sucesso/
          })
      })

      test('Should not complete purchase without authentication', async () => {
        await spec()
          .delete('/carrinhos/concluir-compra')
          .expectStatus(401)
          .expectJsonLike({
            message: /Token de acesso ausente.*/
          })
      })
    })
  })

  // Edge Cases and Error Handling
  describe('Edge Cases and Error Handling', () => {
    test('Should handle invalid JSON in request body', async () => {
      await spec().post('/usuarios').withBody('invalid json').withHeaders('Content-Type', 'application/json').expectStatus(400)
    })

    test('Should handle expired token', async () => {
      const expiredToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNTg5NzU4NzQ2LCJleHAiOjE1ODk3Njg3NDZ9.invalid'

      await spec()
        .post('/produtos')
        .withHeaders('Authorization', expiredToken)
        .withJson(testData.product)
        .expectStatus(401)
        .expectJsonLike({
          message: /Token de acesso ausente.*/
        })
    })

    test('Should handle malformed token', async () => {
      await spec()
        .post('/produtos')
        .withHeaders('Authorization', 'Bearer invalidtoken')
        .withJson(testData.product)
        .expectStatus(401)
        .expectJsonLike({
          message: /Token de acesso ausente.*/
        })
    })

    test('Should handle missing required headers', async () => {
      await spec().post('/produtos').withJson(testData.product).expectStatus(401)
    })
  })

  // Data Integrity Tests
  describe('Data Integrity and Business Rules', () => {
    test('Should not delete user with active cart', async () => {
      // Create a cart for admin user
      const cartData = {
        produtos: [
          {
            idProduto: testData.product._id,
            quantidade: 1
          }
        ]
      }

      await spec().post('/carrinhos').withHeaders('Authorization', testData.adminToken).withJson(cartData).expectStatus(201)

      // Try to delete user with cart
      await spec().delete(`/usuarios/${testData.adminUser._id}`).expectStatus(400).expectJsonLike({
        message: 'Não é permitido excluir usuário com carrinho cadastrado',
        idCarrinho: /.+/
      })

      // Cleanup: Cancel the cart
      await spec().delete('/carrinhos/cancelar-compra').withHeaders('Authorization', testData.adminToken).expectStatus(200)
    })

    test('Should not delete product that is in cart', async () => {
      // Create a cart with the product
      const cartData = {
        produtos: [
          {
            idProduto: testData.product._id,
            quantidade: 1
          }
        ]
      }

      await spec().post('/carrinhos').withHeaders('Authorization', testData.adminToken).withJson(cartData).expectStatus(201)

      // Try to delete product that's in cart
      await spec()
        .delete(`/produtos/${testData.product._id}`)
        .withHeaders('Authorization', testData.adminToken)
        .expectStatus(400)
        .expectJsonLike({
          message: 'Não é permitido excluir produto que faz parte de carrinho',
          idCarrinho: val => Array.isArray(val)
        })

      // Cleanup: Cancel the cart
      await spec().delete('/carrinhos/cancelar-compra').withHeaders('Authorization', testData.adminToken).expectStatus(200)
    })

    test('Should maintain product stock consistency', async () => {
      // Get initial product quantity
      const initialProduct = await spec().get(`/produtos/${testData.product._id}`).expectStatus(200)

      const initialQuantity = initialProduct.json.quantidade

      // Create cart with 2 items
      const cartData = {
        produtos: [
          {
            idProduto: testData.product._id,
            quantidade: 2
          }
        ]
      }

      await spec().post('/carrinhos').withHeaders('Authorization', testData.adminToken).withJson(cartData).expectStatus(201)

      // Check that product quantity decreased
      const afterCartProduct = await spec().get(`/produtos/${testData.product._id}`).expectStatus(200)

      expect(afterCartProduct.json.quantidade).toBe(initialQuantity - 2)

      // Cancel cart and check quantity restored
      await spec().delete('/carrinhos/cancelar-compra').withHeaders('Authorization', testData.adminToken).expectStatus(200)

      const afterCancelProduct = await spec().get(`/produtos/${testData.product._id}`).expectStatus(200)

      expect(afterCancelProduct.json.quantidade).toBe(initialQuantity)
    })
  })

  // Cleanup Tests
  describe('Cleanup Operations', () => {
    test('Should delete product successfully', async () => {
      await spec()
        .delete(`/produtos/${testData.product._id}`)
        .withHeaders('Authorization', testData.adminToken)
        .expectStatus(200)
        .expectJsonLike({
          message: /Registro excluído com sucesso/
        })
    })

    test('Should handle deletion of non-existent product', async () => {
      await spec()
        .delete('/produtos/nonexistentid')
        .withHeaders('Authorization', testData.adminToken)
        .expectStatus(200)
        .expectJsonLike({
          message: /Nenhum registro excluído/
        })
    })

    test('Should delete user successfully', async () => {
      await spec()
        .delete(`/usuarios/${testData.regularUser._id}`)
        .expectStatus(200)
        .expectJsonLike({
          message: /Registro excluído com sucesso/
        })
    })

    test('Should handle deletion of non-existent user', async () => {
      await spec()
        .delete('/usuarios/nonexistentid')
        .expectStatus(200)
        .expectJsonLike({
          message: /Nenhum registro excluído/
        })
    })
  })
})
