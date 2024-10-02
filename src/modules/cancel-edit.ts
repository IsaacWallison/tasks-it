import { titleField } from '../components/title-field';
import { disableButtons } from '../libs/disable';
import { select } from '../libs/select';
import { state } from '../state';

export const cancelEdit = () => {
  titleField.setValue('');

  state.taskToBeEdited = null;

  select("button[data-event='add-task']").classList.remove('none');
  select('#edit-buttons').classList.add('none');

  disableButtons("button[data-event='edit-mode']", false);
  disableButtons("button[data-event='delete-task']", false);
};
