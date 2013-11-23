/*
 * live-list.js
 *
 * Copyright (c) 2013 Maximilian Antoni <mail@maxantoni.de>
 *
 * @license MIT
 */
/*globals describe, it, before, after, beforeEach, afterEach*/
'use strict';

var assert = require('assert');

var list   = require('../lib/list');


describe('list.constructor', function () {

  it('returns an instance of List', function () {
    var l = new list.List();

    assert(l instanceof list.List);
  });

});


describe('iterator.constructor', function () {

  it('returns an instance of Iterator', function () {
    var l = new list.List();
    var i = new list.Iterator(l);

    assert(i instanceof list.Iterator);
  });

});
