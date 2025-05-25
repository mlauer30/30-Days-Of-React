const countries = require('./countries.js');
const webTechs = require('./web_techs.js');
/**
##### Exercise: Level 2

1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
1. First remove all the punctuations and change the string to array and count the number of words in the array

   ```js
   let text =
     'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
   console.log(words)
   console.log(words.length)
   ```
*/

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = [];

let word = '';

for(let char of text){
    if(char === ' ' || char === '.' || char === ','){
        if(word){
            words.push(word);
            word = '';
        }
    }else{
        word += char;
    }

};

//text.split

console.log(words)
console.log(words.length)

/**
   ```sh
   ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

   13
   ```

1. In the following shopping cart add, remove, edit items

   ```js
   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
   ```

   - add 'Meat' in the beginning of your shopping cart if it has not been already added
   - add Sugar at the end of you shopping cart if it has not been already added
   - remove 'Honey' if you are allergic to honey
   - modify Tea to 'Green Tea'
*/

const allergicToHoney = true;
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');

if(allergicToHoney)
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);

/**
1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
1. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
1. Concatenate the following two variables and store it in a fullStack variable.

   ```js
   const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
   const backEnd = ['Node', 'Express', 'MongoDB']

   console.log(fullStack)
   ```

   ```sh
   ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
   ```
*/
if(countries.includes('Ethiopia'))
    console.log('ETHIOPIA!!!');
else
    countries.push('Ethiopia');

if(webTechs.includes('Sass'))
    console.log('Sass is a CSS preprocess');
else
    webTechs.push('Sass');

//console.log(countries);
console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

//changes


