class Condition {
  constructor(noteCategory, active, archived) {
    this['note category'] = noteCategory;
    this.active = active;
    this.archived = archived;
  }
}

export function notesConditionList(categories, notes) {
  const categoriesList = [];
  categories.forEach(item => {
    const allOfCategory = notes.filter(el => el.category === item);
    const archivedItems = allOfCategory.filter(el => el.archived).length;
    const activeItems = allOfCategory.length - archivedItems;
    categoriesList.push(new Condition(item, activeItems, archivedItems));
  });
  return categoriesList;
}