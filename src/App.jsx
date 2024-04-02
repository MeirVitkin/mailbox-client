
import { NavMain } from "./components/Navmain";

import { EmailsList } from "./components/EmailsList";
import { EmailNav } from "./components/EmailsNav";
import { EmailPage } from "./pages/EmailPage";



function App() {
  return (
    <div style={{ display: 'flex',  height:'100vh' }}>
            <NavMain/>
            <EmailNav/>
            <EmailsList />
            <EmailPage/>
      
      
    </div>
  )
}

export default App
