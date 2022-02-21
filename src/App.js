import React from "react"
import { Routes,Route,Navigate } from "react-router-dom";

import Header from "./components/Header/Header";

import { Home, Cart, Favorite, Auth } from './pages'
import useAuth from "./Hooks/useAuth";

function App() {
  const [search,setSearch] = React.useState('');

  const searchInput = (e) =>{
    setSearch(e.target.value)
  }

  const { isAuth } = useAuth();

  return (
   <div className='wrapper'>
   <Header searchInput={searchInput} search={search}/>
      <Routes>
        <Route path="/" element={<Home search={search}/>}/>
        <Route path="cart" element={<Cart search={search} />} />
        {isAuth ? <Route path="favorite" element={<Favorite search={search}/>}/>
                : <Route path="*" element={<Navigate to="user"/>}/>
        }
        <Route path="user" element={<Auth/>} />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
   </div>
  );
}

export default App;
 