import  { createContext, useEffect, useState } from 'react'

export const recipecontext=createContext(null)
const RecipeContext = (props) => {

    const [recipe,setrecipe]=useState([])
// useEffect(()=>{
// setrecipe(JSON.parse(localStorage.getItem('recipe')))
// },[])
useEffect(() => {
  try {
    const storedRecipe = JSON.parse(localStorage.getItem('recipe'));
    if (Array.isArray(storedRecipe)) {
      setrecipe(storedRecipe);
    } else {
      console.warn('Stored recipe data is not an array:', storedRecipe);
    }
  } catch (error) {
    console.error('Error parsing recipe data:', error);
  }
}, []);

// console.log(recipe);
  return (
    <div>
      <recipecontext.Provider value={[recipe,setrecipe]}>
        {props.children}
      </recipecontext.Provider>
    </div>
  )
}

export default RecipeContext
