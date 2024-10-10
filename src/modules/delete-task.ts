import { select } from '../libs/select';
import { taskRepository } from '../repository/task-repository';
import { state } from '../state';
import { renderTasks } from './render-tasks';

export const deleteTask = (taskId: number) => {
  if (state.isRemovingTask) return;

  const tasks = taskRepository.getAll();

  const updatedTasks = tasks.filter((task) => task.id !== taskId);

  taskRepository.setTasks(updatedTasks);

  select(`button[data-id="${taskId}"]`)!
    .closest('li')!
    .classList.add('remove-animation');

  state.isRemovingTask = true;

  setTimeout(() => {
    renderTasks(taskRepository.getTasks());
    state.isRemovingTask = false;
  }, 1000);
};
