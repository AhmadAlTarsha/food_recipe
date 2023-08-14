
import { useState, useContext } from 'react'
import Nutritional_val from './Nutritional_val'
import { RecipesContext } from "../App";

const Recipes_details = () => {
  // use context
  const { currentRecipes, showRecipeDetail, setShowRecipeDetail,  setShowRecipes }=useContext(RecipesContext)
  const [Nutritional, setShowNutritional] = useState(false)
  const [Show, setShow] = useState("Show")
  const allIngredient = currentRecipes.recipe.ingredientLines.map((ele, i) => {
    return <li>{ele}</li>
  })

  const dishType = currentRecipes.recipe.dishType.map((dishType, i) => {
    return < >{dishType}</>
  })
  const cuisineType = currentRecipes.recipe.cuisineType.map((cuisineType, i) => {
    return <>{cuisineType}</>
  })

  //(currentRecipes )this data represent the current Recipe that the user selected it
  // add i send it from the recipes and send it as props to the recipe details
  return (
    <div className='all_recipe_details'>
      <div className='image_button_details' ><img src={currentRecipes.recipe.image} />  <button className='Back_button' onClick={() => {
        // setShowMainScreen(true)
        setShowRecipes(true)
        setShowRecipeDetail(!showRecipeDetail)
      }}>Back</button></div> <div className='main_details' ><div className='main_details_2'  ><h3>{currentRecipes.recipe.label}</h3><h4>{`caloeies : ${currentRecipes.recipe.calories} `}</h4><p>DishType : {dishType}</p><p >CuisineType : {cuisineType}</p></div> <div className='ingredient'><h3>ingredient</h3>{allIngredient}<div><button onClick={() => {
        console.log(Nutritional);
        setShowNutritional(!Nutritional)
        if (!Nutritional) {
          setShow("hide")
        } else { setShow("show") }

      }} className='Nutritional_button' >{Show} Nutritional Value  </button> </div><h3>see the Recipe in the site</h3></div>{Nutritional && <Nutritional_val  />}<div></div></div></div>


  )
}

export default Recipes_details