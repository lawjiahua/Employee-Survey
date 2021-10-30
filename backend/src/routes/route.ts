import express from 'express';
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';

interface Pair {
  question: string;
  response: string;
}

const router = express.Router();

router.post('/save-data', async (req, res, next) => {
  try {
    const database = getDatabase();
    const data = req.body as Pair[];
    await set(ref(database, `responses/${uuid()}`), data);
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
})

export default router;