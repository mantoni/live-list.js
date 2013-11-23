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

var List   = require('../lib/list').List;


describe('list.toArray', function () {

  beforeEach(function () {
    this.list = new List();
  });

  it('returns empty array for empty list', function () {
    var a = this.list.toArray();

    assert.deepEqual(a, []);
  });

  it('returns pushed values', function () {
    this.list.push(2);
    this.list.push(3);
    this.list.push(7);
    this.list.push(42);

    var a = this.list.toArray();

    assert.deepEqual(a, [2, 3, 7, 42]);
  });

  it('appends values to given array', function () {
    this.list.push(7);
    this.list.push(42);

    var a = [2, 3];
    this.list.toArray(a);

    assert.deepEqual(a, [2, 3, 7, 42]);
  });

});
