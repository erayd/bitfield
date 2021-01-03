Bitfield
========

A generic bitfield manipulation class, used to abstract defined parts of a
BigInt as boolean or BigInt properties on an object.

## Usage

```javascript
// start with one integer property two bits wide at offset 4, initialised to zero
var b = new bitField({myProp: { offset: 4, size: 2 }, 0n);

// add a boolean property at offset 1
b.defineProperty("otherProp", 1);

// add another integer property two bits wide at offset 2
b.defineProperty("oneMoreProp", 2, 2);

// set some values
b.otherProp = true;
b.oneMoreProp = 3;
```
