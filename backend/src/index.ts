import cors from "cors";
import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv';
import FirebaseRouter from './routes/route';
import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';

dotenv.config();

const app = express();
const port: number = 5000;
const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSANGING_SENDER_ID,
    appId: process.env.APP_ID
}

export let database: Database;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use('/', FirebaseRouter);

app.listen(port, () => {
  const firebaseApp = initializeApp(firebaseConfig);
  database = getDatabase(firebaseApp);
  console.log(`Server listening on port ${port}`);
})
