import './styles.css';
import { default as projectFactory } from '../models/project';
import { createProjectView } from '../views/ui';

const initialize = () => {
  const home = projectFactory('Home');
  createProjectView(home);
};
initialize();
