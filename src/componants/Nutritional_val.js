import React from 'react'

const Nutritional_val = ({currentRecipes}) => {
    const totalNutrient=  currentRecipes.recipe.digest
// const arr=totalNutrient.splice(6)
    //console.log(totalNutrient);
 const arr=totalNutrient.splice(7)
 console.log(arr);


  return (
    <>{ arr.map((fact,i)=>{
return <div><p>{fact.label}</p><p>{fact.total
}</p><p>{fact.unit}</p></div>
 })}</>
  )
}

export default Nutritional_val