const app = require('../../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('tags', function () {
  it('Should get all tags', function (done) {
    request(app)
      .get('/api/tags/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        expect(resp.body).to.be.an('array')
        done()
      })
  })

  it('Should create a new tag', function (done) {
    request(app)
      .post('/api/tags/')
      .send({
        tag: 'testTag'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, resp) {
        expect(resp.body).to.be.an('object')
        done()
      })
  })

  it('Should get one tag', function (done) {
    request(app)
      .post('/api/tags/')
      .send({
        tag: 'testTagForID'
      })
      .set('Accept', 'application/json')
      .end(function (err, resp) {
        let tag = resp.body
        request(app)
          .get('/api/tags/' + tags.id)
          .end(function (err, resp) {
            expect(resp.body.tag).to.equal('testTagForID')
            done()
          })
      })
  })
})
