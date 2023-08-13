import { useState, useEffect } from "react";

const Nutritional_val = ({currentRecipes}) => {
    const totalNutrient=  currentRecipes.recipe.digest
 const array=totalNutrient.splice(7)
    console.log(currentRecipes);

  return (
    <>{totalNutrient.map((ele)=>{
        return <div>{ele.label} <table>{ele.unit}</table ><table>{ele.total}</table></div>
    })}</>
  )
}

export default Nutritional_val