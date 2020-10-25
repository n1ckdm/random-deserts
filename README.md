# Random Desserts 🍨

[![Build Status](https://travis-ci.org/n1ckdm/random-desserts.svg?branch=master)](https://travis-ci.org/n1ckdm/random-desserts)

Play the random desserts game [here](https://www.httf.uk/):

Generate the names of random desserts 🦄.

## Install

```bash
npm install random-desserts
```

## Usage

### React

```bash
import React from 'react';
import { 
  getRandomDessertsName,
  getRandomDessert,
  roll
} from 'random-desserts'

function App() {
  return (
    <div>
      <p>{getRandomDessertsName()}</p>
      <p>or</p>
      <p>{getRandomDessert()}</p>
      <p>or</p>
      <p>{roll()}</p>
    </div>
  );
}

export default App;
```

### Node.js

```javascript
const rd = require('random-desserts');
console.log(`One random dessert: ${rd.getRandomDessertsName()}`);
console.log(`and another: ${rd.getRandomDessert()}`);
console.log(`or we could get one like this: ${rd.roll()}`);
console.log(`hell, let's just grab three different ones: ${rd.rollThree()}`);
console.log(`I'm still hungry, give me 20: ${rd.rollN(20)}`);
```

## Development

Test

```bash
npm run test
```
