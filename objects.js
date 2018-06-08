// var person = {
// 	name: "Naveen",
// 	college: "JNTU",
// 	pass : function(marks){
// 		if(marks>35){
// 			return "Passed";		
// 		}else return "Failed";
// 	}
// }

// var p2 = new Object();

// p2.name ="Vedala"
// p2.college = "bsajd"

// console.log(p2);

// // console.log(person.pass(34));

// // function add(){
// // 	var a = 10;
// // 	b = 20;
// // 	return a+b;
// // }


// // add();
// // function greet(){
// // 	var name = "Naveen";

// // 	function welcome(){
// // 		var lastname = "V"
// // 		return "Welcome to " + name + lastname;
// // 	}
// // 	console.log(lastname);
// // 	return welcome();
// // }
// // console.log(name);

// // console.log(greet());



// var obj = {
// 	name: "Naveen",
// 	inner : {
// 		innerName: this,
// 		innerMethod: function(){
// 			return this
// 		}
// 	},
// 	method: function(){
// 		return this;
// 	}
// };

// var arr = ["this", function(){
// 	return this;
// }];

// var obj1 ={
// 	name:"Digital",
// 	last:"Lync"
// };

// var p2 = {
// 	name : "Tech"
// }

// var college = {
// 	hallticket:function(){
// 		return "Issue Hallticket for " + this.name;
// 	}
// }

// var s1 = {
// 	name: 'Naveen'

// }
 
// var s2 = {
// 	name: "Ram"
// }


// var college = {
// 	name: "JNTU",
// 	hallticket: function(){
// 		return "Issue Hallticket for " + this.name;
// 	}
// }

// var VJIT = {
// 	name:"VIJT"
// }
//  var cbit = {
//  	name:"CBIT"
//  }

// function greet(){
// 	return "Hello "
// }
// // Function Constructor to create Person Object
// function person(name, college, age, address){
// 	this.name = name;
// 	this.college = college;
// 	this.age = age;
// 	this.address = address;
// 	this.getDetails = function(){
// 		return ` "Address" of ${this.name} is ${this.address}`;
// 				// "Address' of " + this.name + "is " + this.address
// 	}
// }

// var p1 = new person("Naveen", "MREC", 26, "Banjra Hills");
// var p2 = new person("Ram", "JNTU", 24, "Dilsukhnagar");

// p1.lastname = "Vedala";

// console.log(p1);
// console.log(p2);




// class Animal{
// 	constructor(name, kind){

// 	}


// 	bark(){

// 	}

// }


// class Dog extends Animal{

// 	bark1(){
// 		super.bark();
// 	///List Statments
// 	}
// }



// Promises and Callbacks

// function one(){
// 	setTimeout(()=>{
// 		console.log("One");
// 	},Math.random()*1000+1000)
// }

// function two(){
// 	setTimeout(()=>{
// 		console.log("Two")
// 	}, Math.random()*1000+1000)
// }

// fs.readdir(source, function (err, files) {
//   if (err) {
//     console.log('Error finding files: ' + err)
//   } else {
//     files.forEach(function (filename, fileIndex) {
//       console.log(filename)
//       gm(source + filename).size(function (err, values) {
//         if (err) {
//           console.log('Error identifying file size: ' + err)
//         } else {
//           console.log(filename + ' : ' + values)
//           aspect = (values.width / values.height)
//           widths.forEach(function (width, widthIndex) {
//             height = Math.round(width / aspect)
//             console.log('resizing ' + filename + 'to ' + height + 'x' + height)
//             this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
//               if (err) console.log('Error writing file: ' + err)
//             })
//           }.bind(this))
//         }
//       })
//     })
//   }
// })

// let promise = new Promise((resolve, reject)=>{
// 	//List satatments
// 	if(true){
// 		resolve("Success");
// 	}else{
// 		reject("Failed")
// 	}
// });













