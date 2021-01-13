
 function addItem() {
	 let ol = document.getElementById("list");
	 let item = document.getElementById("to_do_item");
     let li = document.createElement("li");
	 let buttn = document.createElement("button");
	 let txt = document.createTextNode("Delete");

// adding the li items to the ol
	 li.setAttribute("id", item.value);
	 li.appendChild(document.createTextNode(item.value));
	 ol.appendChild(li);
	 to_do_item.value = ""; // removes text from placeholder

// creating a delete button for each li item added
	 buttn.appendChild(txt);
	 buttn.className = "deleteBtn"; // added so I can style the delete btn
	 li.appendChild(buttn);
	 buttn.onclick = deleteButton;  
}

function deleteButton() {
	this.parentNode.remove();
}


function clearList() {
	let ol = document.getElementById("list");
	ol.textContent = "";

}
/* or 
function clearList() {
	let ul = document.getElementById("list");
	let item = document.getElementById("to_do_item");
	let toRemove = document.getElementById(item.value);
	ul.removeChild(toRemove);
*/