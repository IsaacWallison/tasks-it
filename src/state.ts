import { Task } from './types/task';

export enum SearchedTasks {
  All = 'all',
  Complete = 'complete',
  Incomplete = 'incomplete',
}

type TaskToBeEdited = Task | null;

export const state = {
  taskToBeEdited: null as TaskToBeEdited,
  isRemovingTask: false,
  searchedTasks: SearchedTasks.All,
};
