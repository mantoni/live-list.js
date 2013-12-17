# Changes

## v0.3.0

- Iterator now inherits from [min-iterator][] and therefore supports
  `each(fn, scope)` and `toArray()`.

[min-iterator]: https://github.com/mantoni/min-iterator.js

## v0.2.0

- Changed iterator API: Removed `hasNext()`. Instead of throwing an error in
  `next()` after the last item, `undefined` is returned.

## v0.1.0

- Initial release
