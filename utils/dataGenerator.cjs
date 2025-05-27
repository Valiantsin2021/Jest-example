import { faker } from '@faker-js/faker'
import { spec } from 'pactum'

// Helper functions for test utilities
export class TestUtils {
  static generateUser(isAdmin = false) {
    return {
      nome: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password: 'teste123',
      administrador: isAdmin ? 'true' : 'false'
    }
  }

  static generateProduct() {
    return {
      nome: faker.commerce.productName(),
      preco: parseInt(faker.commerce.price({ min: 100, max: 1000 })),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 10, max: 100 })
    }
  }

  static async createUserAndLogin(userData) {
    // Create user
    const createResponse = await spec().post('/usuarios').withJson(userData).expectStatus(201)

    userData._id = createResponse.json._id

    // Login user
    const loginResponse = await spec()
      .post('/login')
      .withJson({
        email: userData.email,
        password: userData.password
      })
      .expectStatus(200)

    return {
      user: userData,
      token: loginResponse.json.authorization
    }
  }

  static async cleanup(userId, token, productId) {
    try {
      // Cancel any existing cart
      await spec().delete('/carrinhos/cancelar-compra').withHeaders('Authorization', token)

      // Delete product if exists
      if (productId) {
        await spec().delete(`/produtos/${productId}`).withHeaders('Authorization', token)
      }

      // Delete user if exists
      if (userId) {
        await spec().delete(`/usuarios/${userId}`)
      }
    } catch (error) {
      console.log('Cleanup warning:', error.message)
    }
  }
}
