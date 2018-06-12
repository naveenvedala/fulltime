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



	// for(i=0; i<5; i++){
	// 	console.log(i);
	// 	setTimeout(()=>{
	// 			console.log(i)
	// 			console.log("W")
	// 		}, 0)
	// }

	// var s = ''
	// var processItems = async function(x){
	//   if( x < 5 ) {
	//    await setTimeout(()=>{
	// 			console.log(x)
	// 			s = s + x;
	// 			processItems(x+1);
	// 	}, 0)
	//   }
	// };

	// processItems(0);
	// console.log(s)


//             for (let i = 0; i < fileList.length; i++) {
//               const data = fileList[i].extension.toString();
//               message.log('info', constants.DOMAIN, `data, ${data}`);
//               if (data === '.json') {
//                 filename = fileList[i].name;
//                 message.log('info', constants.DOMAIN, `filename, ${filename}`);
//                 message.log('info', constants.DOMAIN, `fullName, ${fileList[i].fullName}`);
//                 message.log('info', constants.DOMAIN, `filepath, ${fileList[i].path}`);

//                 carUtils.readJsonData(fileList[i].fullName).then(text => {
//                   message.log('info', constants.DOMAIN, `### Text From Method, ${text}`);
//                   jsonData = jsonData + text;
//                   message.log('info', constants.DOMAIN, `jsonData, ${jsonData}`);
//                 });
//               }
//              var promise = new Promise((resolve, reject)=>{
//               	jsonData = fileList.map(ele => {
//  				const data = ele.extension.toString();
// 				 	 if (data === '.json') {
// 				 	 	carUtils.readJsonData(ele.fullName).then(text => {
// 				                 return text;
// 				        });
// 				 	 }
// 				 })
//               	resolve(jsonData);
//               })

//              promise.then(e =>{
//              	message.log(e)
//              })



// var srr = [23,434,546,678];

// var x = srr.map(e =>{
	
// 	setTimeout(()=>{
// 		console.log(e);
// 	},0)
// 	return e+1;
// });

console.log(x)
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     	var data = JSON.parse(this.responseText);
     		
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", false);
  xhttp.send();
} 

// loadDoc();

