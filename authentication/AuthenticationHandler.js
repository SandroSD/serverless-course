const db = rqeuire('../database');
const bcrypt = require('bcryptjs-then');

const { success, errResponse, signJWT, validRegistration } = require('./AuthenticationHelpers');

const User = require('../user/User');