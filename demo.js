// get the form and items list
const addForm = document.querySelector('#addForm');
const itemsList = document.querySelector('#items');

// load existing items from local storage
let items = JSON.parse(localStorage.getItem('items')) || [];

// render items to the UI
const renderItems = () => {
  itemsList.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `${item.name} (${item.description}) 
    <button class="btn btn-danger btn-sm float-right delete">X</button>
    <button class="btn btn-primary btn-sm float-right edit">Edit</button>`;

    li.querySelector('.delete').addEventListener('click', (e) => {
      items.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(items));
      renderItems();
    });

    li.querySelector('.edit').addEventListener('click', (e) => {
      const newName = prompt("Enter new name:", item.name);
      const newDescription = prompt("Enter new description:", item.description);
      items[index] = { name: newName, description: newDescription };
      localStorage.setItem('items', JSON.stringify(items));
      renderItems();
    });

    itemsList.appendChild(li);
  });
};

// add new item to the list
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = addForm.querySelector('#item-name').value;
  const description = addForm.querySelector('#item-description').value;
  items.push({ name, description });
  localStorage.setItem('items', JSON.stringify(items));
  renderItems();
  addForm.reset();
});

renderItems();
