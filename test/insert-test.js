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
var sinon  = require('sinon');

var List   = require('../lib/list').List;


describe('list.insert', function () {

  beforeEach(function () {
    this.list = new List();
  });

  it('inserted value before existing item', function () {
    this.list.push(2);

    this.list.insert(1, 2);

    assert.deepEqual(this.list.toArray(), [1, 2]);
  });

});
