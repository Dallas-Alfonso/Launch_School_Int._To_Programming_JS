// 3.
// Identify the data type for each of the following values:

// 'true'           'string'
// false            'boolean'
// 1.5              'number'
// 2                'number'
// undefined        'undefined'
// { foo: 'bar' }   'object'

// 4.
// Explain why this code logs '510' instead of 15.

// Copy Code
// console.log('5' + 10);

// if you add a string to a Number, Javascript implicitly turns both expressions into a string.  resulting in "5" + "10" = "5""10"

// to get 15 we can refractor the above code to 

// console.log(5 + 10);   OR console.log(Number('5') + 10);


// 12
// What value does the following expression evaluate to?


// '12' < '9'

// Solution
// This question is a bit tricky: the expression evaluates as true since the operands are strings, not numbers. When you compare two strings, JavaScript performs a character-by-character comparison going from left to right, so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.'

// Had you used numbers instead, the expression would evaluate as false.