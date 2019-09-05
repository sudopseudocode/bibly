import fs from 'fs';
import util from 'util';
import JSZip from 'jszip';
import { xml2js as convert } from 'xml-js';

const readFile = util.promisify(fs.readFile);

// Easily get nested object values
const getValue = (obj, keys) => (
  keys.reduce((acc, key) => (acc && acc[key]) ? acc[key] : '', obj)
);

const getEpubMetadata = async (filePath, libraryPath) => {
  // Load the epub file
  const epubFile = await readFile(filePath);
  const epubContents = await JSZip.loadAsync(epubFile);

  // Parse container XML to get content.opf filepath
  const containerFile = epubContents.file(/container\.xml$/i)[0];
  const containerXml = containerFile
    ? await containerFile.async('text')
    : '';
  const parsedContainer = convert(containerXml, { compact: true });
  const contentOpfPath = getValue(parsedContainer, [
    'container',
    'rootfiles',
    'rootfile',
    '_attributes',
    'full-path',
  ]);

  // Parse metadata in content.opf 
  const contentFile = epubContents.file(contentOpfPath);
  const contentXml = contentFile
    ? await contentFile.async('text')
    : '';
  const parsedXml = convert(contentXml, { compact: true });

  // Extracting values
  const manifest = (getValue(parsedXml, ['package', 'manifest', 'item']) || [])
    // eslint-disable-next-line no-underscore-dangle
    .map((item) => item._attributes);
  const metadata = getValue(parsedXml, ['package', 'metadata']) || {};
  const author = Array.isArray(metadata['dc:creator'])
    // TODO keep multiple authors as an array
    ? metadata['dc:creator'].map((creator) => getValue(creator, ['_text']))
      .join(', ')
    : getValue(metadata, ['dc:creator', '_text']);
  // const identifiers = metadata['dc:identifier'] || [];
  const date = getValue(metadata, ['dc:date', '_text']);
  const publisher = getValue(metadata, ['dc:publisher', '_text']);
  const genre = getValue(metadata, ['dc:subject', '_text']);
  const title = Array.isArray(metadata['dc:title'])
    ? getValue(metadata, ['dc:title', 0, '_text'])
    : getValue(metadata, ['dc:title', '_text'])

  // Obtain base64 of book cover
  const findBookCovers = manifest.filter((item) => (
    // We just want to find a image/* MIME type that has "cover" in its ID
    // We will use the first image in the array
    /cover/gi.test(item.id) && /^image\//.test(item['media-type']
  )));
  const bookCoverPath = getValue(findBookCovers, [0, 'href'])
  const coverFile = epubContents.file(bookCoverPath);
  const bookCover = coverFile
    ? await coverFile.async('base64')
    : '';

  // This object (as-is) will be saved to the DB
  return {
    epubFile: filePath.replace(libraryPath, ''),
    bookCover,
    date,
    genre,
    author,
    title,
    publisher,
    // description: '',
  };
};

export default getEpubMetadata;
