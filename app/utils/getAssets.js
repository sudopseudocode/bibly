import recursive from 'recursive-readdir';

const getAssets = async (libraryPath) => {
  const formats = ['epub', 'mobi', 'pdf'];
  // const fileRegex = new RegExp(`${formats.join('|')}$`);

  const allFiles = await recursive(libraryPath);

  return formats.reduce((acc, format) => ({
    ...acc,
    [format]: allFiles.filter(file => new RegExp(`\\.${format}$`).test(file)),
  }), {});
};

export default getAssets;
