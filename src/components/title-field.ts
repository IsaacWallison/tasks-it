import { select } from '../libs/select';

export const titleField = {
  element: select('#task-title') as HTMLInputElement,
  getValue() {
    return this.element!.value;
  },
  setValue(value: string) {
    this.element!.value = value;
  },
  focus() {
    this.element.focus();
  },
  isEmpty() {
    return !this.getValue().trim().length;
  },
};
