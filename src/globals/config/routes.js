import React from 'react'
import Authenticate from '../../pages/Authenticate/Authenticate'
import Home from '../../pages/Home/Home'
import Document from '../../pages/Document/Document'
import SearchPage from '../../pages/Search.js/SearchPage'

export const routes = [
  {
    name: 'Authenticate',
    path: '/',
    private: false,
    element: <Authenticate />,
  },
  {
    name: 'Home',
    path: '/home',
    private: false,
    element: <Home />,
  },
  {
    name: 'Document',
    path: 'home/document',
    private: false,
    element: <Document />,
  },
  {
    name: 'Search Page',
    path: '/search',
    private: false,
    element: <SearchPage />,
  },
]
