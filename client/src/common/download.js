import fs from 'fs-extra';
import http from 'http';
import https from 'https';

import { noop } from './util';

const getResponse = (url, writeStream) => {
  return new Promise((resolve, reject) => {
    const requester = url.startsWith('https:') ? https : http;

    const request = requester.get(url, response => {
      if (response.statusCode === 200) {
        resolve(response);
      } else if (
        [301, 302].includes(response.statusCode) &&
        response.headers.location
      ) {
        requester.get(response.headers.location, res => resolve(res));
      } else {
        reject(
          `Server responded with ${response.statusCode}: ${
            response.statusMessage
          }`,
        );
      }
    });

    if (writeStream) {
      request.on('error', error => {
        writeStream.close();
        fs.unlink(writeStream.path, noop);
        reject(error.message);
      });
    }
  });
};

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(dest);

    getResponse(url, writeStream)
      .then(response => {
        response.pipe(writeStream);

        writeStream.on('error', error => {
          writeStream.close();
          fs.unlink(dest, noop);
          reject(error);
        });

        writeStream.on('finish', () => {
          resolve();
        });
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default download;
