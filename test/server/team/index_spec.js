/* global api, describe, it, expect, beforeEach */


const Team = require('../../../models/team');

const teamData = [{
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
}];

describe('GET /teams', () => {
  beforeEach(done => {
    Team.remove({})
      .then(() => Team.create(teamData))
      .then(() => done());
  });
  it('should return a 200 response', done => {
    api
      .get('/api/teams')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
  it('should return an array', done => {
    api
      .get('/api/teams')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of valid team objects', done => {
    api
      .get('/api/teams')
      .end((err, res) => {
        res.body
          .forEach((team, index) => {
            Object.keys(teamData[index]).forEach(field => {
              if(field === 'members') expect(res.body[index][field]).to.be.an('array');
              else expect(res.body[index][field]).to.deep.eq(teamData[index][field]);
            });
          });
        done();
      });
  });
});
