import axios from 'axios'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_MOVIE_URL,
    params: {
      'api_key': getToken()
    },
    timeout: 5000 // request timeout
  })

// request interceptor
service.interceptors.request.use(config => {
      config.url.startsWith(process.env.VUE_APP_BASE_MOVIE_URL);
      return config
    },
    error => {
      console.log(error) // for debug
      return Promise.reject(error)
    }
)
  
  // response interceptor
service.interceptors.response.use(
    response => {
      const res = response.data
        return res
    },
    error => {
      alert("Something went wrong! Please try again.")
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
)
  
export default service