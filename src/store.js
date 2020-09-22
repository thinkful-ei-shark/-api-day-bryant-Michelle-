

const items = [];
let error = null;
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const findAndUpdate = function (id, newData) {
  const currentItem = this.findById(id);
  Object.assign(currentItem, newData);
};

const setError = function (error) {
  this.error = error;
};

export default {
  items,
  error,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate,
  setError
};

// import $ from 'jquery';

// import store from './store';
// import api from './api';

// const generateItemElement = function (item) {
//   let itemTitle = `<span class="shopping-item shopping-item__checked">${item.name}</span>`;
//   if (!item.checked) {
//     itemTitle = `
//       <form class="js-edit-item">
//         <input class="shopping-item" type="text" value="${item.name}" required />
//       </form>
//     `;
//   }

//   return `
//     <li class="js-item-element" data-item-id="${item.id}">
//       ${itemTitle}
//       <div class="shopping-item-controls">
//         <button class="shopping-item-toggle js-item-toggle">
//           <span class="button-label">check</span>
//         </button>
//         <button class="shopping-item-delete js-item-delete">
//           <span class="button-label">delete</span>
//         </button>
//       </div>
//     </li>`;
// };

// const generateShoppingItemsString = function (shoppingList) {
//   const items = shoppingList.map((item) => generateItemElement(item));
//   return items.join('');
// };

// const generateError = function (message) {
//   return `
//       <section class="error-content">
//         <button id="cancel-error">X</button>
//         <p>${message}</p>
//       </section>
//     `;
// };

// const renderError = function () {
//   if (store.error) {
//     const el = generateError(store.error);
//     $('.error-container').html(el);
//   } else {
//     $('.error-container').empty();
//   }
// };

// const handleCloseError = function () {
//   $('.error-container').on('click', '#cancel-error', () => {
//     store.setError(null);
//     renderError();
//   });
// };

// const render = function () {
//   renderError();

//   // Filter item list if store prop is true by item.checked === false
//   let items = [...store.items];
//   if (store.hideCheckedItems) {
//     items = items.filter(item => !item.checked);
//   }

//   // render the shopping list in the DOM
//   const shoppingListItemsString = generateShoppingItemsString(items);

//   // insert that HTML into the DOM
//   $('.js-shopping-list').html(shoppingListItemsString);
// };

// const handleNewItemSubmit = function () {
//   $('#js-shopping-list-form').submit(function (event) {
//     event.preventDefault();
//     const newItemName = $('.js-shopping-list-entry').val();
//     $('.js-shopping-list-entry').val('');
//     api.createItem(newItemName)
//       .then((newItem) => {
//         store.addItem(newItem);
//         render();
//       })
//       .catch((error) => {
//         store.setError(error.message);
//         renderError();
//       });
//   });
// };

// const getItemIdFromElement = function (item) {
//   return $(item)
//     .closest('.js-item-element')
//     .data('item-id');
// };

// const handleDeleteItemClicked = function () {
//   $('.js-shopping-list').on('click', '.js-item-delete', event => {
//     const id = getItemIdFromElement(event.currentTarget);

//     api.deleteItem(id)
//       .then(() => {
//         store.findAndDelete(id);
//         render();
//       })
//       .catch((error) => {
//         console.log(error);
//         store.setError(error.message);
//         renderError();
//       });
//   });
// };

// const handleEditShoppingItemSubmit = function () {
//   $('.js-shopping-list').on('submit', '.js-edit-item', event => {
//     event.preventDefault();
//     const id = getItemIdFromElement(event.currentTarget);
//     const itemName = $(event.currentTarget).find('.shopping-item').val();

//     api.updateItem(id, { name: itemName })
//       .then(() => {
//         store.findAndUpdate(id, { name: itemName });
//         render();
//       })
//       .catch((error) => {
//         console.log(error);
//         store.setError(error.message);
//         renderError();
//       });
//   });
// };

// const handleItemCheckClicked = function () {
//   $('.js-shopping-list').on('click', '.js-item-toggle', event => {
//     const id = getItemIdFromElement(event.currentTarget);
//     const item = store.findById(id);
//     api.updateItem(id, { checked: !item.checked })
//       .then(() => {
//         store.findAndUpdate(id, { checked: !item.checked });
//         render();
//       })
//       .catch((error) => {
//         store.setError(error.message);
//         renderError();
//       });
//   });
// };

