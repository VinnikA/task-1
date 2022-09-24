class Condition {
  constructor(noteCategory, active, archived) {
    this['note category'] = noteCategory;
    this.active = active;
    this.archived = archived;
  }
};

export function notesConditionList(categories, notes) {
  const categoriesList = [];
  categories.forEach(item => {
    const allOfCategory = notes.filter(el => el.category === item);
    const archivedItems = allOfCategory.filter(el => el.archived).length;
    const activeItems = allOfCategory.length - archivedItems;
    categoriesList.push(new Condition(item, activeItems, archivedItems));
  });
  return categoriesList;
};

export function timeMark() {
  const time = new Date().toString().split(' ');
  return `${time[1]} ${time[2]}, ${time[3]}`;
};

const deleteZerro = (str) => str.replace(/^0+/, '');

export function getDates(start, end) {
  const s = start.split('-').map(el => deleteZerro(el)).reverse().join('/');
  const e = end.split('-').map(el => deleteZerro(el)).reverse().join('/');
  return [s, e];
};

const addZerro = (str) => str.length === 1 ? '0' + str : str;

export function getDate(strDate) {
  return strDate.split('/').map(el => addZerro(el)).reverse().join('-');
};

export class NewNote {
  constructor(category, name, content, created, dates) {
    this.id = Date.now();
    this.category = category;
    this.name = name;
    this.content = content;
    this.created = created;
    this.dates = dates;
    this.archived = false;
  }
};

export const getSring = (content) => {
  if(Array.isArray(content)) {
    return content[0].length && content[1].length ? content.join(' - ') : content.join('');
  } else {
    return content;
  }
};