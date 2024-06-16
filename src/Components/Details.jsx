import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {recipecontext} from '../Context/RecipeContext'

const Details = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [recipes, setrecipes] = useContext(recipecontext);
    const recipe = recipes.find((r) => r.id == params.id);
    //  console.log(recipes.instruction);
    const DeleteHandler = () => {
        const updatedRecipes = recipes.filter((r) => r.id !== params.id);
        setrecipes(updatedRecipes);
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        navigate("/Recipe");
       

    };

    return recipe ? (
      <div className=" bg-red-100 ">
        <div className="w-[80%] m-auto p-5 ">
            <Link to="/recipes" className="text-3xl ri-arrow-left-line"></Link>
            <div className="details w-full flex  h-[82vh] mt-3">
                <div className="dets w-[50%] mt-[-2%] p-[4%]">
                    <img className="rounded-[50%] transform transition duration-500 hover:rotate-6 hover:shadow-xl  filter brightness-100 transition duration-500 hover:brightness-90" src={recipe.image} alt="" 
                    style={{
                      boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                    }}
                    />
                    <h1 className="text-xl mb-5 mt-[10%] text-center">
                        {recipe.title}
                    </h1>
                  
                </div>

                <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
                    <h1 className="text-3xl border-b border-black text-black">
                        Ingredients
                    </h1>
                    <ul className="text-zinc-600 list-disc  p-3 ">
                        {recipe.ingredients.split(",").map((d, i) => (
                            <li className="list-item text-sm  mb-2" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-3xl border-b border-black text-black">
                        Instructions
                    </h1>
                    <p className="text-zinc-600 list-decimal  py-3 ">
                        
                          
                           {recipe.instruction}
                         
                    </p>
                    <h1 className="text-3xl border-b border-black text-black">
                       Description
                    </h1>
                    <p className="text-zinc-600 list-decimal py-3">
                        
                          
                    {recipe.description}
                         
                    </p>
                    <div className="bg-red-100  flex flex-col  w-[100%] ">
                    <div className="flex gap-10 py-6  ">
                        <Link
                            to={`/Update/${params.id}`}
                            // className="text-blue-400 border-blue-400 border py-2 px-5"
                            className='px-10 py-2 bg-[#F34E4C] rounded text-white transform transition duration-300 hover:scale-105 active:scale-95 active:shadow-lg'
style={{
    boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
  }}
                        >
                            Update
                        </Link>
                        <button
                            onClick={DeleteHandler}
className='px-10 py-2 bg-[#F34E4C] rounded text-white transform transition duration-300 hover:scale-105 active:scale-95 active:shadow-lg'
style={{
    boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
  }}
>
                            Delete
                       </button>
                        </div>
                    </div>
                </div>
              
            </div>
           
        </div>
        </div>
    ) : (
        <h1 className="w-full text-center text-4xl text-[#F34E4C] mt-10">
            Loading Recipe...
        </h1>
    );
};

export default Details;
