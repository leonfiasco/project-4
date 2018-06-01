const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI =  process.env.MONGODB_URI || `mongodb://localhost/GoHoop-${env}`;
const secret = process.env.SECRET || 'xyz';

module.exports = { port, dbURI, secret, env };
