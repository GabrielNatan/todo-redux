import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "./pages/Login"
import { PrivateRoutes } from "./PrivateRoutes"
import "./styles.css"
function App() {
 
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/*" element={<PrivateRoutes />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;