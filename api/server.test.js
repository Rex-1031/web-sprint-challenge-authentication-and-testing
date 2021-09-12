// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

const request = require('supertest')
const server = require('./server.js')

describe('server.js', ()=>{
  describe('index route', ()=>{
    test('should return an OK status code from the index route', async ()=>{
      const expectedStatusCode = 200
      const response = await request(server).get('/')
      expect(response.status).toEqual(expectedStatusCode)
    })
  })
})