# live-list.js [![Build Status](https://secure.travis-ci.org/mantoni/live-list.js.png?branch=master)](http://travis-ci.org/mantoni/live-list.js) [![NPM version](https://badge.fury.io/js/live-list.png)](http://badge.fury.io/js/live-list)

Fast linked list with live iterator. The list can be modified while iterating
over the items.

Repository: <https://github.com/mantoni/live-list.js>

---

## Install with NPM

```
npm install live-list
```

## Download for browsers

Standalone browser package are here: <...>

You can also use npm and bundle it with your application using
[Browserify](http://browserify.org).

## Usage

```js
var List = require('live-list').List;

var l = new List();
l.push(3);
l.unshift(1);
l.insert(2, 3);

var i = l.iterator();
while (i.hasNext()) {
  console.log(i.next());
}
```

## List API

- `length`: Reflects the number of items in the list
- `push(value)`: Appends a value to the list
- `unshift(value)`: Prepends a value to the list
- `insert(value, before)`: Inserts a value before another value
- `remove(value)`: Removes the given value from the list
- `removeAll()`: Removes all values from the list
- `toArray()`: Returns a new array with all values in the list
- `iterator()`: Returns a new `Iterator`

## Iterator API

- `hasNext()`: Returns `true` if there are more items in the list to iterate
- `next()`: Returns the next item in the list
- `insert(value)`: Inserts a value into the list before the value
  returned by the last call to `next()`
- `remove()`: Removes the value from the list that was returned
  by the last call to `next()`

## License

Released