import { select, selectAll } from '../libs/select';
import { state } from '../state';

export const toggleSearchButton = () => {
  selectAll('button[data-search]').forEach((button) =>
    button.classList.remove('btn--selected')
  );

  select(`button[data-search="${state.searchedTasks}"]`).classList.add(
    'btn--selected'
  );
};
