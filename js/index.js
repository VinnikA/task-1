import { topTableTitles, bottomTableTitles, notes, categories } from './storage.js';
import { notesConditionList, timeMark, getDates, NewNote } from './dataProcessing.js';
import { table } from './components/table.js';
import { element, button,  } from './components/common.js';
import { noteForm } from './components/noteForm.js';


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

const actions = {
  edit(btn, id) {
    console.log(btn.name, id);
  },
  archive(btn, id) {
    console.log(btn.name, id);
  },
  remove(btn, id) {
    console.log(btn.name, id);
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
