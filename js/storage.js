export const topTableTitles = [
  'Name',
  'Created',
  'Category',
  'Content',
  'Dates'
];

export const bottomTableTitles = [
  'Note Category',
  'Active',
  'Archived'
];

export const categories = [
  'Task',
  'Random Thought',
  'Idea',
  'Quote',
];

export const icons = {
  ['Task']: 'shopping-cart',
  ['Random Thought']: 'random',
  ['Idea']: 'lightbulb-o',
  ['Quote']: 'quote-right',
};

class Note {
  constructor(id, category, name, content, created, dates, archived) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.content = content;
    this.created = created;
    this.dates = dates;
    this.archived = archived;
  }
};

export const notes = [
  new Note(1, 'Task', 'Shopping list', 'Tomatoes, bread', 'April 20, 2021', [], false),
  new Note(2, 'Random Thought', 'The theory of evolution', 'The evolution theory', 'April 27, 2021', [], false),
  new Note(3, 'Idea', 'New Feature', 'Implement new feature', 'May 05, 2021', ['3/5/2021', '5/5/2021'], false),
  new Note(4, 'Quote', 'William Gaddis', 'Power doesn\'t corrupt people, people corrupt power.', 'May 07, 2021', [], false),
  new Note(5, 'Task', 'Books', 'The Learn Startup', 'May 15, 2021', [], false),
  new Note(6, 'Task', 'Cat', 'Buy cat\'s food', 'Sep 22, 2022', [], false),
  new Note(7, 'Quote', 'Gandhi', 'Be the change that you wish to see in the world', 'Sep 23, 2022', [], false),
];
