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


describe('list.unshift', function () {

  beforeEach(function () {
    this.list = new List();
  });

  it('inserts value at first index', function () {
    this.list.push(2);
    this.list.push(3);

    this.list.unshift(1);

    assert.deepEqual(this.list.toArray(), [1, 2, 3]);
    assert.strictEqual(this.list.length, 3);
  });

  it('inserts value into empty list', function () {
    this.list.unshift(1);

    assert.deepEqual(this.list.toArray(), [1]);
    assert.strictEqual(this.list.length, 1);
  });

});
