import React from "react"
import {Routes,Route} from "react-router-dom";

import Header from "./components/Header/Header";

import { Home,Cart,Favorite } from './pages'

function App() {
  
  return (
   <div className='wrapper'>
   <Header/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/favorite" element={<Favorite/>} />
   </Routes>
   </div>
  );
}

export default App;
 