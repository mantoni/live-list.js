# Changes

## 1.0.0

- Simplify build process with Mochify
- Run browser tests with SauceLabs

## 0.3.0

- Iterator now inherits from [min-iterator][] and therefore supports
  `each(fn, scope)` and `toArray()`.

[min-iterator]: https://github.com/mantoni/min-iterator.js

## 0.2.0

- Changed iterator API: Removed `hasNext()`. Instead of throwing an error in
  `next()` after the last item, `undefined` is returned.

## 0.1.0

- Initial release
