// when user clicks on addbutton 
	// create div -> inputcheckbox, inputtypetext, label, editbutton,deletebutton

// when user clicks on editbutton , 
	// show input type text ,and hide lable element 
	// and copy the label value into the input type text

// when user clicks on deletebutton 
	// remove complete Div element
// when user check or uncheck the inputcheckbox
	// move parentDiv element from completeSection to incompleteSection
	// or move parentDiv element fomr incompletesection to complete section 
var addButton = document.getElementsByTagName('button')[0];
var enterTask = document.getElementsByName('AddTask')[0];
var toDoList = document.getElementById('todolist');
var completedList = document.getElementById('completedlist');

addButton.onclick = function(){

	var parentDiv = document.createElement('div');
	var checkBox = document.createElement('input');
	var inputText = document.createElement('input');
	var label = document.createElement('label');
	var editButton = document.createElement('button');
	var deleteButton = document.createElement('button');
	var flag = true;
	var editFlag = true;
	checkBox.setAttribute('type','checkbox');
	inputText.setAttribute('type','text');
	editButton.innerText = 'Edit/Save';
	// var x = document.createTextNode('Edit/Save');
	// editButton.appendChild(x);
	deleteButton.innerText = 'Delete';
	label.innerText = enterTask.value;

	parentDiv.appendChild(checkBox);
	parentDiv.appendChild(inputText);
	parentDiv.appendChild(label);
	parentDiv.appendChild(editButton);
	parentDiv.appendChild(deleteButton);


	toDoList.appendChild(parentDiv);


	// checkBox.
		// checkBox.onchange = function(){
		// 	// console.log("Working")
		// var checkBoxParentEl = this.parentNode;
		// var parentForNewTaskAdded = checkBoxParentEl.parentNode;
		// // console.log(parentForNewTaskAdded.id);
		// // if(parentForNewTaskAdded.id === 'todolist'){
		// // 		completedList.appendChild(checkBoxParentEl);
		// // 	}else{
		// // 		toDoList.appendChild(checkBoxParentEl);
		// // 	}
		// }

		checkBox.onchange = function(){
			// console.log("Working")
			console.log(this.parentNode);
			if(flag){
				completedlist.appendChild(this.parentNode);
				flag = false;
			}else{
				toDoList.appendChild(this.parentNode);
				flag = true;
			}
		}

		editButton.onclick = function(){
		// alert('you clicked on edit button ');
		
	
		var divEl = this.parentNode;
		// console.log(divEl)
		var inputText = divEl.querySelector('input[type=text]');
		var label = divEl.querySelector('label');
	
		if(editFlag){
			inputText.style.display = 'inline';
			label.style.display = 'none';
			inputText.value = label.innerText;
			editFlag =false
		}else{
			inputText.style.display = 'none';
			label.style.display = 'inline';
			label.innerText = inputText.value;
			editFlag = true;
		}

	}


	deleteButton.onclick = function(){
		var Div = this.parentNode;
		// console.log(Div)
		var parentDiv = Div.parentNode;
		// console.log(parentDiv);
		parentDiv.removeChild(Div);
	}

}
	
	
	
// }






















