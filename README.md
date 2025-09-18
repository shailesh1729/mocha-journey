# Mocha Journey

A hands-on journey through testing JavaScript code with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
This project demonstrates unit testing, asynchronous testing, and the use of lifecycle hooks, with simple and clear examples.

## Features

- **Unit Testing**: Test simple functions like `add(a, b)`.
- **Asynchronous Testing**: Test async code using both Promises and async/await.
- **Array Methods**: Explore tests for common JavaScript array operations.
- **Lifecycle Hooks**: See Mocha's `before`, `beforeEach`, `afterEach`, and `after` hooks in action.

## Project Structure

```text
mocha-journey/
├── src/
│   ├── add.js         # Simple add function
│   └── data.js        # Simulated async data fetch
├── test/
│   ├── add.test.js    # Unit tests for add()
│   ├── array.test.js  # Array method tests
│   ├── data.test.js   # Async tests for fetchData()
│   └── hooks.test.js  # Mocha lifecycle hooks demo
├── package.json       # Project metadata and dependencies
└── README.md          # This file
```

## Getting Started

1. **Install dependencies**:

   ```sh
   npm install
   ```

2. **Run tests**:

   ```sh
   npm test
   ```

## Example Code

### `add.js`

```js
export const add = (a, b) => a + b;
```

### `data.js`

```js
export const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Test User' });
    }, 100);
  });
};
```

## Testing Highlights

- **Unit Test**: `add.test.js` checks that `add(2, 3)` returns `5`.
- **Async Test**: `data.test.js` shows both Promise and async/await styles for testing async code.
- **Array Test**: `array.test.js` covers array methods like `includes`, `some`, and `every`.
- **Hooks Demo**: `hooks.test.js` prints to the console to show when each Mocha hook runs.

## Dependencies

- [Mocha](https://mochajs.org/) (test runner)
- [Chai](https://www.chaijs.com/) (assertion library)
- [Ramda](https://ramdajs.com/) (utility library, optional)

## License

MIT
