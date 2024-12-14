/*
**
 * Define a serverless function using the Vite framework
 * @author Puji Ermanto <pujiermanto@gmail.com> | DigySans
*/


import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  const directoryPath = path.join(process.cwd(), 'public', 'images', 'gallery');

  if (!fs.existsSync(directoryPath)) {
    return {
      statusCode: 404,
      message: 'Folder tidak ditemukan',
    };
  }

  const files = fs.readdirSync(directoryPath);

  const images = files
    .filter((file) => /\.(jpe?g|png|gif)$/i.test(file))
    .map((file) => `/images/gallery/${file}`);

  const videos = files
    .filter((file) => /\.(mp4)$/i.test(file))
    .map((file) => `/images/gallery/${file}`);

  return { images, videos };
});
