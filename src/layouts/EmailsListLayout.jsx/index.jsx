import React from 'react'
import { Outlet } from 'react-router'
import { EmailsList } from '../../components/EmailsList'

export const EmailsListLayout
 = () => {
  return (
    <>
      <EmailsList/>
      <Outlet/>
    </>
  )
}
