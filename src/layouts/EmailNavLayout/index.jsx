import React from 'react'
import { EmailsNav } from '../../components/EmailsNav'
import { Outlet } from 'react-router'

export const EmailNavLayout
 = () => {
  return (
    <>
    <EmailsNav/>
    <Outlet/>
    </>
  )
}
