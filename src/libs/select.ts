export const select = (element: string): HTMLElement => {
  return document.querySelector(element) as HTMLElement;
};

export const selectAll = (elements: string) => {
  return document.querySelectorAll(elements);
};
