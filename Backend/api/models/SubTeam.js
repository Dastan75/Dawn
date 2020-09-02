/**
 * Subteam.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
// import { v4 as uuid } from 'uuid';
const { v4: uuid } = require('uuid');

// var bcrypt = require('bcrypt');

module.exports = {
  // schema: true,
  attributes: {
    id:                 { type: 'string', autoIncrement: true, unique:true },
    name:              { type: 'string', required: true, unique:true },
    team: {
      model: 'team'
    },
  },
  beforeCreate: function (values, next) {
    values.id = uuid();
    return next();
  },
};
