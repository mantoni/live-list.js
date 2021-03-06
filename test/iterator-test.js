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

var MinIterator = require('min-iterator');
var List        = require('../lib/list').List;


describe('iterator', function () {

  beforeEach(function () {
    this.list = new List();
  });

  it('is an instance of MinIteartor', function () {
    var i = this.list.iterator();

    assert(i instanceof MinIterator);
  });

  it('has no next item initially', function () {
    var i = this.list.iterator();

    assert.strictEqual(i.next(), undefined);
  });

  it('has next item after push', function () {
    this.list.push(1);

    var i = this.list.iterator();

    assert.equal(i.next(), 1);
  });

  it('returns pushed values and then undefined', function () {
    this.list.push(3);
    this.list.push(7);
    this.list.push(42);
    var i = this.list.iterator();

    assert.equal(i.next(), 3);
    assert.equal(i.next(), 7);
    assert.equal(i.next(), 42);
    assert.strictEqual(i.next(), undefined);
    assert.strictEqual(i.next(), undefined);
  });

  it('returns object pushed after next', function () {
    var i = this.list.iterator();
    this.list.push(1);

    i.next();
    this.list.push(2);

    assert.equal(i.next(), 2);
    assert.strictEqual(i.next(), undefined);
  });

  it('inserts before first item', function () {
    this.list.push(1);
    var i = this.list.iterator();

    i.next();
    i.insert(0);

    assert.deepEqual(this.list.toArray(), [0, 1]);
    assert.strictEqual(i.next(), undefined);
  });

  it('insert does not confuse push', function () {
    this.list.push(1);
    var i = this.list.iterator();

    i.next();
    i.insert(0);
    this.list.push(2);

    assert.deepEqual(this.list.toArray(), [0, 1, 2]);
  });

  it('inserts before existing item', function () {
    this.list.push(2);
    var i = this.list.iterator();

    i.next();
    i.insert(1);

    assert.deepEqual(this.list.toArray(), [1, 2]);
  });

  it('removes the only item', function () {
    this.list.push(1);
    var i = this.list.iterator();

    i.next();
    i.remove();

    assert.deepEqual(this.list.toArray(), []);
    assert.strictEqual(this.list.length, 0);
    assert.strictEqual(i.next(), undefined);
  });

  it('remove does not break push', function () {
    this.list.push(1);
    var i = this.list.iterator();

    i.next();
    i.remove();
    this.list.push(2);

    assert.deepEqual(this.list.toArray(), [2]);
    assert.strictEqual(this.list.length, 1);
  });

  it('remove does not break insert', function () {
    this.list.push(0);
    this.list.push(2);
    var i = this.list.iterator();

    i.next();
    i.remove();
    i.next();
    i.insert(1);

    assert.deepEqual(this.list.toArray(), [1, 2]);
    assert.strictEqual(this.list.length, 2);
    assert.strictEqual(i.next(), undefined);
  });

  it('remove can be performed twice', function () {
    this.list.push(1);
    this.list.push(2);
    var i = this.list.iterator();

    i.next();
    i.remove();

    assert(i.next());

    i.next();
    i.remove();

    assert.strictEqual(i.next(), undefined);
    assert.deepEqual(this.list.toArray(), []);
    assert.strictEqual(this.list.length, 0);
  });

  it('removes item before other item', function () {
    this.list.push(1);
    this.list.push(2);
    var i = this.list.iterator();

    i.next();
    i.remove();

    assert(i.next());
    assert.deepEqual(this.list.toArray(), [2]);
    assert.strictEqual(this.list.length, 1);
  });

  it('removes item between other items', function () {
    this.list.push(1);
    this.list.push(2);
    this.list.push(3);
    var i = this.list.iterator();

    i.next();
    i.next();
    i.remove();

    assert(i.next());
    assert.deepEqual(this.list.toArray(), [1, 3]);
    assert.strictEqual(this.list.length, 2);
  });

});
