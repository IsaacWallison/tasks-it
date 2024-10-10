export function select<T extends HTMLElement>(element: string) {
  return document.querySelector<T>(element);
}

export function selectAll<T extends HTMLElement>(elements: string) {
  return document.querySelectorAll<T>(elements);
}
