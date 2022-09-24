import { element } from "./common.js";
import { button } from './common.js';
import { categories } from '../storage.js';
import { getDate } from '../dataProcessing.js';

function input(type, name, text, value) {
  const input = element('input', 'form__input');
  input.type = type;
  input.value = value;
  input.name = name;
  const label = element('label', 'form__label', `${text}: `, input);
  return label;
};

function textArea(name, text, value) {
  const input = element('textarea', 'form__input');
  input.value = value;
  input.name = name;
  const label = element('label', 'form__label', `${text}: `, input);
  return label;
};

function option(value) {
  const option = element('option', '', value);
  option.value = value;
  return option;
};

function select(name, categories, text, value) {
  const select = element('select', 'form__select');
  select.name = name;
  select.value = value;
  categories.forEach(item => {
    select.append(option(item));
  });
  const label = element('label', 'form__label', `${text}: `, select);
  return label;
};

export function editForm(item, submit, cancel) {
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
  }

  const btnContainer = element('div', 'btn-container');
  btnContainer.append(button('submit'));
  btnContainer.append(button('cancel', cancel));
  form.append(btnContainer);
  overlay.append(form);
  return overlay;
}