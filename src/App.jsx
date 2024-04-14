import { Navigate, Route, Routes } from "react-router-dom";
import { NavMainLayout } from "./layouts/NavMainLayout/index.jsx";
import { EmailNavLayout } from "./layouts/EmailNavLayout/index.jsx";
import { EmailsListLayout } from "./layouts/EmailsListLayout.jsx/index.jsx";
import { EmailPage } from "./pages/EmailPage/index.jsx";
import { NewMessagePage } from "./pages/NewMessagePage/index.jsx";
import DataContext from "./dataContext/UseContex.jsx";
import { useEffect, useState } from "react";
import { Popup } from "./components/Popup/index.jsx";
import { Login } from "./components/Login/index.jsx";
import { Register } from "./pages/Register/index.jsx";


function App() {
  const [user, setUser] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => { <Navigate to='/login' /> }, [])



  return (
    <div style={{ display: 'flex', height: '95vh', width: '100vw' }}>
      <DataContext.Provider value={{ user, setUser, setPopup, popup }} >
        {popup && (
          <Popup />
        )}

            <Routes>
              <Route index element={<Navigate to='login' />} />
              <Route path="register" element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route path="home" element={<NavMainLayout />} />
              <Route element={<NavMainLayout />}>
                <Route path="home/messages" element={<EmailNavLayout />}>
                  <Route path=":emailType" element={<EmailsListLayout />} >
                    <Route path=":emailId" element={<EmailPage />} />
                  </Route>
                  <Route path="newMessage" element={<NewMessagePage />} />
                </Route>
              </Route>
              <Route path="home/timer" element={<NavMainLayout />} />
              <Route path="home/task" element={<NavMainLayout />} />
              <Route path="home/eye" element={<NavMainLayout />} />
              <Route path="home/graph" element={<NavMainLayout />} />
              <Route path="home/video" element={<NavMainLayout />} />
            </Routes>
      </DataContext.Provider>









    </div >
  )
}

export default App
