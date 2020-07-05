import React, { useContext } from 'react'

import { AuthRoutes } from './authRoutes'
import { UsersRoutes } from './usersRoutes'

import { AuthContext } from '../context/AuthContext'

export const Route = () => {

  const authContext = useContext(AuthContext)
  const { isAuthenticated } = authContext

  return isAuthenticated ? <UsersRoutes /> : <AuthRoutes />
}