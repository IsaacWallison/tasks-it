import { taskRepository } from '../repository/task-repository';
import { renderTasks } from './render-tasks';

export const toggleComplete = (taskId: number) => {
  taskRepository.toggleComplete(taskId);
  renderTasks(taskRepository.getTasks());
};
