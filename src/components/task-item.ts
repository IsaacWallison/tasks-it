import { Task } from '../types/task';

export const createTaskItem = (task: Task) => `
    <li class="task flex">
      <label class="flex stretch align-center">
        <input type="checkbox" data-event="toggle-complete" data-id="${
          task.id
        }" ${task.completed && 'checked'}/>
        <span>${task.title}</span> 
      </label>

      <div class="flex">
        <button class="btn fas fa-edit" data-id="${
          task.id
        }" data-event="edit-mode"></button>
        <button class="btn fas fa-close" data-id="${
          task.id
        }" data-event="delete-task"></button>
      </div>
    </li>
`;
