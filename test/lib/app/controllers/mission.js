/**
 * Created by igor on 20.10.15.
 */

'use strict';

const _ = require('lodash');
const Mission = require('../models/mission');
const BaseController = require('./base.controller');

class MissionController extends BaseController {
  constructor(options) {
    options = options || {};
    _.assign(options, {
      dataSource: {
        type: 'mongoose',
        options: {
          model: Mission,
        },
      },
      path: '/api/missions',
      fields: [
        '_id',
        'description',
        {
          name: 'agent',
          fields: ['name'],
        },
      ],
      qFields: [
        '_id',
        'description',
      ],
    });

    super(options);
  }
}

module.exports = MissionController;
