import axios from 'axios'
import { BASE_API } from '../../globals/constants'
const login = async (result) => {
  try {
    return await axios({
      method: 'get',
      url: BASE_API + '/azure-login',
      headers: {
        'Ms-Authorization': result.accessToken,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const getDiploma = async (current, type) => {
  try {
    return await axios({
      method: 'get',
      url: BASE_API + `/diplomas?rank=${current}&type=${type}`,
      headers: {
        'Ms-Authorization': JSON.parse(localStorage.getItem('authData')).accessToken,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const createDiploma = async (data) => {
  try {
    return await axios({
      method: 'post',
      url: BASE_API + `/diplomas`,
      headers: {
        'Ms-Authorization': JSON.parse(localStorage.getItem('authData')).accessToken,
        'Content-Type': 'multipart/form-data',
      },
      data: data,
      maxBodyLength: Infinity,
    })
  } catch (error) {
    console.log(error)
  }
}
export const homeService = {
  login,
  getDiploma,
  createDiploma,
}
