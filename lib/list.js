/*
 * live-list.js
 *
 * Copyright (c) 2013 Maximilian Antoni <mail@maxantoni.de>
 *
 * @license MIT
 */
'use strict';

var Item     = require('./item').Item;
var Iterator = require('./iterator').Iterator;

function List() {
  this._head  = this._tail = new Item(null, null, null);
  this.length = 0;
}

List.prototype = {

  push: function (value) {
    this._tail = this._tail.next = new Item(value, null, this._tail);
    this.length++;
  },

  insert: function (value, before) {
    var i = new Iterator(this);
    while (i.hasNext()) {
      var v = i.next();
      if (v === before) {
        i.insert(value);
        return;
      }
    }
  },

  unshift: function (value) {
    if (this.length) {
      var i = new Iterator(this);
      i.next();
      i.insert(value);
    } else {
      this.push(value);
    }
  },

  remove: function (value) {
    var i = new Iterator(this);
    while (i.hasNext()) {
      var v = i.next();
      if (v === value || v.fn === value) {
        i.remove();
        return;
      }
    }
  },

  removeAll: function () {
    this._head.next = null;
    this._tail      = this._head;
    this.length     = 0;
  },

  iterator: function () {
    return new Iterator(this);
  },

  toArray: function (a) {
    a = a || [];
    var i = this._head;
    while (i.next) {
      i = i.next;
      a.push(i.value);
    }
    return a;
  }

};

exports.List     = List;
exports.Iterator = Iterator;
