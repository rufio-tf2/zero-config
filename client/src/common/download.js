import decompress from 'decompress';
import fs from 'fs-extra';
import http from 'http';
import https from 'https';
import path from 'path';
import url from 'url';

const getProtocolFromUri = uri => {
  const { protocol } = url.parse(uri);

  if (protocol) {
    return protocol.slice(0, -1);
  }

  return null;
};

const getResponse = (url, file) => {
  return new Promise((resolve, reject) => {
    const requester = url.startsWith('https:') ? https : http;
    var request = requester.get(url, response => {
      if (response.statusCode === 200) {
        resolve(response);
      } else if (
        [301, 302].indexOf(response.statusCode) !== -1 &&
        response.headers.location
      ) {
        requester.get(response.headers.location, response => resolve(response));
      } else {
        reject(
          `Server responded with ${response.statusCode}: ${
            response.statusMessage
          }`,
        );
      }
    });

    if (file) {
      request.on('error', err => {
        file.close();
        fs.unlink(file.path, () => {});
        reject(err.message);
      });
    }
  });
};

const download = (uri, output, { extract }) => {
  const protocol = getProtocolFromUri(uri);
};

// const download = async (url, dest, { extract }) => {
//   return async (resolve, reject) => {
//     const file = fs.createWriteStream(dest);

//     const response = await getResponse(url, file);

//     if (extract) {
//       decompress(response, path.dirname(dest)).then(files => {
//         console.log('decompressed files', files);
//         response.pipe(files);
//       });
//     } else {
//       response.pipe(file);
//     }

//     file.on('finish', () => {
//       resolve();
//     });

//     file.on('error', err => {
//       file.close();
//       fs.unlink(dest, () => {});
//       reject(err.message);
//     });
//   };
// };

export default download;
