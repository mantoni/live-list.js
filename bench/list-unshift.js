/*
 * live-list.js
 *
 * Copyright (c) 2012 Maximilian Antoni <mail@maxantoni.de>
 *
 * @license MIT
 */
'use strict';

var bench = require('bench');
var list  = require('../lib/list');

var times = 50;

exports.compare = {

  'list.unshift': function () {
    var a = [];
    var l = new list.List();
    var i;
    for (i = 0; i < times; i++) {
      l.unshift(i);
    }
    return a;
  },

  'array.unshift': function () {
    var l = new list.List();
    var a = [];
    var i;
    for (i = 0; i < times; i++) {
      a.unshift(i);
    }
    return l;
  }

};

bench.runMain();
