import './styles.css';
import projectManager from './controllers/projectManager';
import { setProjectManager as setSideBarManager } from './controllers/sidebarController';
import { setProjectManager as setListManager } from './controllers/listController';

const manager = projectManager();
document.addEventListener('DOMContentLoaded', manager.initialize());
document.addEventListener('DOMContentLoaded', setSideBarManager(manager));
document.addEventListener('DOMContentLoaded', setListManager(manager));
