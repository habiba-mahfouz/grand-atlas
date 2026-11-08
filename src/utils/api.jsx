import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.DEV
    ? 'https://white-seahorse-266682.hostingersite.com/api/v1/'
    : '/api/v1/'
})

export default api
