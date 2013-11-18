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

  'list.insert': function () {
    var a = [];
    var l = new list.List();
    l.push(0);
    var i;
    for (i = 0; i < times; i++) {
      l.insert(i, i);
    }
  },

  'array.splice': function () {
    var l = new list.List();
    var a = [];
    a.push(times);
    var i;
    for (i = 0; i < times; i++) {
      a.splice(0, 0, i);
    }
  }

};

bench.runMain();
