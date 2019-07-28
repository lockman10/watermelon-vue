import axios from 'axios' // 引入axios
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_URL, // url = base url + request url
  // withCredentials: true
  // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  // do something before request is sent
  config => {
    return config
  },

  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response

    // if the custom code is not 200, it is judged as an error.
    // if (res.code !== 200) {
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
    return res
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

export default service

// get请求
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    service.post(url, data).then(
      response => {
        // console.log(response.data.code)
        resolve(response.data)
      }, err => {
        reject(err)
      }
    )
  })
}
