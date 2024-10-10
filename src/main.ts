import { handleTaskFormEvents } from './handlers/task-form';
import { taskListHandler } from './handlers/task-list';
import { select } from './libs/select';
import { renderTasks } from './modules/render-tasks';
import { taskRepository } from './repository/task-repository';
import './style.css';

const taskTitle = select<HTMLInputElement>('#task-title');

window.onload = () => {
  const tasks = taskRepository.getTasks();
  taskTitle!.focus();
  renderTasks(tasks);
};

select('#task-form')!.addEventListener('click', handleTaskFormEvents);

select('#tasks')!.addEventListener('click', taskListHandler);
