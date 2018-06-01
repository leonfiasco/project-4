const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Team = require('../models/team');
const Player = require('../models/player');
// const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Team.create([{
    name: 'East London Royals',
    image: 'http://www.fetchlogos.com/wp-content/uploads/2015/11/East-London-Royals-Logo.jpg',
    address: '55 Durward St, London E1 5BA, UK',
    location: {
      lat: 51.5200234,
      lng: -0.0614476
    }
  },{
    name: 'Newham Youngbloods',
    image: 'https://www.newhamyoungbloods.co.uk/wp-content/uploads/2015/04/YB1000px.png',
    address: '3 Royal Mint Ct, Whitechapel, London EC3N 4QN, UK',
    location: {
      lat: 51.5100234,
      lng: -0.0714476
    }
  },{
    name: 'London Pioneers',
    image: 'https://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_416442/Image/Athletics/Basketball/Basketball%20Logo.png',
    address: '51-55 Approach Rd, London E2, UK',
    location: {
      lat: 51.531383,
      lng: -0.051015000000006694
    }
  }])
    .then(teams => {
      console.log(`${teams.length} teams created`);

      return Player.create([{
        name: 'Trae Young',
        team: teams[0],
        position: 'PG',
        level: 'Intermediate',
        age: '21',
        tel: '07957754758',
        image: 'https://www.thestepien.com/wp-content/uploads/2018/03/trae-young.jpg'
      },{
        name: 'Colin Sexton',
        team: teams[0],
        position: 'SG',
        level: 'Recreational',
        age: '18',
        tel: '07940224603',
        image: 'https://res-2.cloudinary.com/rivals/image/upload/f_auto,q_auto,t_large/qozvfcv817x29j1gu5jk'
      },{
        name: 'Lamelo Ball',
        team: teams[0],
        position: 'SF',
        level: 'Competitive',
        age: '22',      tel: '07957754758',
        image: 'http://thesource.com/wp-content/uploads/2018/05/xxx_lamelo_ball_20170527_usa_djm_043_91257764.jpg'
      },{
        name: 'Zhou Qi',
        team: teams[0],
        position: 'C',
        level: 'Intermediate',
        age: '21',
        tel: '07957754758',
        image: 'http://www.nbacoinsforsale.com/upload/images/cheap%20nba%20coins.png'
      },{
        name: 'Shareef O\'neal',
        team: teams[0],
        position: 'PF',
        level: 'Intermediate',
        age: '23',
        tel: '07957754758',
        image: 'http://cfvod.kaltura.com/p/591531/sp/59153100/thumbnail/entry_id/0_tqkihk4e/version/100012/width/720/height/472'
      },{
        name: 'Corey Sanders',
        team: teams[1],
        position: 'SF',
        level: 'Intermediate',
        age: '22',
        tel: '07957754758',
        image: 'https://pbs.twimg.com/media/Bwtvr-UCUAA14tr.jpg'
      },{
        name: 'Cassius Stanley',
        team: teams[1],
        position: 'PG',
        level: 'Intermediate',
        age: '18',
        tel: '07957754758',
        image: 'https://res-1.cloudinary.com/rivals/image/upload/t_large/hrxtlqftznzq3nsl4oqk'
      },{
        name: 'Trevon Duval',
        team: teams[1],
        position: 'SG',
        level: 'Intermediate',
        age: '23',
        tel: '07957754758',
        image: 'https://res-5.cloudinary.com/rivals/image/upload/f_auto,q_auto,t_large/veifdavyyx5qmb1kncet'
      },{
        name: 'Mo Bamba',
        team: teams[1],
        position: 'PF',
        level: 'Intermediate',
        age: '25',
        tel: '07957754758',
        image: 'http://thumbnails.cbsig.net/CBS_Production_MaxPreps_VMS/571/83/mobamba.jpg'
      },{
        name: 'Moses Brown',
        team: teams[1],
        position: 'C',
        level: 'Intermediate',
        age: '20',
        tel: '07957754758',
        image: 'http://www.kentucky.com/sports/college/kentucky-sports/uk-basketball-men/ntikw9/picture182960386/alternates/FREE_1140/2017_MosesBrownHoophall_Classic(2)'
      },{
        name: 'Luka Doncic',
        team: teams[2],
        position: 'PG',
        level: 'Intermediate',
        age: '18',
        tel: '07957754758',
        image: 'https://mk0slamonlinensgt39k.kinstacdn.com/wp-content/uploads/2018/05/LUKA-2080-1000-640x440.jpg'
      },{
        name: 'Chris Lykes',
        team: teams[2],
        position: 'PG',
        level: 'Intermediate',
        age: '21',
        tel: '07957754758',
        image: 'https://virginia.sportswar.com/wp-content/uploads/sites/14/2016/05/R2017BB_Lykes_Chris_001f.jpg'
      },{
        name: 'Michael Porter jr.',
        team: teams[2],
        position: 'SG',
        level: 'Intermediate',
        age: '19',
        tel: '07957754758',
        image: 'https://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/ga9fmmhdyy0yscpf1r73/michael-porter-jr'
      },{
        name: 'kostas antetokounmpo',
        team: teams[2],
        position: 'PF',
        level: 'Intermediate',
        age: '20',
        tel: '07957754758',
        image: 'http://static1.squarespace.com/static/560195f3e4b0fcc5265b7b78/562b0f76e4b0b7066cf45af6/5abd30e4562fa7200824ccef/1522441927421/A60D5030+%281%29.jpg?format=1000w'
      },{
        name: 'Luke Maye',
        team: teams[2],
        position: 'C',
        level: 'Intermediate',
        age: '24',
        tel: '07957754758',
        image: 'https://wwwcache.wralsportsfan.com/asset/colleges/2018/03/03/17390870/uncduke65AN6Q3285-DMID1-5evpkpgpu-640x360.jpg'
      }]);
    })
    .then(players => console.log(`${players.length} players created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
