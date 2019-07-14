import recursive from 'recursive-readdir';
import path from 'path';

const getAssets = async () => {
  const formats = ['epub', 'mobi', 'pdf'];
  const fileRegex = new RegExp(`${formats.join('|')}$`);
  const allFiles = await recursive(
    path.resolve(process.env.HOME, 'Calibre Library')
  );
  const ebookFiles = allFiles.filter(file => fileRegex.test(file));

  return ebookFiles;
};

export default getAssets;
