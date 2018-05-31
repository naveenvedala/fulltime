
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

(function(name){
	console.log("Welcome " + name);
})("Naveen");

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

var random = [23, 2434, 435436, 24, 343];

// console.log(random.length);

for(i=0; i<random.length; i++){
	console.log(random[i]);
}

random.forEach(function(e){
	console.log(e);
})

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






