import recursive from 'recursive-readdir';
import path from 'path';

const getAssets = async () => {
  const formats = ['epub', 'mobi', 'pdf'];
  // const fileRegex = new RegExp(`${formats.join('|')}$`);
  const allFiles = await recursive(
    path.resolve(process.env.HOME, 'Calibre Library'),
  );

  return formats.reduce((acc, format) => ({
    ...acc,
    [format]: allFiles.filter(file => new RegExp(`\\.${format}$`).test(file)),
  }), {});
};

export default getAssets;
