var pName = document.getElementById('new-name');
var pNumber = document.getElementById('new-number');
var addButton = document.getElementsByTagName('button')[0];
var contactList = document.getElementById('contact-list');

var createNewTaskElement = function(taskString1, taskString2){
	var listItem=document.createElement("li");
	var label = document.createElement('label');
	var deleteButton = document.createElement('button');
	listItem.appendChild(label);
	listItem.appendChild(deleteButton);
	deleteButton.innerText = 'Delete';
	deleteButton.className = 'delete';
	label.innerText = taskString1 + " - " + taskString2;
	return listItem;
}

var addItem = function(){
	var listItem = createNewTaskElement(pName.value, pNumber.value);
	contactList.appendChild(listItem);
	bindTaskEvents(listItem);
	pName.value='';
	pNumber.value='';

}

var deleteItem = function(){
	var listItem=this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
}

addButton.onclick = addItem;

var bindTaskEvents = function(taskListItem){
	var deleteButton = taskListItem.querySelector("button.delete");
	deleteButton.onclick=deleteItem;
}





