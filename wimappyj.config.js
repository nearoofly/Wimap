{
    "name": "javascript-algorithms-and-data-structures",
    "version": "0.0.4",
    "description": "Algorithms and data-structures implemented on JavaScript",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/trekhleb/javascript-algorithms.git"
    },
    "keywords": [
      "computer-science",
      "cs",
      "algorithms",
      "data-structures",
      "javascript",
      "algorithm",
      "javascript-algorithms",
      "sorting-algorithms",
      "graph",
      "tree",
      "interview",
      "interview-preparation"
    ],
    "author": "Oleksii Trekhleb (https://trekhleb.dev)",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/trekhleb/javascript-algorithms/issues"
    },
    "homepage": "https://github.com/trekhleb/javascript-algorithms#readme",
    "main": "index.js",
    "scripts": {
      "lint": "eslint ./src/**",
      "test": "jest",
      "coverage": "npm run test -- --coverage",
      "ci": "npm run lint && npm run coverage",
      "prepare": "husky install"
    },
    "devDependencies": {
      "@babel/cli": "7.20.7",
      "@babel/preset-env": "7.20.2",
      "@types/jest": "29.4.0",
      "eslint": "8.33.0",
      "eslint-config-airbnb": "19.0.4",
      "eslint-plugin-import": "2.27.5",
      "eslint-plugin-jest": "27.2.1",
      "eslint-plugin-jsx-a11y": "6.7.1",
      "husky": "8.0.3",
      "jest": "29.4.1",
      "pngjs": "^7.0.0"
    },
    "engines": {
      "node": ">=16.15.0",
      "npm": ">=8.5.5"
    }
  }
  