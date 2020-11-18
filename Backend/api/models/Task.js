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
    title:                { type: 'string', required: true },
    rRule:                { type: 'string' },
    notes:                { type: 'string' },
    choosedColor:         { type: 'string' },
    startDate:            { type: 'string' },
    endDate:              { type: 'string' },
    allDay:               { type: 'boolean' },
    onPlanner:            { type: 'boolean', defaultsTo: false },
    isTask:               { type: 'boolean', defaultsTo: true },
    subtask:              { type: 'string' },
    estTime:              { type: 'number', defaultsTo: 1 },
    trackedTime:          { type: 'number' },
    dueDate:              { type: 'string' },
    percent:              { type: 'number', defaultsTo: 0 },
    priority:             { type: 'string', defaultsTo: 'medium' },
    objectives:           { type: 'string' },
    owner:                { type: 'string' },
    ownerName:            { type: 'string' },
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
