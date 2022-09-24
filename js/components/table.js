import { element, iconBlock, iconBtnBlock, roundIcon } from './common.js';
import { icons } from '../storage.js';
import { getSring } from '../dataProcessing.js';

function tableHeader(state, position) {
  const styleMod = `table__header_${position}`;
  const header = element('div', `table__header ${styleMod}`);
  for (const item of state) {
    const el = element('div', 'table__title', item);
    header.append(el);
  }
  if(position === 'top') {
    const block = element('div', 'table__title table__title_last', '');
    block.append(iconBlock());
    header.append(block);
  }
  return header;
};

function tableRowItem(note, key, position, iconName){
  let content = note[key.toLowerCase()];
  content = getSring(content);
  if(position === 'top' && key === 'Name' || position === 'bottom' && key === 'Note Category') {
    const el = element('div', 'table__item table__item_first', content, roundIcon(iconName));
    return el;
  } else {
    const el = element('div', 'table__item', content);
    return el;
  };
}

function tableRow(keys, note, position, actions) {
  const styleMod = `table__row_${position}`;
  const row = element('div', `table__row ${styleMod}`);
  let iconName = icons[note.category] || icons[note['note category']];
  keys.forEach(key => {
    row.append(tableRowItem(note, key, position, iconName));
  });
  if(position === 'top') {
    const block = element('div', 'table__item table__item_last', '');
    block.append(iconBtnBlock(actions, note.id));
    row.append(block);
  }
  return row;
}

export default function table(position, headerState, contentState, actions) {
  const table = element('div', 'table');
  table.append(tableHeader(headerState, position));
  contentState.forEach(element => {
    if(element.archived && position === 'top') return;
    table.append(tableRow(headerState, element, position, actions))
  });
  return table;
}