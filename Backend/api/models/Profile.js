/**
 * Profile.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
// import { v4 as uuid } from 'uuid';
const { v4: uuid } = require('uuid');

module.exports = {

  attributes: {
    id:                 { type: 'string', autoIncrement: true, unique:true },
    name:             { type: 'string', required: true, unique:true },
    users: {
      collection: 'user',
      via: 'profile'
    },
    routes: {
      collection: 'routes',
      via: 'profile'
    },
  },
  beforeCreate: function (values, next) {
    values.id = uuid();
    return next();
  },
};

