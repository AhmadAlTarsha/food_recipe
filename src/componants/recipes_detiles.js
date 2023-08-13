import React from 'react'

const Recipes_details = ({currentRecipes,showRecipeDetail,setShowRecipeDetail,setShowMainScreen}) => {
 //console.log(currentRecipes);
  return (
    <div> <button onClick={()=>{
      setShowMainScreen(true)
      setShowRecipeDetail(!showRecipeDetail)
    }}>back to main Screen</button></div>
 
  )
}

export default Recipes_details