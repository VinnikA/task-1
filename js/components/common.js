export function element(type, style='', content='', children) {
  const el = document.createElement(type);
  el.className = style;
  el.textContent = content;
  if(children) {
    el.append(children);
  }
  return el;
};

function icon(iconName) {
  const i = element('i', `fa fa-${iconName} fa-lg`);
  return i;
};

export function roundIcon(iconName) {
  const i = element('i', `fa fa-${iconName} fa`);
  const round = element('div', 'round-icon', '', i);
  return round;
}

export function iconBlock() {
  const block = element('div', 'icon-block');
  block.append(icon('download'));
  block.append(icon('trash'));
  return block;
}

export function button(text, click, iconName) {
  const btn = element('button', 'btn', text);
  if(click) {
    btn.addEventListener('click', (e) => click(e));
  };
  if(iconName) {
    btn.append(icon(iconName));
  }
  return btn;
};

function iconBtn(func, iconName, name, id) {
  const btn = element('button', 'icon-btn');
  btn.name = name;
  btn.addEventListener('click', () => func(btn, id));
  btn.append(icon(iconName));
  return btn;
}

export function iconBtnBlock({edit, archive, remove}, id) {
  const iconBtnBlock = element('div', 'icon-btn-block');
  iconBtnBlock.append(iconBtn(edit, 'edit', 'edit', id));
  iconBtnBlock.append(iconBtn(archive, 'download', 'archive', id));
  iconBtnBlock.append(iconBtn(remove, 'trash', 'remove', id));
  return iconBtnBlock;
}