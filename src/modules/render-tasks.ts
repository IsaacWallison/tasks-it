import { createTaskItem } from '../components/task-item';
import { select } from '../libs/select';
import { Task } from '../types/task';
import { toggleSearchButton } from './toggle-search';

export const renderTasks = (tasks: Task[]) => {
  const noTasksImageContainer = select('#no-tasks');

  noTasksImageContainer.classList.add('none');

  if (!tasks.length) noTasksImageContainer.classList.remove('none');

  const tasksList = select('#tasks') as HTMLUListElement;

  tasksList.innerHTML = '';

  tasks.forEach((task) => {
    tasksList.insertAdjacentHTML('beforeend', createTaskItem(task));
  });

  toggleSearchButton();
};
