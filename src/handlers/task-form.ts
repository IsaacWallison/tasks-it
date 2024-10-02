import { cancelEdit } from '../modules/cancel-edit';
import { confirmEdit } from '../modules/confirm-edit';
import { createTask } from '../modules/create-task';
import { renderTasks } from '../modules/render-tasks';
import { taskRepository } from '../repository/task-repository';
import { SearchedTasks, state } from '../state';

export const handleTaskFormEvents = (e: MouseEvent) => {
  if (e.target instanceof HTMLElement) {
    if (!e.target.dataset.event) return;

    switch (e.target.dataset.event) {
      case 'add-task':
        createTask();
        return;
      case 'cancel-edit':
        cancelEdit();
        return;
      case 'confirm-edit':
        confirmEdit();
        return;
      case 'list-all':
      case 'list-complete':
      case 'list-incomplete':
        cancelEdit();

        if (e.target.dataset.search === 'all') {
          state.searchedTasks = SearchedTasks.All;
        }
        if (e.target.dataset.search === 'complete') {
          state.searchedTasks = SearchedTasks.Complete;
        }
        if (e.target.dataset.search === 'incomplete') {
          state.searchedTasks = SearchedTasks.Incomplete;
        }

        renderTasks(taskRepository.getTasks());
        return;
    }
  }
};
