import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

request.interceptors.request.use((config) => {
  nprogress.start()
  return config
})

request.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, (error) => {
  return Promise.reject(error)
})

export const getNavLinks = () => request({ url: '/navLinks' })
export const getShoes = () => request({ url: '/shoes'})
export const getStatistics = () => request({ url: '/statistics' })
export const getProducts = () => request({ url: '/products' })
export const getServices = () => request({ url: '/services' })
export const getReviews = () => request({ url: '/reviews' })
export const getFooterLinks = () => request({ url: '/footerLinks' })
export const getSocialMedia = () => request({ url: '/socialMedia' })