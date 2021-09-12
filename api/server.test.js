const request = require('supertest')
const server = require('./server.js')
const db = require('../data/dbConfig')

describe('intial tests', ()=>{
test('sanity check', () => {
  expect(true).toBe(true)
})

test('environment check', () => {
  expect(process.env.NODE_ENV).toBe('testing')})
})

describe('Endpoint Tests', ()=>{
  describe('[POST] register', ()=>{
    test('responds with error when no username is entered', async ()=>{
      const res = await request(server).post('/api/auth/register').send({ username: '', password: 12345})
      expect(res.body).toMatchObject({message: 'username and password required'})
    })
    test('responds with error when no password is entered', async ()=>{
      const res = await request(server).post('/api/auth/register').send({ username: 'Rex', password: ''})
      expect(res.body).toMatchObject({message: 'username and password required'})
    })

    describe('[POST] login',()=>{
      test('responds with error when no username is entered', async ()=>{
        const res = await request(server).post('/api/auth/login').send({ username: '', password: 12345})
        expect(res.body).toMatchObject({message: 'username and password required'})
      })
      test('responds with error when no password is entered', async ()=>{
        const res = await request(server).post('/api/auth/login').send({ username: 'Rex', password: ''})
        expect(res.body).toMatchObject({message: 'username and password required'})
      })
    })
  })
})

