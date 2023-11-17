# Jest setup to test utility functions

File util/arr-contains-duplicates.js contains four versions of a function for testing an array of numbers for duplicates (containsDuplicates1 through containsDuplicates4).abs

Unit tests are located in file util/arr-contains-duplicates.test.js

To run all tests, execute 
```Javascript
npx jest
```
or 
```Javascript
npm run test
```

NOTES: 
The functions are exported using regular 'export function' syntax, not 'module.export'. This requires the following: 

1. jest section in package.json: 
```
  "jest": {
    "testEnvironment": "node",
    "transform": {
      "^.+\\.js$": "babel-jest"
    }
  }  
```
2. babel configuration is set up in .babelrc file:
```
{
  "presets": ["@babel/preset-env"]
}
```
3. The reason for using Babel instead of Node's built-in require function is that the latter does not support ES6 syntax and throws an error related to ECMA module usage.
