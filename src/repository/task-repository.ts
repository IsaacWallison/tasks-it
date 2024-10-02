import { SearchedTasks, state } from '../state';
import { Task } from '../types/task';

export const taskRepository = {
  getTask(id: number): Task | undefined {
    const tasks = this.getAll();

    const taskFound = tasks.find((task) => {
      return task.id === id;
    });

    return taskFound;
  },
  getAll(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  },
  getCompleted(): Task[] {
    const tasks = this.getAll();

    const completedTasks = tasks.filter((task) => task.completed);

    return completedTasks;
  },
  getIncompleted(): Task[] {
    const tasks = this.getAll();

    const incompletedTasks = tasks.filter((task) => !task.completed);

    return incompletedTasks;
  },
  getTasks(): Task[] {
    switch (state.searchedTasks) {
      case SearchedTasks.All:
        return this.getAll();
      case SearchedTasks.Complete:
        return this.getCompleted();
      case SearchedTasks.Incomplete:
        return this.getIncompleted();
      default:
        return this.getAll();
    }
  },

  setTask(task: Task) {
    const tasks = this.getAll();

    tasks.push(task);

    this.setTasks(tasks);
  },
  setTasks(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },

  updateTitle(taskId: number, title: string) {
    const tasks = this.getAll();

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.title = title;
      }

      return task;
    });

    this.setTasks(updatedTasks);
  },

  toggleComplete(taskId: number) {
    const tasks = this.getAll();
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });
    this.setTasks(updatedTasks);
  },
};
