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

export function getDates(start, end) {
  const s = start.split('-').reverse().join('/');
  const e = end.split('-').reverse().join('/');
  return [s, e];
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