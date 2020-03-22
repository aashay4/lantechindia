import axios from 'axios';
const BASE_URL = 'https://lantechinfocom.co.in:5000';

export function createNote(data) {
        return axios.post(`${BASE_URL}/api/note/create`,
        { networkmigra: data.networkmigra, email: data.email, phone: data.phone, question: data.question }
      ) .then(response => {
        console.log(response);
      })
      .catch(err => Promise.reject(err.message));
}
