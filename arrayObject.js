// let arr = [23,"Naveen", true, 342, "Pranay"];


// let arr1 = new Array(23, 2323, 232432)
// // arr.push("Digital Lync");
// // console.log(arr)

// // arr.pop();
// // console.log(arr)


// // arr.unshift("Digital");

// // arr.shift();


// arr.sort();

// arr.reverse();


// // arr.slice(1,4);var newArr = 

// // console.log(newArr);

// arr.forEach(e =>{
// 	console.log(e)
// })




// // for(i=0; i<arr.length;i++){
// // 	console.log(arr[i]);
// // }

// let newArr = arr.map( e => {
// 		return e+1 
// 	});


// function greet(argument) {
// 	// body...
// 	console.log("Hello");
// }

// let greetArrow = ()=>{
// 	console.log("Hello")
// }


let obj = {
	name: "Naveen",
	company: "Digital Lync",
	tech: ["Node", "Angular", "MongoDB"],
	leave: function(){
		console.log(`Naveen on leave}`);
	}
}

let obj1 = new Object();
obj1.name = "Pranay"
obj1.company = "Digital Lync";
obj1.leave = function(){
	console.log("Pranay o leave")
}

let obj2 = Object.create(obj);


function Person(name, address, mobile){
	this.fullname = name;
	this.houseaddress = address;
	this.personalMobile = mobile;
	this.leave = function(){
		console.log(`${this.fullname}, on leave`);
	}
}

let pranay = new Person('Pranay', "Gachibowli", '9090909090');

function person(){
	console.log("heelo")
}

