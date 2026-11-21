'use strict';

/**
 * test.js
 * 
 * Tests for is-even-clone using Node.js built-in assert module.
 * Run with:  npm test
 */

const assert = require('assert');
const isEven = require('./index');

// ─── Helper ──────────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log('  ✓  ' + description);
    passed++;
  } catch (err) {
    console.error('  ✗  ' + description);
    console.error('     ' + err.message);
    failed++;
  }
}

// ─── Even positive numbers ────────────────────────────────────────────────────

console.log('\nEven positive numbers');
test('isEven(2) === true',  () => assert.strictEqual(isEven(2),  true));
test('isEven(4) === true',  () => assert.strictEqual(isEven(4),  true));
test('isEven(100) === true',() => assert.strictEqual(isEven(100),true));

// ─── Odd positive numbers ─────────────────────────────────────────────────────

console.log('\nOdd positive numbers');
test('isEven(1) === false', () => assert.strictEqual(isEven(1),  false));
test('isEven(7) === false', () => assert.strictEqual(isEven(7),  false));
test('isEven(99) === false',() => assert.strictEqual(isEven(99), false));

// ─── Zero ─────────────────────────────────────────────────────────────────────

console.log('\nZero');
test('isEven(0) === true',  () => assert.strictEqual(isEven(0),  true));

// ─── Negative even numbers ────────────────────────────────────────────────────

console.log('\nNegative even numbers');
test('isEven(-2) === true', () => assert.strictEqual(isEven(-2), true));
test('isEven(-4) === true', () => assert.strictEqual(isEven(-4), true));

// ─── Negative odd numbers ─────────────────────────────────────────────────────

console.log('\nNegative odd numbers');
test('isEven(-1) === false',() => assert.strictEqual(isEven(-1), false));
test('isEven(-3) === false',() => assert.strictEqual(isEven(-3), false));

// ─── Decimal numbers ──────────────────────────────────────────────────────────

console.log('\nDecimal numbers (never even)');
test('isEven(2.5) === false', () => assert.strictEqual(isEven(2.5), false));
test('isEven(3.1) === false', () => assert.strictEqual(isEven(3.1), false));
test('isEven(4.0) === true',  () => assert.strictEqual(isEven(4.0), true));  // 4.0 is an integer

// ─── Invalid inputs – should throw TypeError ──────────────────────────────────

console.log('\nInvalid inputs (should throw TypeError)');

test('isEven("4") throws TypeError', () => {
  assert.throws(() => isEven('4'), TypeError);
});

test('isEven(null) throws TypeError', () => {
  assert.throws(() => isEven(null), TypeError);
});

test('isEven(undefined) throws TypeError', () => {
  assert.throws(() => isEven(undefined), TypeError);
});

test('isEven(NaN) throws TypeError', () => {
  assert.throws(() => isEven(NaN), TypeError);
});

test('isEven(Infinity) throws TypeError', () => {
  assert.throws(() => isEven(Infinity), TypeError);
});

test('isEven(-Infinity) throws TypeError', () => {
  assert.throws(() => isEven(-Infinity), TypeError);
});

test('isEven({}) throws TypeError', () => {
  assert.throws(() => isEven({}), TypeError);
});

test('isEven([]) throws TypeError', () => {
  assert.throws(() => isEven([]), TypeError);
});

// ─── Summary ──────────────────────────────────────────────────────────────────

console.log('\n─────────────────────────────────────────');
console.log('Tests passed: ' + passed);
console.log('Tests failed: ' + failed);
console.log('─────────────────────────────────────────\n');

if (failed > 0) {
  process.exit(1);
}
