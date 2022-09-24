import { topTableTitles, bottomTableTitles, notes, categories } from './storage.js';
import { notesConditionList, timeMark, getDates, NewNote } from './dataProcessing.js';
import { table } from './components/table.js';
import { element, button,  } from './components/common.js';
import { noteForm } from './components/noteForm.js';
import { editForm } from './components/editForm.js';


const root = document.querySelector('.root');
let state = [...notes];

function handelClick() {
  root.append(noteForm(createNote, cancel));
};

function cancel(e) {
  e.preventDefault();
  document.querySelector('.overlay').remove();
};

function createNote(e) {
  e.preventDefault();
  document.querySelector('.overlay').remove();
  const {name, category, content, start, end} = e.target;
  const created = timeMark();
  const dates = getDates(start.value, end.value);
  const note = new NewNote(category.value, name.value, content.value, created, dates);
  state.push(note);
  rentder(state);
};

function changeNote(note, e) {
  e.preventDefault();
  document.querySelector('.overlay').remove();
  const {name, category, content, start, end} = e.target;
  note.name = name.value;
  note.category = category.value;
  note.content = content.value;
  note.dates = getDates(start.value, end.value);
  rentder(state);
};

const actions = {
  edit(id) {
    const item = state.find(el => el.id === id);
    root.append(editForm(item, changeNote, cancel));
  },
  archive(id) {
    const item = state.find(el => el.id === id);
    item.archived = true;
    rentder(state);
  },
  remove(id) {
    state = state.filter(el => !(el.id === id));
    rentder(state);
  },
};

function rentder(state) {
  root.innerHTML = '';

  const topSection = element('section', 'section');
  topSection.append(table('top', topTableTitles, state, actions));
  const btn = button('add note', handelClick);
  const topSectionBtn = element('div', 'btn-container', '', btn);
  topSection.append(topSectionBtn);
  root.append(topSection);

  const bottomSection = element('section', 'section');
  const conditionList = notesConditionList(categories, state);
  bottomSection.append(table('bottom', bottomTableTitles, conditionList) );
  root.append(bottomSection);
}

rentder(state);
