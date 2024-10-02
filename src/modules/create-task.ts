import { titleField } from '../components/title-field';
import { taskRepository } from '../repository/task-repository';
import { Task } from '../types/task';
import { renderTask } from './render-task';

export const createTask = () => {
  const title = titleField.getValue();
  if (!title.trim()) return;

  const task: Task = {
    id: Date.now(),
    title,
    completed: false,
  };

  titleField.setValue('');

  taskRepository.setTask(task);

  renderTask(task);
};
