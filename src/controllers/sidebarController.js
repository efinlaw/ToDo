import { loadProject } from '../views/ui';

// Project Manager Object
let projManager = null;

// DOM elements
const inbox = document.getElementById('inbox');
const today = document.getElementById('today');
const week = document.getElementById('week');
const addProjButton = document.querySelector('.add-project');
const newProjectInput = document.getElementById('project-input');
const newProjectConfirm = document.querySelector('.confirm');
const newProjectCancel = document.querySelector('.cancel');

const addDefaultListeners = () => {
  inbox.addEventListener('click', loadProject.bind(this, projManager.getProject('Inbox')));
  today.addEventListener('click', loadProject.bind(this, projManager.getProject('Today')));
  week.addEventListener('click', loadProject.bind(this, projManager.getProject('This Week')));
};

const initialize = (manager) => {
  projManager = manager;
  addDefaultListeners();
};

export { initialize };
