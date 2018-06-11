// // JSON

// // let

// function display(argument) {
// 	// body...
	
// 	var div = document.getElementById('demo');
// 	argument.forEach(e =>{
// 		var name = document.createElement('h3');
// 		var username = document.createElement('h4');
// 		name.innerHTML = e.name;
// 		username.innerHTML = e.username;
// 		div.appendChild(name);
// 		div.appendChild(username);
// 	})
// }



	for(i=0; i<5; i++){
		// console.log(i);
		setTimeout(()=>{
			console.log(i)
		}, Math.random * 1000+ 1000)
	}







// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      	var data = JSON.parse(this.responseText);
//      	display(data);  	
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//   xhttp.send();
// } 

// loadDoc();