/**
 * This file doesn't actually get run, just linted.
 */
import path from 'path';

// Verifying it's ok without dangling comma
const files = {
  base: 'asdf/asdf.txt',
  some: 'some/file.txt'
};

let spur;

if (spur == null) {
  console.log('File 1:', path.join('some/other/path/', files.base));
}
