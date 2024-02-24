window.onload = function main() {
  // append close buttons to all list items
  var nodeList = document.getElementsByTagName("li");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
  }

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    deleteItem(close[i]);
  }

  // Add a "checked" symbol when clicking on a list item
  var list = document.getElementsByTagName('li');
  console.log(list[0])
  for(i = 0; i < list.length; i++){
    checkItem(list[i]);
  }
}

// what to do if list item is clicked on
function checkItem(listItem){
  listItem.addEventListener('click', function(ev) {
    var item = ev.currentTarget;

    if(item.className === 'checked'){
      item.classList.remove('checked');
    } else{
      item.className += 'checked';
    }
  }, false);
}

function deleteItem(item){
  console.log(item)
  item.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  // add click event listener for checking off items
  checkItem(li);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  deleteItem(span);
}