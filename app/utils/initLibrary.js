import generateId from 'uuid/v4';
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
  setState({ books: initDB, loading: false });
  console.log(`Updated state with initial books from DB: ${Date.now() - start}ms`);

  // Find filePaths not already in DB
  let bookCount = 0;
  const booksToAdd = filePaths.filter((filePath) => {
    const foundMatch = initDB.some((book) => (
      book.epubFile === filePath.replace(libraryPath, '')
    ));
    return !foundMatch;
  });
  if (booksToAdd.length > 0) {
    setState({ updateProgress: 0 });
  } else {
    // We can skip the rest, its only for adding new books
    return;
  }

  // Fetch metadata for these books
  const setProgress = () => {
    bookCount += 1;
    setState({
      updateProgress: (bookCount / booksToAdd.length) * 100,
    });
  };
  const metadataPromises = booksToAdd.map((filePath) => (
    getMetadata(filePath, libraryPath).then((metadata) => {
      // Update status progress
      setProgress();
      return {
        id: generateId(),
        ...metadata,
      };
    })
  ));
  const metadataToAdd = await Promise.all(metadataPromises);
  console.log(`Finished reading metadata: ${Date.now() - start}ms`);

  // Add new books to DB
  await db.table('books').bulkAdd(metadataToAdd);
  console.log(`Finished adding records to DB: ${Date.now() - start}ms`);
  // Remove updating status bar
  setState({ books: [...initDB, ...metadataToAdd], updateProgress: null });
};

export default initLibrary;
