import { topTableTitles, bottomTableTitles, notes, categories } from './storage.js';
import { notesConditionList } from './dataProcessing.js';
import { table } from './components/table.js';
import { element, button } from './components/common.js';
import { noteForm } from './components/noteForm.js';

const root = document.querySelector('.root');

function handelClick() {
  root.append(noteForm(createNote, cancel));
};

function cancel(e) {
  e.preventDefault();
  const overlay = document.querySelector('.overlay');
  overlay.remove();
};

function createNote(e) {
  e.preventDefault();
  const overlay = document.querySelector('.overlay');
  overlay.remove();
  console.dir(e.target.name.value);
}

const topSection = element('section', 'section');
topSection.append(table('top', topTableTitles, notes));
const btn = button('add note', handelClick);
const topSectionBtn = element('div', 'btn-container', '', btn);
topSection.append(topSectionBtn);
root.append(topSection);


const bottomSection = element('section', 'section');
const conditionList = notesConditionList(categories, notes);
bottomSection.append(table('bottom', bottomTableTitles, conditionList) );
root.append(bottomSection);
