import { selectAll } from './select';

export const disableButtons = (buttons: string, disabled: boolean) => {
  selectAll(buttons).forEach((el) => {
    const button = el as HTMLButtonElement;
    button.disabled = disabled;
  });
};
