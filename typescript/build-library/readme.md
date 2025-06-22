```{
  "name": "my-lib",
  "version": "1.0.0",
  "description": "train myself how to create a new library in different file system",
  "main": "./dist/index.js",
  "types": "./dist/types/index.d.ts",
  "files": [
    "./dist"
  ],
  "license": "MIT",
  "scripts": {
    "build": "tsc"
  }
}
```

I have some notes here about how to publish, export and use the library files through npm:

After the library has been downloaded from npm:

**main:**
* it represents the entry point to consume the library, from which file I can import the functionality of the library.

**types:**
* it represents the path where to find all types of the library, and it helps giving type safety and autocomplete for the IDE.


**files:**
* it represents whitelist of files that should be published to npm, instead of publishing the whole directory.
