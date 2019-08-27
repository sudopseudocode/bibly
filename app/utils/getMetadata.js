import epub from 'epubjs';

const getEpubMetadata = async (filepath) => {
  const book = epub(filepath);
  const metadata = await book.loaded.metadata;

  // book.destroy();
  return {
    epubFile: filepath,
    author: metadata.creator,
    title: metadata.title,
    publisher: metadata.publisher,
    identifier: metadata.identifier,
    description: metadata.description,
  };
};

export default getEpubMetadata;
