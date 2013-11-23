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


describe('list.removeAll', function () {

  beforeEach(function () {
    this.list = new List();
  });

  it('causes length to be 0', function () {
    this.list.push(42);

    this.list.removeAll();

    assert.strictEqual(this.list.length, 0);
  });

  it('resets hasNext to false for new iterator', function () {
    this.list.push(42);

    this.list.removeAll();

    assert.strictEqual(this.list.iterator().hasNext(), false);
  });

  it('resets hasNext to false for existing iterator', function () {
    this.list.push(42);
    var iterator = this.list.iterator();

    this.list.removeAll();

    assert.strictEqual(iterator.hasNext(), false);
  });

  it('does not break push', function () {
    this.list.push(1);

    this.list.removeAll();
    this.list.push(2);

    assert.deepEqual(this.list.toArray(), [2]);
  });

});
