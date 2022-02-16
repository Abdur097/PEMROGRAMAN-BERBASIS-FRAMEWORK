let fname = 'Cristian';
let lname = 'Ronaldo';
let age = prompt("Masukkan umur Cristian Ronaldo!");

// cara lama
// let result = fname + ' ' + lname + 'is' + age + 'years old';
//alert(result);

//Memakai template strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);