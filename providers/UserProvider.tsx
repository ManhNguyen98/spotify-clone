'use client'

import { MyUserProvider } from '@/hooks/useUser'

interface UserProviderProps {
  children: React.ReactNode
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <MyUserProvider>{children}</MyUserProvider>
}

export default UserProvider
