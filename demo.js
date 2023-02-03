var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

const filter = document.querySelector("#filter");
      const itemsList = document.querySelector("#items");
      const addForm = document.querySelector("#addForm");

      filter.addEventListener("input", function() {
        const searchString = filter.value.toLowerCase();
        const items = itemsList.querySelectorAll("li");

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const itemName = item.querySelector(".item-name").textContent.toLowerCase();
          const itemDesc = item.querySelector(".item-desc").textContent.toLowerCase();
          if (itemName.includes(searchString) || itemDesc.includes(searchString)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });

      addForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const itemName = addForm.querySelector("#item-name").value;
        const itemDesc = addForm.querySelector("#item-desc").value;
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="item-name">${itemName}</span>
          <p class="item-desc">${itemDesc}</p>
          <button class="btn btn-danger btn-sm float-right delete">X</button>
        `;
        itemsList.appendChild(li);
      });
