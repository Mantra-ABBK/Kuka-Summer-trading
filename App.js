import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Order from "./Pages/Order.js";
import Menu from "./Pages/Menu.js";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/"  exact element={<Navbar/>}>
          <Route index element ={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Menu" element={<Menu/>}></Route>
          <Route path="/Order" element={<Order/>}></Route>
        </Route>
       
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
