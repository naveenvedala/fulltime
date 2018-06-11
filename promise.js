// let study1st = (attendance)=>{
// 	return new Promise((resolve, reject)=>{
// 		if(attendance){
// 			resolve("Wirte Exams")
// 		}else{
// 			reject('Debar');
// 		}
// 	})
// }

// let wirteExams = (success)=>{
// 	return new Promise((resolve, reject)=>{
// 		flag = false;
// 		if(flag){
// 			resolve("Passed")
// 		}else{
// 			reject("Detained");
// 		}
// 	});
// }

// let prometed = () =>{
// 	return new Promise((resolve, reject)=>{
// 		resolve("prometed");
// 	})
// }

// study1st(true).then((out)=>{
// 	return wirteExams(out);
// }).then((out)=>{
// 	return prometed();
// }).then((out)=>{
// 	console.log("Naveen got " + out);
// }).catch((e)=>{
// 	console.log(e);
// })




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


var xhttp = new XMLHttpRequest();