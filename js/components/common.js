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

export function btnContainer(cancel) {
  const container = element('div', 'btn-container');
  container.append(button('submit'));
  container.append(button('cancel', cancel));
  return container;
};

function iconBtn(func, iconName, id) {
  const btn = element('button', 'icon-btn');
  btn.addEventListener('click', () => func(id));
  btn.append(icon(iconName));
  return btn;
}

export function iconBtnBlock({edit, archive, remove}, id) {
  const iconBtnBlock = element('div', 'icon-btn-block');
  iconBtnBlock.append(iconBtn(edit, 'edit', id));
  iconBtnBlock.append(iconBtn(archive, 'download', id));
  iconBtnBlock.append(iconBtn(remove, 'trash', id));
  return iconBtnBlock;
}

export function input(type, name, text, value) {
  const input = element('input', 'form__input');
  input.type = type;
  if(value) {
    input.value = value;
  };
  input.name = name;
  input.placeholder = name;
  const label = element('label', 'form__label', `${text}: `, input);
  return label;
};

export function textArea(name, text, value) {
  const input = element('textarea', 'form__input');
  if(value) {
    input.value = value;
  };
  input.name = name;
  input.placeholder = name;
  const label = element('label', 'form__label', `${text}: `, input);
  return label;
};

function option(value) {
  const option = element('option', '', value);
  option.value = value;
  return option;
};

export function select(name, categories, text, value) {
  const select = element('select', 'form__select');
  select.name = name;
  if(value) {
    select.value = value;
  }
  categories.forEach(item => {
    select.append(option(item));
  });
  const label = element('label', 'form__label', `${text}: `, select);
  return label;
};