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


describe('list.length', function () {

  beforeEach(function () {
    this.list = new List();
  });

  it('is initialized with zero', function () {
    assert.strictEqual(this.list.length, 0);
  });

  it('reflects number of pushed items', function () {
    this.list.push(2);
    this.list.push(3);
    this.list.push(7);
    this.list.push(42);

    assert.strictEqual(this.list.length, 4);
  });

  it('is incremented by insert', function () {
    this.list.push(42);

    this.list.insert(7, 42);

    assert.strictEqual(this.list.length, 2);
  });

  it('is incremented by unshift', function () {
    this.list.push(42);

    this.list.unshift(7);

    assert.strictEqual(this.list.length, 2);
  });

  it('is incremented by iterator.insert', function () {
    this.list.push(42);
    var i = this.list.iterator();
    i.next();

    i.insert(7);

    assert.strictEqual(this.list.length, 2);
  });

  it('is decremented by remove', function () {
    this.list.push(2);
    this.list.push(3);
    this.list.push(7);

    this.list.remove(3);

    assert.strictEqual(this.list.length, 2);
  });

  it('is decremented by iterator.remove', function () {
    this.list.push(2);
    this.list.push(3);
    this.list.push(7);
    var i = this.list.iterator();
    i.next();
    i.next();

    i.remove();

    assert.strictEqual(this.list.length, 2);
  });

  it('is reset to zero by removeAll', function () {
    this.list.push(2);
    this.list.push(3);
    this.list.push(7);

    this.list.removeAll();

    assert.strictEqual(this.list.length, 0);
  });

});
