import { createNewProject, loadProject } from '../views/ui';
import projectFactory from '../models/project';

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
    const newProject = projectFactory(newProjectInput.value);
    projManager.addProject(newProject);
    createNewProject(newProject);
    closeAddProjectPopup();
  }
};

const addListeners = () => {
  inbox.addEventListener('click', loadProject.bind(this, projManager.getProject('Inbox')));
  today.addEventListener('click', loadProject.bind(this, projManager.getProject('Today')));
  week.addEventListener('click', loadProject.bind(this, projManager.getProject('This Week')));

  addProjButton.addEventListener('click', showAddProjectPopup);
  newProjectConfirm.addEventListener('click', addNewProject);
  newProjectCancel.addEventListener('click', closeAddProjectPopup);
};

const initialize = (manager) => {
  projManager = manager;
  addListeners();
};

export { initialize };
