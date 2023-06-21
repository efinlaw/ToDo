import { loadHomePage } from '../views/ui';

// Project Manager Object
let projManager;

const setProjectManager = (manager) => {
  projManager = manager;
};

// DOM elements
const home = document.getElementById('home');
const today = document.getElementById('today');
const week = document.getElementById('week');
const addProjButton = document.querySelector('.add-project');
const newProjectInput = document.getElementById('project-input');
const newProjectConfirm = document.querySelector('.confirm');
const newProjectCancel = document.querySelector('.cancel');

export { setProjectManager };
