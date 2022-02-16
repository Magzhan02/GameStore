import React from "react"
import {Routes,Route} from "react-router-dom";

import Header from "./components/Header/Header";

import { Home,Cart,Favorite } from './pages'

function App() {
  const [search,setSearch] = React.useState('');

  const searchInput = (e) =>{
    setSearch(e.target.value)
  }

  return (
   <div className='wrapper'>
   <Header searchInput={searchInput} search={search}/>
   <Routes>
      <Route path="/" element={<Home search={search}/>}/>
      <Route path="/cart" element={<Cart search={search} />} />
      <Route path="/favorite" element={<Favorite search={search}/>} />
   </Routes>
   </div>
  );
}

export default App;
 