'use strict';

const Joi = require('joi');
const { dueDateRegExp } = require('../_utils');

module.exports = {
  createEntries: Joi.object({
    entries: Joi.array().items(Joi.object({
      title: Joi.string().required(),
      due_date: Joi.string().pattern(dueDateRegExp).required()
    }))
  }),

  updateEntry: Joi.object({
    id: Joi.number().integer().min(1).required(),
    data: Joi.object({
      title: Joi.string().optional(),
      due_date: Joi.string().pattern(dueDateRegExp).optional()
    })
    .or('title', 'due_date')
    .required()
  }),

  deleteEntry: Joi.object({
    id: Joi.number().integer().min(1).required()
  })
}