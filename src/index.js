import './styles.css';
import { default as projectFactory } from './project';
import { createProjectView } from './ui';

const home = projectFactory('Home');
createProjectView(home);
