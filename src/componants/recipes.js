import { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";
import React from 'react'
import Recipes_details from "./recipes_detiles";

const _id = "d4c16393"
const app_key = "b0535457e09ea13ed80f7b42239b2c44"
const Recipes = ({ show, setShow, id,setShow2,show2,show3,setShow3 ,setcurrentRecipes}) => {
  const [currentCategories, setCurrentCategories] = useState([])
  useEffect(() => {
    getCurrentCategories()
  }, [])

  const getCurrentCategories = () => {
    axios.get(`https://api.edamam.com/search?q=${id}&app_id=${_id}&app_key=${app_key}&from=0&to=4&calories=591-722&health=alcohol-free`).then((response) => {

      setCurrentCategories(response.data.hits)
      //console.log(currentCategories);
      console.log(response.data);

    })
      .catch((err) => {
        console.log(err);
      });


  }

  const recipes = currentCategories.map((recipes, inx) => {
    //console.log(recipes.recipe.label);
    return <div onClick={() => {
      // console.log(recipes);
    }} className="recipe_card" > <div ><p>{recipes.recipe.label}</p> <img onClick={() => {
      // <Recipes_details recipes={recipes}/>
      setShow2(false)
      setShow(false)
      setShow3(true)
      setcurrentRecipes(recipes)
    }} src={recipes.recipe.image} /> </div></div>
  })
  return (
    <><button onClick={()=>{
      { setShow(!show)
        
        setShow2(!show2)
    }}}>Back to Home</button>
      {recipes}

      {/* <p>{selectedCategory}</p> */}
    </>
  )
}

export default Recipes