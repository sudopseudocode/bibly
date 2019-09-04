# Bibly

Bibly is an e-book library manager inspired by Calibre. It is an Electron app designed to be touch screen friendly. Support for all of Calibre's features are on the roadmap.

## Getting Started

```
npm install
```

Then run

```
npm run dev
```

This will run two processes simultaneously:

- A webpack-dev-server with hot reloading for the app's UI
- The electron main process

In development mode, electron main process will connect to the webpack-dev-server. For prod, the main process loads with minified files.

## Supported Features

- At the moment, only EPUB format is supported
- Table or Cover art views
- Ability to group books into "collections"
- Ability to search books from library
- Ability to edit metadata & cover art for each book
- Ability to organize file structure of library, similar to Calibre

## Roadmap

- Resize, reorder and save columns in table view
- Fetch book metadata from Goodreads or other APIs
- Ability to convert between EPUB, MOBI and PDF
- Ability to read CBR and CBZ comic book files
- Ability to make annotations
- Sync library & reading progress & annotations with S3, Dropbox or Google Drive
- Night mode when reading
- Add built in dictionary when reading

Anything missing from this roadmap? Feel free to open an issue. We are constantly working on improving this app, so that you don't have to keep using Calibre. All features from Calibre are intended to be implemented in this app.
