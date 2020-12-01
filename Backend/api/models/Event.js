/**
 * Event.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const { v4: uuid } = require('uuid');


module.exports = {
  // schema: true,
  attributes: {
    id:                   { type: 'string', autoIncrement: true, unique:true },
    title:                { type: 'string', required: true },
    rRule:                { type: 'string' },
    notes:                { type: 'string' },
    color:                { type: 'string' },
    startDate:            { type: 'string', required: true },
    endDate:              { type: 'string' },
    allDay:               { type: 'boolean' },
    isTask:               { type: 'boolean', defaultsTo: false },
    owner: {
      model: 'user'
    },
  },
  beforeCreate: function (values, next) {
    values.id = uuid();
    return next();
  },
};
