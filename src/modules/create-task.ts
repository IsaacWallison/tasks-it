import { titleField } from '../components/title-field';
import { taskRepository } from '../repository/task-repository';
import { Task } from '../types/task';
import { renderTask } from './render-task';

export const createTask = () => {
  if (titleField.isEmpty()) return;

  const title = titleField.getValue();

  const task: Task = {
    id: Date.now(),
    title,
    completed: false,
  };

  titleField.setValue('');
  titleField.focus();

  taskRepository.setTask(task);

  renderTask(task);
};
