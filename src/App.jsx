
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Recipe from './Components/Recipe'
import Create from './Components/Create'
import Details from './Components/Details'
import Update from './Components/Update'
import { useEffect } from 'react'
const App = () => {
  useEffect(()=>{

  },[])
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Recipe" element={<Recipe />} ></Route>
        <Route path="/About" ></Route>
        <Route path="/Contact" ></Route>
        <Route path="/Create"  element={<Create />}></Route>
        <Route path="/Recipe/:id"  element={<Details />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </div>
  )
}

export default App
