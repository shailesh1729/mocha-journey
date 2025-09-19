# Mocha Journey

A hands-on journey through modern JavaScript testing with [Mocha](https://mochajs.org/), 
[Chai](https://www.chaijs.com/),
[Sinon](https://sinonjs.org/),
and [Supertest](https://github.com/ladjs/supertest).
This project demonstrates unit testing, asynchronous testing, error handling, mocking, and API endpoint testing, with clear, real-world examples.

The code is described in the article:
[Testing in JavaScript: A Gentle, Hands-On Guide](https://medium.com/the-horizon-explorer/testing-in-javascript-a-gentle-hands-on-guide-0a562a40fa37).

---

## Features

- **Unit Testing**: Test simple and complex functions.
- **Asynchronous Testing**: Promises, async/await, and error handling.
- **Array & String Methods**: Test common and advanced operations.
- **Lifecycle Hooks**: Mocha's `before`, `beforeEach`, `afterEach`, and `after` in action.
- **Assertion Styles**: Compare Chai's `assert`, `expect`, and `should` styles.
- **Mocking & Stubbing**: Use Sinon for spies, stubs, and mocks.
- **API Testing**: Test real HTTP endpoints (PokéAPI, JSONPlaceholder) with Supertest.
- **CI Integration**: Automated test runs on every commit via GitHub Actions.

---

## Project Structure

```text
mocha-journey/
├── src/
│   ├── add.js              # Simple add function
│   ├── data.js             # Async data fetch & error simulation
│   ├── userService.js      # User registration, fetching, saving
│   ├── api.js              # Simulated API fetch
│   ├── apiClient.js        # Simulated API client class
│   ├── shoppingCart.js     # Shopping cart class
│   └── stringProcessor.js  # String utilities
├── test/
│   ├── add.test.js         # Unit tests for add()
│   ├── array.test.js       # Array method tests (mutators, Ramda)
│   ├── assertion-styles.test.js # Chai assertion style comparison
│   ├── data.test.js        # Async tests, error handling
│   ├── hooks.test.js       # Mocha lifecycle hooks demo
│   ├── jph.test.js         # JSONPlaceholder API tests
│   ├── pokeapi.test.js     # PokéAPI endpoint tests
│   ├── shoppingCart.test.js# Shopping cart tests
│   ├── stringProcessor.test.js # String utility tests
│   └── userService.test.js # User service, mocking, stubbing
├── .github/
│   └── workflows/
│       └── nodejs.yml      # GitHub Actions CI workflow
├── package.json            # Project metadata and dependencies
├── LICENSE                 # MIT License
└── README.md               # This file
```

---

## Getting Started

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Run all tests**

   ```sh
   npm test
   ```

---

## Example Highlights

### 1. Unit & Array Tests

- `add.test.js`: Tests `add(a, b)`.
- `array.test.js`: Tests array methods, mutators, and Ramda's `zip`.

### 2. Asynchronous & Error Handling

- `data.test.js`: Tests async code with Promises and async/await, including error cases.

### 3. Mocking, Stubbing, and Spies

- `userService.test.js`: Uses Sinon for spies, stubs, and mocks to test user registration and API calls.

### 4. Assertion Styles

- `assertion-styles.test.js`: Demonstrates Chai's `assert`, `expect`, and `should` styles.

### 5. API Endpoint Testing

- `pokeapi.test.js`: Tests real PokéAPI endpoints (GET Pokémon, abilities, Pokédex entries).
- `jph.test.js`: Tests JSONPlaceholder for GET, POST, PUT, DELETE, and related resources.

### 6. Utility & Class Tests

- `shoppingCart.test.js`: Tests a simple shopping cart class.
- `stringProcessor.test.js`: Tests string reversal and error handling.

---

## Continuous Integration

This project uses GitHub Actions to run all tests on every commit and pull request to `main`. See `.github/workflows/nodejs.yml`.

---

## Dependencies

- [Mocha](https://mochajs.org/) (test runner)
- [Chai](https://www.chaijs.com/) (assertion library)
- [Sinon](https://sinonjs.org/) (spies, stubs, mocks)
- [Supertest](https://github.com/ladjs/supertest) (API endpoint testing)
- [Ramda](https://ramdajs.com/) (utility library)

---

## License

MIT License © 2025 Shailesh Kumar
