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

const loadProject = (project) => {
  const container = document.querySelector('.todo-container');
  container.innerHTML = '';
  createProjectView(project);
};

const createNewProject = (project) => {
  const newProject = document.createElement('h3');
  newProject.classList.add('project-name');
  newProject.classList.add('project-clickable');
  newProject.addEventListener('click', loadProject.bind(undefined, project));
  const projectLink = document.createElement('a');
  projectLink.href = '#';
  projectLink.textContent = project.getTitle();
  newProject.appendChild(projectLink);

  const projects = document.querySelector('.projects');
  projects.appendChild(newProject);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxTQUFJO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFeUM7Ozs7Ozs7VUNuRHpDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjREO0FBQ2I7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QiwyREFBYztBQUNyQztBQUNBLElBQUksMkRBQWdCO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyx1REFBZ0IsQ0FBQyxTQUFJO0FBQ3ZELGtDQUFrQyx1REFBZ0IsQ0FBQyxTQUFJO0FBQ3ZELGlDQUFpQyx1REFBZ0IsQ0FBQyxTQUFJOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZGVscy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdmlld3MvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvY29udHJvbGxlcnMvc2lkZWJhckNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgbGV0IHByb2pUaXRsZSA9IHRpdGxlO1xuICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gcHJvalRpdGxlO1xuXG4gIGNvbnN0IGVkaXRUaXRsZSA9IChuZXdUaXRsZSkgPT4geyBwcm9qVGl0bGUgPSBuZXdUaXRsZTsgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2sgPSAoaW5kZXgpID0+IHRhc2tMaXN0W2luZGV4XTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgZGVsZXRlIHRhc2tMaXN0W2luZGV4XTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLCBlZGl0VGl0bGUsIGFkZFRhc2ssIGdldFRhc2ssIGRlbGV0ZVRhc2ssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RmFjdG9yeTtcbiIsImNvbnN0IGNyZWF0ZVByb2plY3RWaWV3ID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XG4gIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG59O1xuXG5jb25zdCBsb2FkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNyZWF0ZVByb2plY3RWaWV3KHByb2plY3QpO1xufTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2xpY2thYmxlJyk7XG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUHJvamVjdC5iaW5kKHRoaXMsIHByb2plY3QpKTtcbiAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHByb2plY3RMaW5rLmhyZWYgPSAnIyc7XG4gIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcblxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QsIGxvYWRQcm9qZWN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QsIGxvYWRQcm9qZWN0IH0gZnJvbSAnLi4vdmlld3MvdWknO1xuaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcblxuLy8gUHJvamVjdCBNYW5hZ2VyIE9iamVjdFxubGV0IHByb2pNYW5hZ2VyID0gbnVsbDtcblxuLy8gRE9NIGVsZW1lbnRzXG5jb25zdCBpbmJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmJveCcpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbmNvbnN0IHdlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VlaycpO1xuY29uc3QgYWRkUHJvakJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuY29uc3QgbmV3UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpO1xuY29uc3QgbmV3UHJvamVjdENvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybScpO1xuY29uc3QgbmV3UHJvamVjdENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcblxuY29uc3Qgc2hvd0FkZFByb2plY3RQb3B1cCA9ICgpID0+IHtcbiAgYWRkUHJvakJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBuZXdQcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG5jb25zdCBjbG9zZUFkZFByb2plY3RQb3B1cCA9ICgpID0+IHtcbiAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gIGFkZFByb2pCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIG5ld1Byb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuY29uc3QgYWRkTmV3UHJvamVjdCA9ICgpID0+IHtcbiAgaWYgKG5ld1Byb2plY3RJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkobmV3UHJvamVjdElucHV0LnZhbHVlKTtcbiAgICBwcm9qTWFuYWdlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgY2xvc2VBZGRQcm9qZWN0UG9wdXAoKTtcbiAgfVxufTtcblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKCkgPT4ge1xuICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRQcm9qZWN0LmJpbmQodGhpcywgcHJvak1hbmFnZXIuZ2V0UHJvamVjdCgnSW5ib3gnKSkpO1xuICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRQcm9qZWN0LmJpbmQodGhpcywgcHJvak1hbmFnZXIuZ2V0UHJvamVjdCgnVG9kYXknKSkpO1xuICB3ZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFByb2plY3QuYmluZCh0aGlzLCBwcm9qTWFuYWdlci5nZXRQcm9qZWN0KCdUaGlzIFdlZWsnKSkpO1xuXG4gIGFkZFByb2pCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWRkUHJvamVjdFBvcHVwKTtcbiAgbmV3UHJvamVjdENvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcbiAgbmV3UHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWRkUHJvamVjdFBvcHVwKTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSAobWFuYWdlcikgPT4ge1xuICBwcm9qTWFuYWdlciA9IG1hbmFnZXI7XG4gIGFkZExpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IHsgaW5pdGlhbGl6ZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9