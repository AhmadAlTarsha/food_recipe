import React from 'react'

const Recipes_details = ({ currentRecipes, showRecipeDetail, setShowRecipeDetail, setShowMainScreen, setShowRecipes }) => {

  const ingredient=currentRecipes.recipe.ingredientLines

  ingredient.map((ele,i)=>{
    return <ul><div><li>{ele}</li></div></ul>
  })
  console.log(ingredient);

  //(currentRecipes )this data represent the current Recipe that the user selected it
  // add i send it from the recipes and send it as props to the recipe details
  return (
    <div className='all_recipe_details'>
      <div className='image_button_details' ><img src={currentRecipes.recipe.image} />  <button className='Back_button' onClick={() => {
        // setShowMainScreen(true)
        setShowRecipes(true)
        console.log(currentRecipes.recipe);

        setShowRecipeDetail(!showRecipeDetail)
      }}>Back</button> <div className='main_details' ><div><p>{currentRecipes.recipe.label}</p><p>{currentRecipes.recipe.calories}</p><p>{currentRecipes.recipe.dishType
      }</p><p>{currentRecipes.recipe.cuisineType}</p></div>{ingredient} <div></div><div></div></div></div>
    </div>

  )
}

export default Recipes_details