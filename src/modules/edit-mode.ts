import { titleField } from '../components/title-field';
import { disableButtons } from '../libs/disable';
import { select } from '../libs/select';
import { taskRepository } from '../repository/task-repository';
import { state } from '../state';

export const editMode = (taskId: number) => {
  const taskFound = taskRepository.getTask(taskId);
  if (!taskFound) return;

  titleField.setValue(taskFound.title);
  titleField.element.focus();

  state.taskToBeEdited = taskFound;

  select("button[data-event='add-task']").classList.add('none');
  select('#edit-buttons').classList.remove('none');

  disableButtons("button[data-event='edit-mode']", true);
  disableButtons("button[data-event='delete-task']", true);
};
