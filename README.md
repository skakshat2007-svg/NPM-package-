
# is-even-clone

A simple, beginner-friendly npm package that checks whether a number is even.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)](https://nodejs.org/)

---

## 📖 About This Project

This package is an **educational recreation** of the popular
[`is-even`](https://www.npmjs.com/package/is-even) npm package, built from
scratch as a college assignment. It was written independently without copying
any source code from the original package, and exists purely for learning
purposes.

## ✨ Features

- ✅ Returns `true` for even numbers, `false` for odd numbers
- ✅ Handles **negative** numbers correctly
- ✅ Handles **zero** correctly (zero is even)
- ✅ Handles **decimals** (decimals are never even)
- ✅ **Throws a clear `TypeError`** for invalid inputs (strings, null, undefined, NaN, Infinity)
- ✅ No external dependencies — only built-in JavaScript
- ✅ Uses the simple, widely understood **CommonJS** module system

---

## 📦 Installation

```bash
npm install is-even-clone
```

Or, if you cloned this repository directly:

```bash
git clone https://github.com/skakshar2007-svg/NPM-package-.git
cd NPM-package-
# No dependencies to install — the package uses only built-in Node.js features
```

---

## 🚀 Usage

```javascript
const isEven = require('is-even-clone');

console.log(isEven(4));    // true
console.log(isEven(7));    // false
console.log(isEven(-2));   // true
console.log(isEven(0));    // true
console.log(isEven(2.5));  // false  — decimals are never even

// Invalid inputs throw a TypeError:
isEven('4');       // TypeError: is-even-clone: expected a number but received string
isEven(null);      // TypeError: is-even-clone: expected a number but received object
isEven(NaN);       // TypeError: is-even-clone: expected a finite number but received NaN
isEven(Infinity);  // TypeError: is-even-clone: expected a finite number but received Infinity
```

---

## 🔧 How It Works

The function uses the **modulo operator** (`%`) — the same operator you learn in
maths class:

```
number % 2 === 0  →  the number is even
number % 2 !== 0  →  the number is odd
```

For example:
- `4 % 2 = 0`  → even ✓
- `7 % 2 = 1`  → odd ✓
- `-4 % 2 = 0` → even ✓

Before reaching that check, the function validates the input step by step:

1. **Type check** – is it actually a `number`?
2. **Finite check** – is it a real, finite number (not `NaN` or `Infinity`)?
3. **Integer check** – is it a whole number? Decimals like `2.5` are never even.
4. **Even check** – `num % 2 === 0`

---

## 📚 API

### `isEven(num)`

| Parameter | Type     | Description                        |
|-----------|----------|------------------------------------|
| `num`     | `number` | The number you want to test        |

**Returns:** `boolean` — `true` if even, `false` if odd.

**Throws:** `TypeError` if the input is not a finite number.

#### Input behaviour table

| Input       | Result                   |
|-------------|--------------------------|
| `0`         | `true`                   |
| `2`         | `true`                   |
| `7`         | `false`                  |
| `-2`        | `true`                   |
| `-3`        | `false`                  |
| `2.5`       | `false` (not an integer) |
| `4.0`       | `true` (same as `4`)     |
| `'4'`       | throws `TypeError`       |
| `null`      | throws `TypeError`       |
| `undefined` | throws `TypeError`       |
| `NaN`       | throws `TypeError`       |
| `Infinity`  | throws `TypeError`       |

---

## 🧪 Running the Tests

The tests use Node.js's built-in `assert` module — no extra libraries needed.

```bash
npm test
```

You should see output like:

```
Even positive numbers
  ✓  isEven(2) === true
  ✓  isEven(4) === true
  ✓  isEven(100) === true

Odd positive numbers
  ✓  isEven(1) === false
  ...

─────────────────────────────────────────
Tests passed: 20
Tests failed: 0
─────────────────────────────────────────
```

---

## 📂 Project Structure

```
NPM-package-/
├── index.js      ← The main package code
├── test.js       ← Test suite (run with npm test)
├── package.json  ← npm metadata
├── README.md     ← This file
├── LICENSE       ← MIT License
└── .gitignore    ← Files excluded from Git
```

---

## 🎓 Using This in Your Own Project

After installing the package, you can require it anywhere in your Node.js code:

```javascript
const isEven = require('is-even-clone');

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // [2, 4]
```

---

## 📄 License

[MIT](./LICENSE) © 2026 skakshar2007-svg
=======
# NPM-package-
This is a repo regarding Bucket list 1 in which I had to make a npm package and publish it.
>>>>>>> fd252009fa9597a52fb89a8264b3c59547e798e2
