/*
 * live-list.js
 *
 * Copyright (c) 2013 Maximilian Antoni <mail@maxantoni.de>
 *
 * @license MIT
 */
'use strict';

function Item(value, next, prev) {
  this.value = value;
  this.next  = next;
  this.prev  = prev;
}

exports.Item = Item;
