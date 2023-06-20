/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectFactory = (title) => {
  let projTitle = title;
  const taskList = [];

  const getTitle = () => projTitle;

  const editTitle = (newTitle) => { projTitle = newTitle; };

  const addTask = (task) => {
    taskList.push(task);
  };

  const getTask = (index) => taskList[index];

  const deleteTask = (index) => {
    delete taskList[index];
  };

  return {
    getTitle, editTitle, addTask, getTask, deleteTask,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);


/***/ }),

/***/ "./src/views/ui.js":
/*!*************************!*\
  !*** ./src/views/ui.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectView: () => (/* binding */ createProjectView),
/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");


const createProjectView = (project) => {
  const name = document.createElement('h2');
  name.classList.add('project-name');
  name.textContent = project.getTitle();

  const header = document.createElement('div');
  header.classList.add('task-header');

  const title = document.createElement('p');
  title.textContent = 'Title';
  const description = document.createElement('p');
  description.textContent = 'Description';
  const priority = document.createElement('p');
  priority.textContent = 'Priority';
  const dueDate = document.createElement('p');
  dueDate.textContent = 'Due Date';

  header.appendChild(title);
  header.appendChild(description);
  header.appendChild(priority);
  header.appendChild(dueDate);

  const addTask = document.createElement('button');
  addTask.classList.add('add-task');
  addTask.textContent = 'Add Task';

  const container = document.querySelector('.todo-container');
  container.appendChild(name);
  container.appendChild(header);
  container.appendChild(addTask);
};

const loadHomePage = () => {
  const container = document.querySelector('.todo-container');
  container.innerHTML = '';
  const home = (0,_models_project__WEBPACK_IMPORTED_MODULE_0__["default"])('Home');
  createProjectView(home);
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./src/controllers/sidebarController.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/ui */ "./src/views/ui.js");


// DOM elements
const home = document.getElementById('home');
const today = document.getElementById('today');
const week = document.getElementById('week');
const addProjButton = document.querySelector('.add-project');
const newProjectInput = document.getElementById('project-input');
const newProjectConfirm = document.querySelector('.confirm');
const newProjectCancel = document.querySelector('.cancel');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmlCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyREFBYztBQUM3QjtBQUNBOztBQUUyQzs7Ozs7OztVQ3pDM0M7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy92aWV3cy91aS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb250cm9sbGVycy9zaWRlYmFyQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICBsZXQgcHJvalRpdGxlID0gdGl0bGU7XG4gIGNvbnN0IHRhc2tMaXN0ID0gW107XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBwcm9qVGl0bGU7XG5cbiAgY29uc3QgZWRpdFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7IHByb2pUaXRsZSA9IG5ld1RpdGxlOyB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4gdGFza0xpc3RbaW5kZXhdO1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICBkZWxldGUgdGFza0xpc3RbaW5kZXhdO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsIGVkaXRUaXRsZSwgYWRkVGFzaywgZ2V0VGFzaywgZGVsZXRlVGFzayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGYWN0b3J5O1xuIiwiaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcblxuY29uc3QgY3JlYXRlUHJvamVjdFZpZXcgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xuICBhZGRUYXNrLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2spO1xufTtcblxuY29uc3QgbG9hZEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBob21lID0gcHJvamVjdEZhY3RvcnkoJ0hvbWUnKTtcbiAgY3JlYXRlUHJvamVjdFZpZXcoaG9tZSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0VmlldywgbG9hZEhvbWVQYWdlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gJy4uL3ZpZXdzL3VpJztcblxuLy8gRE9NIGVsZW1lbnRzXG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5Jyk7XG5jb25zdCB3ZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWsnKTtcbmNvbnN0IGFkZFByb2pCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0Jyk7XG5jb25zdCBuZXdQcm9qZWN0Q29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtJyk7XG5jb25zdCBuZXdQcm9qZWN0Q2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9