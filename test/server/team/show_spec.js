/* global api, describe, it, expect, beforeEach */

const Team = require('../../../models/team');
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

let teamId;

describe('GET /teams/:id', () => {
  beforeEach(done => {
    Team
      .remove({})
      .then(() => Team.create(teamData))
      .then(team => {
        teamId = team._id;
      })
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api
      .get(`/api/teams/${teamId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object as a response body', done => {
    api
      .get(`/api/teams/${teamId}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return a valid team object', done => {
    api
      .get(`/api/teams/${teamId}`)
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
