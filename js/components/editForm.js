import { element, btnContainer, input, textArea, select } from "./common.js";
import { categories } from '../storage.js';
import { getDate } from '../dataProcessing.js';

export default function editForm(item, submit, cancel) {
  const overlay = element('div', 'overlay');
  const form = element('form', 'form');
  form.addEventListener('submit', (e) => submit(item, e));
  form.append(element('h2', 'form__heading', 'Edit note'));
  form.append(select('category', categories, 'Choose a category', item.category));
  form.append(input('text','name', 'Note name', item.name));
  form.append(textArea('content', 'Content', item.content));
  if(item.dates.length) {
    form.append(input('date', 'start', 'Start date', getDate(item.dates[0])));
    form.append(input('date', 'end', 'End date', getDate(item.dates[1])));
  } else {
    form.append(input('date', 'start', 'Start date'));
    form.append(input('date', 'end', 'End date'));
  };
  form.append(btnContainer(cancel));
  overlay.append(form);
  return overlay;
};