const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const restrict = require('./middleware/restricted.js');
const session = require('express-session');

const authRouter = require('./auth/router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(
    session({
      name: 'notsession',
      secret: 'nobody tosses a dwarf!',
      cookie: {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        secure: false
      },
      httpOnly: false,
      resave: false,
      saveUninitialized: false,
    })
  );


server.use('/api/auth', authRouter);

module.exports = server;