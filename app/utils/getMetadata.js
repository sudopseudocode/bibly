import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

const getEpubMetadata = async (filepath) => {
  const contents = await readFile(`${filepath}/content.opf`);
  console.log(contents);
};

export default getEpubMetadata;
