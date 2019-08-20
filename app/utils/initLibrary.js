import getAssets from './getAssets';
import getMetadata from './getMetadata';

const initLibrary = async (libraryPath) => {
  const bookFiles = await getAssets(libraryPath);
  if (bookFiles) {
    // Just to keep track of efficiency
    // This is pretty slow with a lot of files...
    const startTime = Date.now();
    const allMetadata = await Promise.all(
      bookFiles.epub.map(book => getMetadata(book)),
    );
    const totalTime = Date.now() - startTime;
    console.log(totalTime, allMetadata);
  }

  return bookFiles;
};

export default initLibrary;
