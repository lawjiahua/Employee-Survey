import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_GATEWAY = process.env.REACT_APP_API_GATEWAY;

export async function postResponses(questions, responses) {
    try {
      const data = questions.map((q, idx) => {
        return {
          question: q,
          response: responses[idx]
        }
      })

      data.date = new Date();
      await axios.post(`${API_GATEWAY}/save-data`, data);
    } catch (error) {
      console.log(error);
    }
}