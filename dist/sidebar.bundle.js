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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmlCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDJEQUFjO0FBQzdCO0FBQ0E7O0FBRTJDOzs7Ozs7O1VDdkMzQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3ZpZXdzL3VpLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbnRyb2xsZXJzL3NpZGViYXJDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG4gIGxldCBwcm9qVGl0bGUgPSB0aXRsZTtcbiAgY29uc3QgdGFza0xpc3QgPSBbXTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHByb2pUaXRsZTtcblxuICBjb25zdCBlZGl0VGl0bGUgPSAobmV3VGl0bGUpID0+IHsgcHJvalRpdGxlID0gbmV3VGl0bGU7IH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrID0gKGluZGV4KSA9PiB0YXNrTGlzdFtpbmRleF07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICAgIGRlbGV0ZSB0YXNrTGlzdFtpbmRleF07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSwgZWRpdFRpdGxlLCBhZGRUYXNrLCBnZXRUYXNrLCBkZWxldGVUYXNrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZhY3Rvcnk7XG4iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0VmlldyA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XG4gIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG59O1xuXG5jb25zdCBsb2FkSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWUgPSBwcm9qZWN0RmFjdG9yeSgnSG9tZScpO1xuICBjcmVhdGVQcm9qZWN0Vmlldyhob21lKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RWaWV3LCBsb2FkSG9tZVBhZ2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSAnLi4vdmlld3MvdWknO1xuXG4vLyBET00gZWxlbWVudHNcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbmNvbnN0IHdlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VlaycpO1xuY29uc3QgYWRkUHJvakJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5wdXQnKTtcbmNvbnN0IG5ld1Byb2plY3RDb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm0nKTtcbmNvbnN0IG5ld1Byb2plY3RDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=