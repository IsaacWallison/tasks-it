import { deleteTask } from '../modules/delete-task';
import { editMode } from '../modules/edit-mode';
import { toggleComplete } from '../modules/toggle-complete';

export const taskListHandler = (e: MouseEvent) => {
  if (e.target instanceof HTMLElement) {
    if (!e.target.dataset.event || !e.target.dataset.id) return;

    switch (e.target.dataset.event) {
      case 'delete-task':
        deleteTask(+e.target.dataset.id);
        return;
      case 'edit-mode':
        editMode(+e.target.dataset.id);
        return;
      case 'toggle-complete':
        toggleComplete(+e.target.dataset.id);
        return;
    }
  }
};
