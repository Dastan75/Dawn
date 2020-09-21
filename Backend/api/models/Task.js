/**
 * Task.js
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
    id:                   { type: 'string', autoIncrement: true, unique:true },
    title:                 { type: 'string', required: true },
    rRule:                { type: 'string' },
    notes:                { type: 'string' },
    color:                { type: 'string' },
    startDate:            { type: 'string' },
    endDate:              { type: 'string' },
    allDay:               { type: 'boolean' },
    onPlanner:            { type: 'boolean', defaultsTo: false },
    isTask:               { type: 'boolean', defaultsTo: true },
    category: {
      model: 'taskcategory'
    },
    project: {
      model: 'project'
    }
  },
  beforeCreate: function (values, next) {
    values.id = uuid();
    return next();
  },
};
