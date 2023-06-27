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
/*!*******************************************!*\
  !*** ./src/controllers/projectManager.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");
/* harmony import */ var _views_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/ui */ "./src/views/ui.js");



const projectManager = () => {
  const projects = [];

  const initialize = () => {
    projects.push((0,_models_project__WEBPACK_IMPORTED_MODULE_0__["default"])('Inbox'));
    projects.push((0,_models_project__WEBPACK_IMPORTED_MODULE_0__["default"])('Today'));
    projects.push((0,_models_project__WEBPACK_IMPORTED_MODULE_0__["default"])('This Week'));

    // Load the inbox on start
    (0,_views_ui__WEBPACK_IMPORTED_MODULE_1__.loadProject)(projects[0]);
  };

  const getProject = (title) => projects.find((project) => project.getTitle() === title);

  const addProject = (project) => {
    projects.push(project);
  };

  const deleteProject = (title) => {
    const foundIndex = projects.findIndex((project) => project.getTitle === title);
    delete projects[foundIndex];
  };

  return {
    initialize, getProject, addProject, deleteProject,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmlCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qzs7Ozs7OztVQ3BEekM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDTDs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwyREFBYztBQUNoQyxrQkFBa0IsMkRBQWM7QUFDaEMsa0JBQWtCLDJEQUFjOztBQUVoQztBQUNBLElBQUksc0RBQVc7QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3ZpZXdzL3VpLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbnRyb2xsZXJzL3Byb2plY3RNYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG4gIGxldCBwcm9qVGl0bGUgPSB0aXRsZTtcbiAgY29uc3QgdGFza0xpc3QgPSBbXTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHByb2pUaXRsZTtcblxuICBjb25zdCBlZGl0VGl0bGUgPSAobmV3VGl0bGUpID0+IHsgcHJvalRpdGxlID0gbmV3VGl0bGU7IH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrID0gKGluZGV4KSA9PiB0YXNrTGlzdFtpbmRleF07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICAgIGRlbGV0ZSB0YXNrTGlzdFtpbmRleF07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSwgZWRpdFRpdGxlLCBhZGRUYXNrLCBnZXRUYXNrLCBkZWxldGVUYXNrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZhY3Rvcnk7XG4iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0VmlldyA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xuICBhZGRUYXNrLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2spO1xufTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2xpY2thYmxlJyk7XG4gIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwcm9qZWN0TGluay5ocmVmID0gJyMnO1xuICBwcm9qZWN0TGluay50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG59O1xuXG5jb25zdCBsb2FkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNyZWF0ZVByb2plY3RWaWV3KHByb2plY3QpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTmV3UHJvamVjdCwgbG9hZFByb2plY3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IGxvYWRQcm9qZWN0IH0gZnJvbSAnLi4vdmlld3MvdWknO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkoJ0luYm94JykpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkoJ1RvZGF5JykpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkoJ1RoaXMgV2VlaycpKTtcblxuICAgIC8vIExvYWQgdGhlIGluYm94IG9uIHN0YXJ0XG4gICAgbG9hZFByb2plY3QocHJvamVjdHNbMF0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3QgPSAodGl0bGUpID0+IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gdGl0bGUpO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IGZvdW5kSW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUgPT09IHRpdGxlKTtcbiAgICBkZWxldGUgcHJvamVjdHNbZm91bmRJbmRleF07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsaXplLCBnZXRQcm9qZWN0LCBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1hbmFnZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=