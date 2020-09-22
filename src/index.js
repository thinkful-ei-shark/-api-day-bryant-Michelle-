import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';
import store from './store';
import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);


// import $ from 'jquery';

// import 'normalize.css';
// import './index.css';

// import api from './api';
// import store from './store';
// import shoppingList from './shopping-list';

// const main = function () {
//   api.getItems()
//     .then(res => res.json())
//     .then((items) => {
//       items.forEach((item) => store.addItem(item));
//       shoppingList.render();

//       const item = store.items[0];
//       console.log('current name: ' + item.name);
//       store.findAndUpdate(item.id, { name: 'barbaz' });
//       console.log('new name: ' + item.name);
//     });

//   shoppingList.bindEventListeners();
//   shoppingList.render();
// };

// $(main);

// // import $ from 'jquery';

// // import 'normalize.css';
// // import './index.css';

// // import api from './api';
// // import store from './store';
// // import shoppingList from './shopping-list';

// // const main = function () {
// //   api.getItems()
// //     .then(res => res.json())
// //     .then((items) => {
// //       const item = items[0];
// //       return api.updateItem(item.id, { name: 'foobar' });
// //     })
// //     .then(res => res.json())
// //     .then(() => console.log('updated!'));

// //   api.getItems()
// //     .then(res => res.json())
// //     .then((items) => {
// //       items.forEach((item) => store.addItem(item));
// //       shoppingList.render();
// //     });

// //   shoppingList.bindEventListeners();
// //   shoppingList.render();
// // };

// // $(main);



// // // import $ from 'jquery';

// // // import 'normalize.css';
// // // import './index.css';

// // // import api from './api';
// // // import store from './store';
// // // import shoppingList from './shopping-list';

// // // const main = function () {
// // //   api.getItems()
// // //     .then(res => res.json())
// // //     .then((items) => {
// // //       items.forEach((item) => store.addItem(item));
// // //       shoppingList.render();
// // //     });

// // //   shoppingList.bindEventListeners();
// // //   shoppingList.render();
// // // };

// // // $(main);

// // // // // import $ from 'jquery';
// // // // // import 'normalize.css';
// // // // import './index.css';
// // // // import api from './api';
// // // // import store from './store';
// // // // import shoppingList from './shopping-list';



// // // // const main = function () {
// // // //   // api.createItem('pears')
// // // //   //   .then(res => res.json())
// // // //   //   .then((newItem) => {
// // // //   //     return api.getItems();
// // // //   //   })

// // // //   api.getItems()
// // // //     .then(res => res.json())
// // // //     .then((items) => {
// // // //       // console.log(items);

// // // //       items.forEach((item)=> store.addItem(item));
// // // //       shoppingList.render();
// // // //     });

// // // //   shoppingList.bindEventListeners();
// // // //   shoppingList.render();
// // // // };

// // // // // const main = function () {
// // // // //   //test code for restful api checkpoint section 3
// // // // //   // api.getItems()
// // // // //   //   .then(res => res.json())
// // // // //   //   .then(res => console.log(res));

// // // // //   shoppingList.bindEventListeners();
// // // // //   shoppingList.render();
// // // // // };

// // // // // api.getItems()
// // // // //   .then(res => res.json())
// // // // //   .then(res => console.log(res));


// // // // // api.getItems()
// // // // //   .then(res => console.log(res));

// // // // // console.log(api.BASE_URL);

// // // // //test code from restful api checkpoint
// // // // // fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
// // // // //   .then(res => res.json())
// // // // //   .then(data => console.log(data));

// // // // // const main = function () {
// // // // //   shoppingList.bindEventListeners();
// // // // //   shoppingList.render();
// // // // // };

// // // // $(main);
