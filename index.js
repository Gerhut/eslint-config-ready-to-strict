'use strict'

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode

module.exports = {
  rules: {
    'no-octal': 'warn',
    'no-with': 'warn',
    'no-delete-var': 'warn',
    'no-shadow-restricted-names': 'warn',
    // Using one of the newly reserved keywords (in prevision for ECMAScript 2015): implements, interface, let, package, private, protected, public, static, and yield
    'no-inner-declarations': 'warn',
    'no-dupe-keys': 'warn',
    'no-dupe-args': 'warn',

    'no-undef': 'warn',
    // Trying to delete a non-configurable property
    'no-caller': 'warn',

    // this in function calls
    // arguments doesn't alias named function arguments
    'no-eval': 'warn'
  }
}
