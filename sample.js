import { log1, log2 } from './dom.js';

log1();
log2();

// function naveen(callback, callback2) {
// 	// body...

// 	callback();
// }

// function hallticket(){
// 	return "hallticket"
// }

// function play(){
// 	return "play cricket";
// }






// /************-----------------------------------***/
// function main(){
// 	var name = "Naveen";
// 	var data = greet();
// 	return data;
// }

// console.log(main())

// // Declaration -------------------------------------
// var greet = function(name){
// 	return "Welcome " + name;
// } 

// greet("Naveen");

//Self invoking function -----------------------------

// (function(name){
// 	console.log("Welcome " + name);
// })("Naveen");

// ------------------------------------

//Primitive data values doesn't change when passed as parameters 
//& Non primitive data type will change there values
// var id = {n:23};

// function change(x){
// 	 x.n += 45;
// 	 console.log(x.n)
// }
// change(id);

// console.log(id.n);






//Array Methods

// var random = [23, 2434, 435436, 24, 343];

// // console.log(random.length);

// for(i=0; i<random.length; i++){
// 	console.log(random[i]);
// }

// random.forEach(function(e){
// 	console.log(e);
// })

// random.push(678)

// console.log(random);

// random.pop(23);
// console.log(random);

// random.unshift("First")

// console.log(random);

// random.shift();

// random.slice(1,5)
// console.log(random)


// //Number Methods


// var num = "23";
// console.log(num);




// x = 10;

//While Loop

//  var i = 0;
// // while(i<10){
// // 	i++
// // 	console.log(i);
	
// // }

// // do{
// // 	i++
// // 	console.log(i);
// // 	break;
// // 	console.log("Breaking Statement")
// // }while(i<10);

// for(i=0;i<=10;i++){
// 	if(i==3){
// 		continue;
// 	}
// 	console.log(i)
// }


//Functions

// function makingCoffee(sugarQ, coffeQ){
// 	console.log(" Make a \"coffee\" with tea spoons of Coffee powder of"     +    coffeQ + ' spoons and sugar of ' + sugarQ + "tea spoons" );
// 	console.log(`Make a coffee with coffee powder of     ${coffeQ} spoons and sugar of ${sugarQ} spoons`);
// }

// makingCoffee(2, 1);
// var a;

// console.log(a);

//  a = 20;


// var c = add(445,576);

// console.log(c);


// function add(a,b){
// 	c = a+b;
// 	// console.log(a+b);
// 	// console.log(c)
// 	return "Succesfully Added";
// }


// function User(name) {
//   this.name = name;
//   console.log(this.name)
// }
// User("Naveen");
// // vs

// const UserA = name => {
//   this.name = name;
//   console.log(this.name)
// };

// UserA("Naveen")

// User.prototype.getName = function() {
//   return this.name;
// };

// // vs

// User.prototype.getName = () => this.name;
// Object (literal) methods

// const obj = {
//   getName: function() {
//     // ...
//   }
// };

// // vs

// const obj = {
//   getName: () => {
//     // ...
//   }
// };
// Callbacks

// setTimeout(function() {
//   // ...
// }, 500);

// // vs

// setTimeout(() => {
//   // ...
// }, 500);
// Variadic functions

// function sum() {
//   let args = [].slice(arguments);
//   // ...
// }

// // vs
// const sum = () => {
//   let args = [].slice(arguments);
//   // ...
// };

// var onj = {
// 	x : this,
// 	b : ()=>{
// 		return this;
// 	}
// }

// console.log(name);








