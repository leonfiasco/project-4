/* global api, describe, it, expect, beforeEach */

const Team = require('../../../models/team');
const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../../config/environment');

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

const teamData = {
  name: 'East London Royals',
  members: [{
    name: 'Trae Young',
    position: 'PG',
    level: 'intermediate',
    tel: '07957754758',
    image: 'https://www.thestepien.com/wp-content/uploads/2018/03/trae-young.jpg'
  }],
  image: 'http://www.fetchlogos.com/wp-content/uploads/2015/11/East-London-Royals-Logo.jpg',
  location: {
    lat: 51.5200234,
    lng: -0.0614476
  }
};

let token;
describe('POST /teams', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Team.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      })
      .then(() => done());
  });

  it('should return a 401 response if there is no token', done => {
    api
      .post('/api/teams')
      .send(teamData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should retrun a 201 response with a token', done => {
    api
      .post('/api/teams')
      .set('Authorization', `Bearer ${token}`)
      .send(teamData)
      .end((err,res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });

  it('should return a valid team object', done => {
    api
      .post('/api/teams')
      .set('Authorization', `Bearer ${token}`)
      .send(teamData)
      .end((err, res) => {
        expect(res.body._id).to.be.a('string');
        Object.keys(teamData).forEach(field => {
          if(field === 'members') expect(res.body[field]).to.be.an('array');
          else expect(res.body[field]).to.deep.eq(teamData[field]);
        });
        done();
      });
  });
});
