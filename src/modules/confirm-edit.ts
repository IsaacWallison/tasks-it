import { titleField } from '../components/title-field';
import { taskRepository } from '../repository/task-repository';
import { state } from '../state';
import { cancelEdit } from './cancel-edit';
import { renderTasks } from './render-tasks';

export const confirmEdit = () => {
  const title = titleField.getValue();

  if (!title.trim()) return;

  if (!state.taskToBeEdited) return;

  taskRepository.updateTitle(state.taskToBeEdited.id, title);

  cancelEdit();

  renderTasks(taskRepository.getAll());
};
