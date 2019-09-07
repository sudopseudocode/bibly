import Dexie from 'dexie';

const db = new Dexie('bibly_local');

db.version(1).stores({
  books: 'id, title, *author, *collections, *tags, epubFile',
});

export default db;
