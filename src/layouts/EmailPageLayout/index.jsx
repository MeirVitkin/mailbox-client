import React from 'react'
import { EmailPage } from '../../pages/EmailPage'
import { Outlet } from 'react-router'

export const EmailPageLayout
 = () => {
  return (
    <>
        <EmailPage/>
        <Outlet/>
    </>
  )
}
