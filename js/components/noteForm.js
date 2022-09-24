import { element, btnContainer, input, textArea, select } from "./common.js";
import { categories } from '../storage.js';

export default function noteForm(submit, cancel) {
  const overlay = element('div', 'overlay');
  const form = element('form', 'form');
  form.addEventListener('submit', submit);
  form.append(element('h2', 'form__heading', 'Create a new note'));
  form.append(select('category', categories, 'Choose a category'))
  form.append(input('text', 'name', 'Note name'));
  form.append(textArea('content', 'Content'));
  form.append(input('date', 'start', 'Start date'));
  form.append(input('date', 'end', 'End date'));
  form.append(btnContainer(cancel));
  overlay.append(form);
  return overlay;
};