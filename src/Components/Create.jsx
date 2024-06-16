import React, { useContext } from 'react'
import { useState } from 'react'
import { recipecontext } from '../Context/RecipeContext'
// import Recipe from './Recipe'
import { NavLink, useNavigate } from 'react-router-dom'
import Recipe from './Recipe'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Create = () => {
    const [name,setname]=useState('')
    const [image,setimage]=useState('')
    const [description,setdescription]=useState('')
    const [ingredients,setingredients]=useState('')
    const [instruction,setinstruction]=useState('')
    const Navigate=useNavigate()
    const [recipe,setrecipe]=useContext(recipecontext)
const submitHandler = (e) => {
  e.preventDefault();
  const id = nanoid();
  console.log(id);
  // console.log(recipe);


  const newRecipe = {id,name, image, description, ingredients, instruction };
  
  setrecipe([...recipe, newRecipe]); // Directly update the state
  console.log(recipe);

  // Save to local storage
  localStorage.setItem('recipe', JSON.stringify([...recipe, newRecipe]));
};
const Redirect=()=>{
  Navigate(-1);
}
// const redirectToSuccess = () => {
//   toast.success("Redirecting you to success page. Hold on tight!");
// }
// console.log(recipe);

  return (
    <div>
        <div className='h-[90vh] relative  flex items-center justify-center overflow-hidden'>
          <img className='absolute w-[110%] h-[140%] z-[-10]' src="https://i.pinimg.com/564x/49/3f/55/493f55c6f24d64ff5c5910dc73fecc22.jpg" alt="" />
            {/* <img className='absolute w-[110%] h-[140%] z-[-10]' src="https://i.pinimg.com/564x/6c/3f/63/6c3f63dbeca4fff8c8980011d89055e8.jpg" alt="" />  */}
    {/* form */}
      <form className='h-[80vh] w-[50%]  outline-none flex items-start  mr-20 justify-center flex-col gap-8' onSubmit={submitHandler}>
       <img className='absolute' src="" alt="" />
        <input className='w-[100%]  px-10 py-2 border-none outline-none rounded flex items-center justify-center flex-col' style={{
  boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
}}
  type="text" name="image" placeholder='Recipe Img URI' onChange={(e)=>setimage(e.target.value)} value={image} />
        <input className='w-[100%] w-[100%]  px-10 py-2  border-none outline-none rounded flex items-center justify-center flex-col ' style={{
  boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
}}  type="text" name="name"  placeholder='Enter your dish name' onChange={(e)=>setname(e.target.value)} value={name} />
        <input className='w-[100%] w-[100%] px-10 py-6 border-none outline-none rounded flex items-center justify-center flex-col ' style={{
  boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
}} type="text" name="description" placeholder='Add Description' onChange={(e)=>setdescription(e.target.value)} value={description} />
        <input className='w-[100%] w-[100%] px-10 py-2 border-none outline-none rounded flex items-center justify-center flex-col ' style={{
  boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
}} type="text" name="ingredients" placeholder='Receipe Ingredients => seperate by commas' onChange={(e)=>setingredients(e.target.value)} value={ingredients} />
        <input className='w-[100%] w-[100%] px-10 py-2 border-none outline-none rounded flex items-center justify-center flex-col '
        style={{
            boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
          }} type="text" name="instruction" placeholder='Receipe Instruction => seperated by commas' onChange={(e)=>setinstruction(e.target.value)} value={instruction} />
         <div className='w-[100%] w-[100%]  rounded flex items-right justify-end  '>
        
        
         {/* <NavLink to="/Recipe" > */}
        <button onClick={Redirect} className='px-8 py-3 bg-[#F34E4C] rounded text-white transform transition duration-300 hover:scale-105 active:scale-95 active:shadow-lg '
        style={{
            boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
          }}>Save Recipe</button>
        {/* </NavLink> */}
        </div>
        <ToastContainer />
      </form>
    {/* form ends */}
    <img src="https://i.pinimg.com/originals/93/5e/f3/935ef3e9c164fe37ddde01ccd8cec4ba.gif" alt=""  />
      </div>
    
    </div>
  )
}

export default Create
