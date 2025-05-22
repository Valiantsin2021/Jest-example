import { request, spec } from 'pactum'
import { eachLike, regex, string } from 'pactum-matchers'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
describe('Test Airports API', () => {
  test(`GET all airports`, async () => {
    // test.js
    request.setBaseUrl('https://airportgap.com/api')
    await spec()
      .get('/airports')
      .expectStatus(200)
      .expectJsonLength('data', 30)
      .expectJson('data[0].id', 'GKA')
      .expectJson('data[0].type', 'airport')
      .expectJson('data[0].attributes.name', 'Goroka Airport')
      .expectJson('data[0].attributes.city', 'Goroka')
      .expectJson('data[0].attributes.country', 'Papua New Guinea')
      .expectJson('data[0].attributes.iata', 'GKA')
      .expectJson('data[0].attributes.icao', 'AYGA')
      .expectJson('data[0].attributes.latitude', '-6.08169')
      .expectJson('data[0].attributes.longitude', '145.391998')
      .expectJson('data[0].attributes.altitude', 5282)
      .expectJson('data[0].attributes.timezone', 'Pacific/Port_Moresby')
      .expectJsonMatch({
        data: eachLike({
          id: string(),
          type: string(),
          attributes: {
            name: regex(/\w+\s?\w+/),
            city: string(),
            country: string(),
            iata: string(),
            icao: string(),
            latitude: regex(/-?\d+\.\d+/),
            longitude: regex(/-?\d+\.\d+/),
            altitude: regex(/\d+/),
            timezone: string()
          }
        })
      })
  })
})
