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
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   loadProject: () => (/* binding */ loadProject)
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

const createNewProject = (project) => {
  const newProject = document.createElement('h3');
  newProject.classList.add('project-name');
  newProject.classList.add('project-clickable');
  const projectLink = document.createElement('a');
  projectLink.href = '#';
  projectLink.textContent = project.getTitle();
  newProject.appendChild(projectLink);

  const projects = document.querySelector('.projects');
  projects.appendChild(newProject);
};

const loadProject = (project) => {
  const container = document.querySelector('.todo-container');
  container.innerHTML = '';
  createProjectView(project);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _views_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/ui */ "./src/views/ui.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");



// Project Manager Object
let projManager = null;

// DOM elements
const inbox = document.getElementById('inbox');
const today = document.getElementById('today');
const week = document.getElementById('week');
const addProjButton = document.querySelector('.add-project');
const newProjectPopup = document.querySelector('.new-project');
const newProjectInput = document.getElementById('project-input');
const newProjectConfirm = document.querySelector('.confirm');
const newProjectCancel = document.querySelector('.cancel');

const showAddProjectPopup = () => {
  addProjButton.style.display = 'none';
  newProjectPopup.style.display = 'block';
};

const closeAddProjectPopup = () => {
  newProjectInput.value = '';
  addProjButton.style.display = 'block';
  newProjectPopup.style.display = 'none';
};

const addNewProject = () => {
  if (newProjectInput.value !== '') {
    const newProject = (0,_models_project__WEBPACK_IMPORTED_MODULE_1__["default"])(newProjectInput.value);
    projManager.addProject(newProject);
    (0,_views_ui__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(newProject);
    closeAddProjectPopup();
  }
};

const addListeners = () => {
  inbox.addEventListener('click', _views_ui__WEBPACK_IMPORTED_MODULE_0__.loadProject.bind(undefined, projManager.getProject('Inbox')));
  today.addEventListener('click', _views_ui__WEBPACK_IMPORTED_MODULE_0__.loadProject.bind(undefined, projManager.getProject('Today')));
  week.addEventListener('click', _views_ui__WEBPACK_IMPORTED_MODULE_0__.loadProject.bind(undefined, projManager.getProject('This Week')));

  addProjButton.addEventListener('click', showAddProjectPopup);
  newProjectConfirm.addEventListener('click', addNewProject);
  newProjectCancel.addEventListener('click', closeAddProjectPopup);
};

const initialize = (manager) => {
  projManager = manager;
  addListeners();
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmlCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qzs7Ozs7OztVQ3BEekM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDYjs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDJEQUFjO0FBQ3JDO0FBQ0EsSUFBSSwyREFBZ0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLHVEQUFnQixDQUFDLFNBQUk7QUFDdkQsa0NBQWtDLHVEQUFnQixDQUFDLFNBQUk7QUFDdkQsaUNBQWlDLHVEQUFnQixDQUFDLFNBQUk7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy92aWV3cy91aS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb250cm9sbGVycy9zaWRlYmFyQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICBsZXQgcHJvalRpdGxlID0gdGl0bGU7XG4gIGNvbnN0IHRhc2tMaXN0ID0gW107XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBwcm9qVGl0bGU7XG5cbiAgY29uc3QgZWRpdFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7IHByb2pUaXRsZSA9IG5ld1RpdGxlOyB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4gdGFza0xpc3RbaW5kZXhdO1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICBkZWxldGUgdGFza0xpc3RbaW5kZXhdO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsIGVkaXRUaXRsZSwgYWRkVGFzaywgZ2V0VGFzaywgZGVsZXRlVGFzayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGYWN0b3J5O1xuIiwiaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcblxuY29uc3QgY3JlYXRlUHJvamVjdFZpZXcgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrLWhlYWRlcicpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcbiAgYWRkVGFzay50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNsaWNrYWJsZScpO1xuICBjb25zdCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgcHJvamVjdExpbmsuaHJlZiA9ICcjJztcbiAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xuXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xufTtcblxuY29uc3QgbG9hZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjcmVhdGVQcm9qZWN0Vmlldyhwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QsIGxvYWRQcm9qZWN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QsIGxvYWRQcm9qZWN0IH0gZnJvbSAnLi4vdmlld3MvdWknO1xuaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcblxuLy8gUHJvamVjdCBNYW5hZ2VyIE9iamVjdFxubGV0IHByb2pNYW5hZ2VyID0gbnVsbDtcblxuLy8gRE9NIGVsZW1lbnRzXG5jb25zdCBpbmJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmJveCcpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbmNvbnN0IHdlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VlaycpO1xuY29uc3QgYWRkUHJvakJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuY29uc3QgbmV3UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpO1xuY29uc3QgbmV3UHJvamVjdENvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybScpO1xuY29uc3QgbmV3UHJvamVjdENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcblxuY29uc3Qgc2hvd0FkZFByb2plY3RQb3B1cCA9ICgpID0+IHtcbiAgYWRkUHJvakJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBuZXdQcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG5jb25zdCBjbG9zZUFkZFByb2plY3RQb3B1cCA9ICgpID0+IHtcbiAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gIGFkZFByb2pCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIG5ld1Byb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuY29uc3QgYWRkTmV3UHJvamVjdCA9ICgpID0+IHtcbiAgaWYgKG5ld1Byb2plY3RJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkobmV3UHJvamVjdElucHV0LnZhbHVlKTtcbiAgICBwcm9qTWFuYWdlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgY2xvc2VBZGRQcm9qZWN0UG9wdXAoKTtcbiAgfVxufTtcblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKCkgPT4ge1xuICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRQcm9qZWN0LmJpbmQodGhpcywgcHJvak1hbmFnZXIuZ2V0UHJvamVjdCgnSW5ib3gnKSkpO1xuICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRQcm9qZWN0LmJpbmQodGhpcywgcHJvak1hbmFnZXIuZ2V0UHJvamVjdCgnVG9kYXknKSkpO1xuICB3ZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFByb2plY3QuYmluZCh0aGlzLCBwcm9qTWFuYWdlci5nZXRQcm9qZWN0KCdUaGlzIFdlZWsnKSkpO1xuXG4gIGFkZFByb2pCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWRkUHJvamVjdFBvcHVwKTtcbiAgbmV3UHJvamVjdENvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcbiAgbmV3UHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWRkUHJvamVjdFBvcHVwKTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSAobWFuYWdlcikgPT4ge1xuICBwcm9qTWFuYWdlciA9IG1hbmFnZXI7XG4gIGFkZExpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IHsgaW5pdGlhbGl6ZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9