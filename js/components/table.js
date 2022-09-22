import { element } from "./common.js";
import { topTableTitles, bottomTableTitles } from "../storage.js";

function tableHeader(state, position) {
  const styleMod = `table__header_${position}`;
  const header = element('div', `table__header ${styleMod}`);
  for (const item of state) {
    const el = element('div', 'table__title', item);
    header.append(el);
  }
  if(position === 'top') {
    header.append(element('div', 'table__title', ''))
  }
  return header;
};

function tableRow(keys, note, position) {
  const styleMod = `table__row_${position}`;
  const row = element('div', `table__row ${styleMod}`);
  keys.forEach(key => {
    let content = '';
    if(Array.isArray(note[key.toLowerCase()])) {
      content = note[key.toLowerCase()].join(' - ');
    } else {
      content = note[key.toLowerCase()];
    }
    const el = element('div', 'table__item', content);
    row.append(el);
  });
  if(position === 'top') {
    row.append(element('div', 'table__item', ''));
  }
  return row;
}

export function table(position, headerState, contentState) {
  const table = element('div', 'table');
  table.append(tableHeader(headerState, position));
  contentState.forEach(element => {
    table.append(tableRow(headerState, element, position))
  });
  return table;
}