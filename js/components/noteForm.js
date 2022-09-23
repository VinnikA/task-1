import { element } from "./common.js";
import { button } from './common.js';
import { categories } from '../storage.js';

function input(type, name, text) {
  const input = element('input', 'form__input');
  input.type = type;
  input.placeholder = name;
  input.name = name;
  const label = element('label', 'form__label', `${text}: `, input);
  return label;
};

function textArea(name, text) {
  const input = element('textarea', 'form__input');
  input.placeholder = name;
  input.name = name;
  const label = element('label', 'form__label', `${text}: `, input);
  return label;
};

function option(value) {
  const option = element('option', '', value);
  option.value = value;
  return option;
};

function select(name, categories, text) {
  const select = element('select', 'form__select');
  select.name = name;
  categories.forEach(item => {
    select.append(option(item));
  });
  const label = element('label', 'form__label', `${text}: `, select);
  return label;
}

export function noteForm(submit, cancel) {
  const overlay = element('div', 'overlay');
  const form = element('form', 'form');
  form.addEventListener('submit', submit);
  form.append(element('h2', 'form__heading', 'Create a new note'));
  form.append(select('category', categories, 'Choose a category'))
  form.append(input('text','name', 'Note name'));
  form.append(textArea('content', 'Content'));
  form.append(input('date', 'start', 'Start date'));
  form.append(input('date', 'end', 'End date'));
  const btnContainer = element('div', 'btn-container');
  btnContainer.append(button('submit'));
  btnContainer.append(button('cancel', cancel));
  form.append(btnContainer);
  overlay.append(form);
  return overlay;
}