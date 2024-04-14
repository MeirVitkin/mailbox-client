import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { EmailsList } from '../../components/EmailsList'
import { Login } from '../../components/Login';
import DataContext from '../../dataContext/UseContex';


export const EmailsListLayout = () => {
  const { user, setUser } = useContext(DataContext);

  if (user)
    return (
      <>
        <EmailsList />
        <Outlet />
      </>
    )
  else
    return(
      <Login/>
    )
}
