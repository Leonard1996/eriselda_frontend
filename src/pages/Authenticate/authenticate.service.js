import { config } from '../../Config'

const azureLogin = async (onSuccess, publicClientApplication) => {
  try {
    const result = await publicClientApplication.loginPopup({
      scopes: config.scopes,
      prompt: 'select_account',
    })
    onSuccess(result)
  } catch (error) {
    console.log(error)
  }
}

export const authService = {
  azureLogin,
}
