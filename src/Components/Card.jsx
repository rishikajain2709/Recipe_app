import React from 'react'
import { Link } from 'react-router-dom';
const Card = (props) => {
    const {recipe}=props
    console.log(recipe);
    const id=recipe.id;
  return (
    
    <div>
      <Link to={`/recipe/${id}`}>
      <div className='h-[45vh] w-[20vw] mt-10 ml-2 relative bg-transparent rounded flex items-center justify-center overflow-auto flex-col g-10 rounded-xl '
       style={{
        boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
      }}>
         <div className='w-[60%] h-[60%] top-[-20%]  absolute rounded-[50%] bg-red-500 overflow-hidden'>
         <img  className='w-[100%] h-[100%] ' src={recipe.image} alt=""  />
         </div>
         <h1 className='text-4xl text-center pt-20 w-[80%]'>{recipe.name}</h1>
         
        
        <p className='text-center pt-2 w-[80%]'>{recipe.description}</p>
      </div>
      </Link>
    </div>
  )
}

export default Card
