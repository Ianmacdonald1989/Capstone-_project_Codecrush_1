import React from 'react'
import { UserAuth } from '../context/AuthContext'

export const ProfileUserName = () => {

    const{user} = UserAuth();

  return (
    <>
    {!user ? (<p> You are logged out</p>) : (
        <p className='font-semibold text-gray-700 dark:text-slate-700'>{user[0].username}{' '}</p>
    )}
    </>
  )
}
