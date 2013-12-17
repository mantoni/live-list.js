/*
 * live-list.js
 *
 * Copyright (c) 2013 Maximilian Antoni <mail@maxantoni.de>
 *
 * @license MIT
 */
'use strict';

var inherits    = require('inherits');
var MinIterator = require('min-iterator');
var Item        = require('./item').Item;

function Iterator(list) {
  this._list = list;
  this._item = list._head;
}

inherits(Iterator, MinIterator);

Iterator.prototype.next = function () {
  var c = this._item.next;
  if (c) {
    this._item = c;
    return this._item.value;
  }
  return undefined;
};

Iterator.prototype.insert = function (value) {
  var c = this._item;
  var i = new Item(value, c, c.prev);
  c.prev.next = i;
  c.prev = i;
  this._list.length++;
};

Iterator.prototype.remove = function () {
  var c = this._item;
  c.prev.next = c.next;
  if (c.next) {
    c.next.prev = c.prev;
  }
  if (this._list._tail === c) {
    this._list._tail = c.prev;
  }
  this._item = c.prev;
  this._list.length--;
};

exports.Iterator = Iterator;
