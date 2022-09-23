import { element, iconBlock, iconBtnBlock, roundIcon } from "./common.js";
import { icons } from "../storage.js";

function tableHeader(state, position) {
  const styleMod = `table__header_${position}`;
  const header = element('div', `table__header ${styleMod}`);
  for (const item of state) {
    const el = element('div', 'table__title', item);
    header.append(el);
  }
  if(position === 'top') {
    const block = element('div', 'table__title', '');
    block.append(iconBlock());
    header.append(block);
  }
  return header;
};

function tableRow(keys, note, position, actions) {
  const styleMod = `table__row_${position}`;
  const row = element('div', `table__row ${styleMod}`);
  let iconName = icons[note.category] || icons[note['note category']];
  keys.forEach(key => {
    let content = '';
    if(Array.isArray(note[key.toLowerCase()])) {
      content = note[key.toLowerCase()].join(' - ');
    } else {
      content = note[key.toLowerCase()];
    };
    if(position === 'top' && key === 'Name' || position === 'bottom' && key === 'Note Category') {
      const el = element('div', 'table__item table__item_first', content, roundIcon(iconName));
      row.append(el);
    } else {
      const el = element('div', 'table__item', content);
      row.append(el);
    };
  });
  if(position === 'top') {
    const block = element('div', 'table__item', '');
    block.append(iconBtnBlock(actions, note.id));
    row.append(block);
  }
  return row;
}

export function table(position, headerState, contentState, actions) {
  const table = element('div', 'table');
  table.append(tableHeader(headerState, position));
  contentState.forEach(element => {
    table.append(tableRow(headerState, element, position, actions))
  });
  return table;
}