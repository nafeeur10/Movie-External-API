import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_POSTER_URL,
    timeout: 5000 // request timeout
  })

// request interceptor
service.interceptors.request.use(config => {
      config.url.startsWith(process.env.VUE_APP_BASE_POSTER_URL)
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