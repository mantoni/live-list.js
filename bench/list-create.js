/*
 * live-list.js
 *
 * Copyright (c) 2013 Maximilian Antoni <mail@maxantoni.de>
 *
 * @license MIT
 */
'use strict';

var bench = require('bench');
var list  = require('../lib/list');

exports.compare = {

  'list': function () {
    return new list.List();
  },

  'array': function () {
    return [];
  }

};

bench.runMain();
