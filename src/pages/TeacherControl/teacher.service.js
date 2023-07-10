import axios from 'axios'
import { BASE_API } from '../../globals/constants'

export const getDiplomasForTeacher = async (page) => {
  try {
    return await axios({
      method: 'get',
      url: BASE_API + `/diplomas-for-teachers?page=${page}`,
      headers: {
        'Ms-Authorization': JSON.parse(localStorage.getItem('authData')).accessToken,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
export const homeService = {
  getDiplomasForTeacher,
}
