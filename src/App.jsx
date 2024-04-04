import { Route, Routes } from "react-router-dom";
import { NavMainLayout } from "./layouts/NavMainLayout/index.jsx";
import { EmailNavLayout } from "./layouts/EmailNavLayout/index.jsx";
import { EmailsListLayout } from "./layouts/EmailsListLayout.jsx/index.jsx";
import { EmailPageLayout } from "./layouts/EmailPageLayout/index.jsx";



function App() {
  return (
    <div style={{ display: 'flex', height:'95vh' }}>

      <Routes>
        <Route path="/" element={<NavMainLayout/>} />
        <Route element={<NavMainLayout/>}>
          <Route path="messages" element={<EmailNavLayout/>}>
            <Route path=":emailType" element={<EmailsListLayout/>} >
              <Route path=":emailId" element={<EmailPageLayout />} />
            </Route>
          </Route>
        </Route>
      </Routes>


      
      
      


    </div >
  )
}

export default App
