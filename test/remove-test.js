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


describe('list.remove', function () {

  beforeEach(function () {
    this.list = new List();
  });

  it('does not iterate removed value', function () {
    this.list.push(1);
    this.list.push(2);
    this.list.push(3);
    var i = this.list.iterator();

    i.next();
    this.list.remove(2);

    assert(i.hasNext());

    assert.equal(i.next(), 3);
    assert.strictEqual(i.hasNext(), false);
  });

  it('replaces _tail with _head if last item is removed', function () {
    this.list.push('x');
    this.list.remove('x');

    assert.strictEqual(this.list._tail, this.list._head);
  });

  it('replaces _tail with new last item on remove', function () {
    this.list.push('x');
    this.list.push('y');
    this.list.remove('y');

    assert.strictEqual(this.list._tail.value, 'x');
  });

});
