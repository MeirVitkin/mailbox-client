import React from 'react'
import { NavMain } from '../../components/Navmain'
import { Outlet } from 'react-router'

export const NavMainLayout
 = () => {
  return (
    <>
    <NavMain/>
    <Outlet/>
    </>
  )
}
