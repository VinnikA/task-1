export function element(type, style='', content='', children) {
  const el = document.createElement(type);
  el.className = style;
  el.textContent = content;
  if(children) {
    el.append(children);
  }
  return el;
};

export function button(text, click) {
  const btn = element('button', 'btn', text);
  if(click) {
    btn.addEventListener('click', (e) => click(e));
  };
  return btn;
};