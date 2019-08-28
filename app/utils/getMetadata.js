import epub from 'epubjs';

const getEpubMetadata = async (filePath, libraryPath) => {
  const book = epub(filePath);
  const metadata = await book.loaded.metadata;

  // book.destroy();
  return {
    epubFile: filePath.replace(libraryPath, ''),
    author: metadata.creator,
    title: metadata.title,
    publisher: metadata.publisher,
    identifier: metadata.identifier,
    description: metadata.description,
  };
};

export default getEpubMetadata;
