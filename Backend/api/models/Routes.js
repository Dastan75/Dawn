/**
 * Routes.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
// import { v4 as uuid } from 'uuid';
const { v4: uuid } = require('uuid');

module.exports = {
  attributes: {
    id:                 { type: 'string', autoIncrement: true, unique:true },
    name:             { type: 'string'},
    url:              { type: 'string', required: true},
    boGet:            { type: 'string', defaultsTo: 'DENY ALL', isIn: ['ALLOW ALL', 'DENY ALL', 'ALLOW OWNER'] },
    boPost:           { type: 'string', defaultsTo: 'DENY ALL', isIn: ['ALLOW ALL', 'DENY ALL', 'ALLOW OWNER'] },
    boDelete:         { type: 'string', defaultsTo: 'DENY ALL', isIn: ['ALLOW ALL', 'DENY ALL', 'ALLOW OWNER'] },
    boPatch:          { type: 'string', defaultsTo: 'DENY ALL', isIn: ['ALLOW ALL', 'DENY ALL', 'ALLOW OWNER'] },
    isWeb:            { type: 'boolean', required: true },
    isDisabled:       { type: 'boolean', required: true },
    profile: {
      model: 'profile'
    },
  },
  beforeCreate: function (values, next) {
    values.id = uuid();
    return next();
  },
};