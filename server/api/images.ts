/*
**
 * Define a serverless function using the Vite framework
 * @author Puji Ermanto <pujiermanto@gmail.com> | DigySans
*/

import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  const directoryPath = path.join(process.cwd(), 'public', 'images', 'about');

  // Periksa apakah folder ada
  if (!fs.existsSync(directoryPath)) {
    return {
      statusCode: 404,
      message: 'Folder tidak ditemukan',
    };
  }

  const files = fs.readdirSync(directoryPath);

  const images = files
    .filter((file) => /\.(jpe?g|png|gif)$/i.test(file))
    .map((file) => `/images/about/${file}`);

  return images;
});
