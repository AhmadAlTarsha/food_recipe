import React from 'react'

const Recipes_details = ({ currentRecipes, showRecipeDetail, setShowRecipeDetail, setShowMainScreen, setShowRecipes }) => {
  const allIngredient =currentRecipes.recipe.ingredientLines.map((ele,i)=>{
    return <ul><li>{ele}</li></ul>
  })

  const dishType= currentRecipes.recipe.dishType.map((dishType,i)=>{
    return <>{dishType}</>
  })
  const cuisineType= currentRecipes.recipe.cuisineType.map((cuisineType,i)=>{
    return <>{cuisineType}</>
  })
  
  //(currentRecipes )this data represent the current Recipe that the user selected it
  // add i send it from the recipes and send it as props to the recipe details
  return (
    <div className='all_recipe_details'>
      <div className='image_button_details' ><img src={currentRecipes.recipe.image} />  <button className='Back_button' onClick={() => {
        // setShowMainScreen(true)
        setShowRecipes(true)
        console.log(currentRecipes.recipe);

        setShowRecipeDetail(!showRecipeDetail)
      }}>Back</button></div> <div className='main_details' ><div className='main_details_2'  ><p>{currentRecipes.recipe.label}</p><p>{`caloeies : ${currentRecipes.recipe.calories} `}</p><p>DishType : {dishType}</p><p>CuisineType : {cuisineType}</p></div> <div className='ingredient'>{allIngredient}</div><div><h3>see the Recipe in the site</h3></div></div></div>
   

  )
}

export default Recipes_details