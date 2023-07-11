import React from 'react'
import Authenticate from '../../pages/Authenticate/Authenticate'
import Home from '../../pages/Home/Home'
import Document from '../../pages/Document/Document'
import SearchPage from '../../pages/Search.js/SearchPage'
import StudentDashboard from '../../pages/StudentControl/StudentDashboard'
import TeacherDashboard from '../../pages/TeacherControl/TeacherDashboard'
import Notification from '../../pages/Notification'

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
    private: true,
    element: <Home />,
  },
  {
    name: 'Student Control',
    path: '/student_controls',
    private: true,
    element: <StudentDashboard />,
  },
  {
    name: 'Home',
    path: '/controls',
    private: true,
    element: <TeacherDashboard />,
  },
  {
    name: 'Document',
    path: 'controls/document',
    private: true,
    element: <Document />,
  },
  {
    name: 'Search Page',
    path: '/search',
    private: true,
    element: <SearchPage />,
  },
  {
    name: 'Notification Page',
    path: '/notifications',
    private: true,
    element: <Notification />,
  },
]
