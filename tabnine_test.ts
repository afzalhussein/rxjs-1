const localFetch = require('fetch');
const test = 'This is a test';
console.log(test);
localFetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(data => console.log(data));
 
const sum = [1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10]; /*?sum.slice(0,3) */
console.log(sum.reduce((a, b) => a + b, 0));