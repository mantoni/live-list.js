# live-list.js

[![Build Status]](https://travis-ci.org/mantoni/live-list.js)
[![SemVer]](http://semver.org)
[![License]](https://github.com/mantoni/live-list.js/blob/master/LICENSE)

Fast linked list with live iterator. The list can be modified while iterating
over the items.

## Install with npm

```
npm install live-list
```

## Browser compatibility

To use this module in a browser, download the npm package and then use
[Browserify](http://browserify.org) to create a standalone version.

## Usage

```js
var List = require('live-list').List;

var l = new List();
l.push(3);
l.unshift(1);
l.insert(2, 3);

var v, i = l.iterator();
while ((v = i.next()) !== undefined) {
  console.log(v);
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

The iterator is derived from [min-iterator][] and extends the API with these
functions:

- `insert(value)`: Inserts a value into the list before the value
  returned by the last call to `next()`
- `remove()`: Removes the value from the list that was returned
  by the last call to `next()`

[min-iterator]: https://github.com/mantoni/min-iterator.js

## License

MIT

[Build Status]: http://img.shields.io/travis/mantoni/live-list.js.svg
[SemVer]: http://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: http://img.shields.io/npm/l/live-list.svg
