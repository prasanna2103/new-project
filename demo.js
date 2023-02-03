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

var items = document.getElementsByClassName("list-group-item");

// Change the background color of the 2nd item to green
items[1].style.backgroundColor = "green";

// Make the 3rd item invisible
items[2].style.display = "none";
// Change the font color to green for 2nd item in the item list
document.querySelectorAll(".list-group-item")[1].style.color = "green";

// Choose all the odd elements and make their background green
var oddElements = document.querySelectorAll(".list-group-item:nth-child(odd)");
for (var i = 0; i < oddElements.length; i++) {
  oddElements[i].style.backgroundColor = "green";
}
