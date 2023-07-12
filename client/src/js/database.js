import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('jate')) {
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      } else {
        console.log('jate database already exists');
      }
    },
  });

let db;

const ensureDb = async () => {
  if (!db) {
    db = await initdb();
  }
};

// Save some content to the editor
export const putDb = async (content) => {
  await ensureDb();
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.put({ content, id: 1 }); // Assuming only one item is stored and it always has id: 1
  await tx.done;
};


// Get all the content from the database
export const getDb = async () => {
  await ensureDb();
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const items = await store.getAll();
  await tx.done;
  return items;
};

ensureDb();
