


$('h1').click(()=>{
	console.log(this)
	$(this).hide()
})

$('').click(function(){
	console.log("Id")
	$(this).hide();
})

// $('.demo').click(function(){
// 	console.log("Class")
// 	$(this).hide();
// })

$('input[type=text]').blur(function(){
	// $(this).hide(()=>{
	// 	let text = $(this).val();
	// 	$(".demo").append(`<p> ${text} </p>`)
	// });
	$.get( "https://jsonplaceholder.typicode.com/users")
  .done(function( data ) {
    console.log( data );
  });
})


// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      	var data = JSON.parse(this.responseText);
     		
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", false);
//   xhttp.send();
// } 


$.ajax({
		type:"GET",
		url:'https://jsonplaceholder.typicode.com/users',
		success:function(response){
			console.log(response);
		}
	});

$.get( "https://jsonplaceholder.typicode.com/users")
  .done(function( data ) {
   		console.log(data);
  });