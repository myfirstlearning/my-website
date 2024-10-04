console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

const x = 100;
console.log(x);



console.table({name: 'Brad', email: 'brad@gmail.com'});

//Group 'error' and 'warn' together
console.group('simple');
console.error('alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color:green';

//Applying Styles for Console messages
console.log('%cHello World', styles);