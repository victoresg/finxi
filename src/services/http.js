import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.giphy.com/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(requestConfig => {
  return Promise.resolve(requestConfig)
})

http.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response
    return Promise.reject(error)
  }
)

export default http
