import { NavLink } from "react-router-dom"
const Nav = () => {
  return (
    <div className='h-[10vh] flex items-center text-white  bg-[#F34E4C] justify-center gap-10'>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/Recipe">Recipes</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </div>
  )
}

export default Nav
