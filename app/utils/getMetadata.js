import epub from 'epubjs';

const getEpubMetadata = async (filepath) => {
  const book = epub(filepath);
  const metadata = await book.loaded.metadata;

  // book.destroy();
  return metadata;
};

export default getEpubMetadata;
