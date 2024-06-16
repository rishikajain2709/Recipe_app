import  { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { recipecontext } from '../Context/RecipeContext'
import { useSelector } from 'react-redux'
import Card from './Card'
const Recipe = () => {
  const [recipe,setrecipe]=useContext(recipecontext)
    console.log(recipe);

  // const {recipes}=useSelector((state)=>state.recipeReducer)
  // const {pathname}=useLocation()
  return (
    <div>
            <img className='absolute w-[100%] h-[100%] z-[0]' src="https://i.pinimg.com/564x/49/3f/55/493f55c6f24d64ff5c5910dc73fecc22.jpg" alt=""  />

    <div className='relative h-[100vh]  bg-red-100'>
      <img className='absolute w-[400px] h-[500px] top-[5%] right-[18%] ' src="../f75b34ebd94a77ef2134369ca6b155c0-removebg-preview.png" alt=""  />
      <img className='absolute w-[500px] h-[500px] top-[25%] right-[25%]' src="../4b18d34d8b2bf8c9b4e5346bf81e9e7e-removebg-preview.png" alt=""  />
      <img className='absolute w-[600px] h-[500px] top-[30%] right-[0%]' src="../7c916a3268f3d5f91a59bc8e99f08144-removebg-preview.png" alt=""  />
       
       <div className=' w-[40%] ml-[2%] top-[20%] absolute h-[60vh] flex items-center justify-center flex-col gap-10 '>
        <h1 className='text-[55px] text-shadow-md leading-[60px] text-bold px-10 text-shadow-3xl'>Craft culinary magic with your own unique recipe twist.</h1>
      <p className='px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore explicabo a architecto culpa deserunt porro eos suscipit quia quod quo!</p>
       <button className='px-8 py-2 ml-[-59%] bg-[#F34E4C] rounded text-white transform transition duration-300 hover:scale-105 active:scale-95 active:shadow-lg'
        style={{
          boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
        }}> <Link to='/Create'>Create Recipe</Link></button>
       </div>
       </div>
    <div className='w-[100%] relative overflow-hidden h-[100vh] bg-red-100 flex items-start justify-start gap-10  overflow-auto z-[0%]'>
         {/* <img  className='absolute w-[100%]  h-[100%]  object-cover' src="https://i.pinimg.com/564x/6c/3f/63/6c3f63dbeca4fff8c8980011d89055e8.jpg" alt=""  /> */}
     {/* <img src="" alt="" srcset="" /> */}
     {recipe.map(recipe =>
      <Card key={recipe.id} recipe={recipe} setrecipe={setrecipe} />
      
    )}
    </div>
    </div>

  )
}

export default Recipe
