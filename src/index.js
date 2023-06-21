import './styles.css';
import projectManager from './controllers/projectManager';
import { initialize as initializeSidebar } from './controllers/sidebarController';
import { initialize as initializeList } from './controllers/listController';

const manager = projectManager();
document.addEventListener('DOMContentLoaded', manager.initialize);
document.addEventListener('DOMContentLoaded', initializeSidebar.bind(this, manager));
document.addEventListener('DOMContentLoaded', initializeList.bind(this, manager));
