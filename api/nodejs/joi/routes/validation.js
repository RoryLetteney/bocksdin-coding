'use strict';

const Joi = require('joi');

const dueDatePattern = new RegExp('^\d{2}\/\d{2}\/\d{4}\sat\s\d{2}:\d{2}(am|pm)$');

module.exports = {
  createEntries: Joi.object({
    entries: Joi.array().items(Joi.object({
      title: Joi.string().required(),
      due_date: Joi.string().pattern(dueDatePattern).required()
    }))
  }),

  updateEntry: Joi.object({
    id: Joi.number().integer().min(1).required(),
    data: Joi.object({
      title: Joi.string().optional(),
      due_date: Joi.string().pattern(dueDatePattern).optional()
    })
    .or('title', 'due_date')
    .required()
  }),

  deleteEntry: Joi.object({
    id: Joi.number().integer().min(1).required()
  })
}