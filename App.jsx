import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import ClientRegistration from './ClientRegistration';
import Login from './Login'
import AdminRegistration from './AdminRegistration';

function App() {

  return (
   <div>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/> }></Route>
      <Route path="/admin" element={<AdminRegistration/> }></Route>
      <Route path="/client" element={ <ClientRegistration />}></Route>
    </Routes>
   </BrowserRouter>

   </div>
  )
}

export default App
