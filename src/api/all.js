import $axios from './index'

const setFormData = (data) => {
  if (typeof data !== 'object' || !Object.hasOwn(data)) return
  const formData = new FormData()
  for (let prop in data) {
    formData.append(prop, data[prop])
  }
  return formData
}

// home

// user
export const login = (data) => {
  return $axios({
    method: 'POST',
    url: '/login',
    data: setFormData(data)
  })
}

export const updateUserInfo = (data) => {
  return $axios({
    method: 'POST',
    url: '',
    data: setFormData(data)
  })
}

// admin



// dynamic



// circle


// resource

// comment