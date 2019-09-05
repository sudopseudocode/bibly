import getMetadata from './getMetadata';
import getAssets from './getAssets';
import db from '../contexts/db';

const initLibrary = async (libraryPath, setState) => {
  // db.table('books').clear();

  const start = Date.now();
  setState({ loading: true });

  // Get all available epub files
  const filePaths = await getAssets(libraryPath)
    .then((bookFiles) => bookFiles.epub)
    .catch(() => []);
  console.log(`Fetched filePaths for books: ${Date.now() - start}ms`);

  // Set state with initial DB
  const initDB = await db.table('books').toArray();
  setState({ books: initDB, loading: false, updating: true });
  console.log(`Updated state with initial books from DB: ${Date.now() - start}ms`);

  // Find filePaths not already in DB
  const booksToAdd = filePaths.filter((filePath) => {
    const foundMatch = initDB.some((book) => (
      book.epubFile === filePath.replace(libraryPath, '')
    ));
    return !foundMatch;
  });
  // Fetch metadata for these books
  const metadataPromises = booksToAdd.map((filePath) => getMetadata(filePath, libraryPath));
  const metadataToAdd = await Promise.all(metadataPromises);
  console.log(`Finished reading metadata: ${Date.now() - start}ms`);

  // Add new books to DB
  await db.table('books').bulkAdd(metadataToAdd);
  console.log(`Finished adding records to DB: ${Date.now() - start}ms`);

  // Get new DB
  const newDB = await db.table('books').toArray();
  console.log(`Updated state to include all books: ${Date.now() - start}ms`);
  setState({ books: newDB, updating: false });
};

export default initLibrary;
