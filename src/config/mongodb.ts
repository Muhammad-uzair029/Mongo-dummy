import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_CONNECTION_STRING = 'mongodb+srv://muzairyousaf029:uzairandroid2@cluster0.yoow5sc.mongodb.net/test';
// mongodb+srv://muzairyousaf029:<password>@cluster0.yoow5sc.mongodb.net/test

/**
 * make connection with mongodb
 */
export function connectMongoDB(): void {
  mongoose.connect(DATABASE_CONNECTION_STRING);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Unable to connect with database'));
  db.once('open', () => {
    console.log('Successfully connect with database.');
  });
}
