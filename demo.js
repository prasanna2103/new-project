var listItems = document.querySelectorAll("#items .list-group-item");
listItems[2].style.backgroundColor = "green";

for (var i = 0; i < listItems.length; i++) {
  listItems[i].style.fontWeight = "bold";
}

var headerTitle = document.getElementById("header-title");
headerTitle.style.border = "solid 1px black";

var addItemTitle = document.querySelector(".title");
addItemTitle.style.fontWeight = "bold";
addItemTitle.style.color = "green";

