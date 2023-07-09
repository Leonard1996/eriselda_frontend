import React from 'react'
import logo from '../../assets/images/logo.jpeg'
import { Typography, Button } from 'antd'
import { Context } from '../../context/LanguageContext'
import language from '../../assets/i18n/language'
import { PublicClientApplication } from '@azure/msal-browser'
import { config } from '../../Config'
import { authService } from './authenticate.service'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography
const publicClientApplication = new PublicClientApplication({
  auth: {
    clientId: config.appId,
    redirectUri: config.redirectUri,
    authority: config.authority,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true,
  },
})

export default function Authenticate() {
  const { state } = React.useContext(Context)
  const navigate = useNavigate()
  const onSuccess = (result) => {
    navigate('/home', {
      state: result,
    })
  }

  const handleAuthClick = () => {
    authService.azureLogin(onSuccess, publicClientApplication)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        flexDirection: 'column',
      }}
    >
      <div>
        <img src={logo} height={150} width="auto" />
      </div>
      <div>
        <Title>{language.loginTitle[state.language]}</Title>
      </div>
      <div>
        <Button type="primary" size="large" onClick={handleAuthClick}>
          {language.loginButton[state.language]}
        </Button>
      </div>
    </div>
  )
}
