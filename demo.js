// Get form element
const form = document.getElementById('addForm');

// Add submit event listener to form
form.addEventListener('submit', function(e) {
  // Prevent default form submit behavior
  e.preventDefault();

  // Get input elements
  const item = document.getElementById('item');
  const description = document.getElementById('description');

  // Get items from local storage
  let items = JSON.parse(localStorage.getItem('items')) || [];

  // Create object to store item and description
  const itemData = {
    name: item.value,
    description: description.value
  };

  // Push item data to items array
  items.push(itemData);

  // Store items array in local storage
  localStorage.setItem('items', JSON.stringify(items));

  // Clear input values
  item.value = '';
  description.value = '';

  // Call function to display items
  displayItems();
});

// Function to display items
function displayItems() {
  // Get items from local storage
  let items = JSON.parse(localStorage.getItem('items')) || [];

  // Get items list element
  const itemsList = document.getElementById('items');

  // Clear items list
  itemsList.innerHTML = '';

  // Loop through items array
  items.forEach(function(item) {
    // Create list item element
    const li = document.createElement('li');
    li.className = 'list-group-item';

    // Create delete button element
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.innerHTML = 'X';

    // Append item name and delete button to list item
    li.innerHTML = item.name;
    li.appendChild(deleteBtn);

    // Append item description to list item
    const desc = document.createElement('p');
    desc.innerHTML = item.description;
    li.appendChild(desc);

    // Append list item to items list
    itemsList.appendChild(li);
  });
}

// Call function to display items on page load
displayItems();
