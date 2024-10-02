import { createTaskItem } from '../components/task-item';
import { disableButtons } from '../libs/disable';
import { select } from '../libs/select';
import { SearchedTasks, state } from '../state';
import { Task } from '../types/task';
import { toggleSearchButton } from './toggle-search';

export const renderTask = (task: Task) => {
  disableButtons('button[data-search]', false);

  const isAllOrIncompleteTasksBeenShown =
    state.searchedTasks === SearchedTasks.All ||
    state.searchedTasks === SearchedTasks.Incomplete;

  if (isAllOrIncompleteTasksBeenShown) {
    select('#tasks')!.insertAdjacentHTML('beforeend', createTaskItem(task));

    select('#no-tasks')!.classList.add('none');
  }

  toggleSearchButton();
};
