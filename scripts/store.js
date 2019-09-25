/* eslint-disable no-console */
import item from './item.js';

let items = [];
let hideCheckedItems = false;

const findById = function (id) {
  return items.find(item => item.id === id);
};

const addItem = function (name) {
  try {
    item.validateName(name);
    let createAddItem = item.create(name);
    items.push(createAddItem);
  }
  catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function (id) {
  const item = findById(id);
  item.checked = !item.checked;
};

const findAndUpdateName = function (id, newName) {
  try {
    item.validateName(id);
    const update = findById(id);
    update.name = newName;
  }
  catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = function (id) {
  this.items = items.filter(item => item.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