// const handleToggleFilterClick = function () {
//   $('.js-filter-checked').click(() => {
//     store.toggleCheckedFilter();
//     render();
//   });
// };

// const bindEventListeners = function () {
//   handleNewItemSubmit();
//   handleItemCheckClicked();
//   handleDeleteItemClicked();
//   handleEditShoppingItemSubmit();
//   handleToggleFilterClick();
//   handleCloseError();
// };

// // This object contains the only exposed methods from this module:
// export default {
//   render,
//   bindEventListeners
// };
// // const items = [];
// // let hideCheckeditems = false;

// // const findById = function (id) {
// //   return this.items.find(currentItem => currentItem.id === id);
// // };

// // const addItem = function (item) {
// //   this.items.push(item);
// // };

// // const findAndDelete = function (id) {
// //   this.items = this.items.filter(currentItem => currentItem.id !== id);
// // };

// // const toggleCheckedFilter = function () {
// //   this.hideCheckedItems = !this.hideCheckedItems;
// // };

// // const findAndUpdate = function (id, newData) {
// //   const currentItem = this.findById(id);
// //   Object.assign(currentItem, newData);
// // };

// // export default {
// //   items,
// //   hideCheckeditems,
// //   findById,
// //   addItem,
// //   findAndDelete,
// //   toggleCheckedFilter,
// //   findAndUpdate
// // };
// // // import item from './item';

// // // const items = [];
// // // let hideCheckeditems = false;

// // // const findById = function (id) {
// // //   return this.items.find(currentItem => currentItem.id === id);
// // // };

// // // const addItem = function (item) {
// // //   this.items.push(item);
// // // };

// // // // const findAndToggleChecked = function (id) {
// // // //   const currentItem = this.findById(id);
// // // //   currentItem.checked = !currentItem.checked;
// // // // };

// // // // const findAndUpdateName = function (id, name) {
// // // //   try {
// // // //     item.validateName(name);
// // // //     const currentItem = this.findById(id);
// // // //     currentItem.name = name;
// // // //   } catch (e) {
// // // //     console.log('Cannot update name: ' + e.message);
// // // //   }
// // // // };

// // // const findAndDelete = function (id) {
// // //   this.items = this.items.filter(currentItem => currentItem.id !== id);
// // // };

// // // const toggleCheckedFilter = function () {
// // //   this.hideCheckedItems = !this.hideCheckedItems;
// // // };

// // // export default {
// // //   findaAndUpdate,
// // //   items,
// // //   hideCheckeditems,
// // //   findById,
// // //   addItem,
// // //   findAndToggleChecked,
// // //   findAndUpdateName,
// // //   findAndDelete,
// // //   toggleCheckedFilter
// // // };
// // // // import item from './item';

// // // // const items = [];
// // // // let hideCheckeditems = false;

// // // // const findById = function (id) {
// // // //   return this.items.find(currentItem => currentItem.id === id);
// // // // };

// // // // // const addItem = function (name) {
// // // // //   try {
// // // // //     item.validateName(name);
// // // // //     this.items.push(item.create(name));
// // // // //   } catch (e) {
// // // // //     console.log(e.message);
// // // // //   }
// // // // // };

// // // // const addItem = function(item){
// // // //   this.items.push(item);
// // // // };

// // // // const findAndToggleChecked = function (id) {
// // // //   const currentItem = this.findById(id);
// // // //   currentItem.checked = !currentItem.checked;
// // // // };

// // // // const findAndUpdateName = function (id, name) {
// // // //   try {
// // // //     item.validateName(name);
// // // //     const currentItem = this.findById(id);
// // // //     currentItem.name = name;
// // // //   } catch (e) {
// // // //     console.log('Cannot update name: ' + e.message);
// // // //   }
// // // // };

// // // // const findAndDelete = function (id) {
// // // //   this.items = this.items.filter(currentItem => currentItem.id !== id);
// // // // };

// // // // const toggleCheckedFilter = function () {
// // // //   this.hideCheckedItems = !this.hideCheckedItems;
// // // // };

// // // // export default {
// // // //   items,
// // // //   hideCheckeditems,
// // // //   findById,
// // // //   addItem,
// // // //   findAndToggleChecked,
// // // //   findAndUpdateName,
// // // //   findAndDelete,
// // // //   toggleCheckedFilter
// // // // };