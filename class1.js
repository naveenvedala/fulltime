// function generateHallTicket(argument) {
// 	return `Hallticket for Student of rollno ${argument}`;
// }

// function getStundentDetails(argument){
// 	if(argument==23){
// 		return "Naveen"
// 	}else{
// 		return "Unindentified"
// 	}
// }


// function student(rollno){
	
// 	var name = getStundentDetails(rollno);
// 	console.log(name)
	
// 	var halltick = function(){
// 		return `Hallticket for ${name} of rollno ${rollno}`;
// 	};
// 	return halltick();
// }

// console.log(student(23));


// function lunch(q,callback){
// 	console.log(`Lunch for ${q} members`);
// 	callback();
// }



// function icecream(){
// 	console.log("Enjoy Icecream")
// }

// function sweet(){
// 	console.log("Enjoy Sweet");
// }


// class Animal{
// 	constructor(name,kind){
// 		this.name = name;
// 		this.kind = kind;
// 	}
// 	method(){
// 		console.log("Method");
// 	}
// }

// class Dog extends Animal{
// 	constructor(name, kind, petName){
// 		 super(name, kind);
// 	}
// 	some(){
// 		super.method();
// 	}
// }

// let puppy = new Dog('puppy', "pet", "meow");


// let json = {
// 	"data": "sample",
// 	"biscuit": "nasd"
// }
// let json1 = {
// 	"data": "sample1",
// 	"sda" :"sd"
// }

// let output = Object.assign(json, json1)

// let obj1 = { 'a' : 'aValue', 'b' : 'bValue' };
// let obj2 = {'c' : 'cValue', 'd' : 'dValue', 'a' : 'obj2AValue' };
// let combined = { ...obj1, ...obj2 };

// let o1 = JSON.stringify(obj1);
// let o2 = JSON.stringify(obj2);

// let combo = o1+o2;


 
// /*obj1 is mutated here*/ 
// var obj3 = Object.assign(obj1, obj2);
 
// /** There's no limit to the number of objects you can merge.
//  *  All objects get merged into the first object. 
//  *  Only the object in the first argument is mutated and returned.
//  *  Later properties overwrite earlier properties with the same name. */
// const allRules = Object.assign({}, obj1, obj2, obj3);

// module.exports = (()=>{
// 	exports.copy = ()=>{
// 		console.log("Something")
// 	}
// 	exports.read = "biscuit";
// 	return exports;
// })();	


