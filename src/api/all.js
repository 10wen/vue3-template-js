import $axios from './index'

export const login = (data) => {
  return $axios({
    method: 'POST',
    url: '/login',
    data
  })
}
