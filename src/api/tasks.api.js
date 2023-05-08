import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8081';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const greetingrequest = async () =>
    await axios.get('http://localhost:8081/api/greeting');

export const createTaskRequest = async (task) =>
    await axios.post('http://localhost:8081/api/task', task);