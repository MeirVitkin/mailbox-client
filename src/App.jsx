import { Route, Routes } from "react-router-dom";
import { NavMainLayout } from "./layouts/NavMainLayout/index.jsx";
import { EmailNavLayout } from "./layouts/EmailNavLayout/index.jsx";
import { EmailsListLayout } from "./layouts/EmailsListLayout.jsx/index.jsx";
import { EmailPage } from "./pages/EmailPage/index.jsx";
import { NewMessagePage } from "./pages/NewMessagePage/index.jsx";
import DataContext from "./dataContext/UseContex.jsx";
import { useState } from "react";
import { Popup } from "./components/Popup/index.jsx";
import { Login } from "./components/Login/index.jsx";


function App() {
  const [isLog, setIsLog] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popupValue, setPopupValue] = useState();

  return (
    <div style={{ display: 'flex', height: '95vh', width: '100vw' }}>
      <DataContext.Provider value={{ isLog, setIsLog, setPopup, popup, popupValue, setPopupValue }} >
        {popup && (
          <Popup />
        )}

        {!isLog ? (
          <Login />
        ) : (


          <Routes>
            <Route path="/" element={<NavMainLayout />} />

            <Route element={<NavMainLayout />}>
              <Route path="messages" element={<EmailNavLayout />}>
                <Route path=":emailType" element={<EmailsListLayout />} >
                  <Route path=":emailId" element={<EmailPage />} />
                </Route>
                <Route path="newMessage" element={<NewMessagePage />} />
              </Route>
            </Route>
          </Routes>
        )}
      </DataContext.Provider>









    </div >
  )
}

export default App
