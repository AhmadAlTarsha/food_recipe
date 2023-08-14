import { useState, useEffect, useContext } from "react";
import axios from "axios";
import App from "../App";
import React from 'react'
import Recipes_details from "./recipe_detiles";
import { RecipesContext } from "../App";
const _id = "d4c16393"
const app_key = "b0535457e09ea13ed80f7b42239b2c44"
const Recipes = () => {
  // all data i use it in thic component By (use context)
  const { showRecipes, setShowRecipes, showMainScreen, setShowMainScreen, setShowRecipeDetail, setcurrentRecipes, id } = useContext(RecipesContext)

  
  const [currentCategories, setCurrentCategories] = useState([])

  useEffect(() => {
    getCurrentCategories()
  }, [])

  const getCurrentCategories = () => {
    axios.get(`https://api.edamam.com/search?q=${id}&app_id=${_id}&app_key=${app_key}&from=0&to=4&calories=591-722&health=alcohol-free`).then((response) => {
      setCurrentCategories(response.data.hits)
    })
      .catch((err) => {
        console.log(err);
      });


  }

  const recipes = currentCategories.map((recipes, i) => {
    return <div key={i} className="one_card" onClick={() => {
    }}> <p>{recipes.recipe.label}</p> <img src={recipes.recipe.image} onClick={() => {
      setShowMainScreen(false)
      setShowRecipes(false)
      setShowRecipeDetail(true)
      setcurrentRecipes(recipes)

    }} /> </div>
  })
  return (
    <>
      <div className="nav_bar">
        <button className="home_button" onClick={() => {
          {
            setShowMainScreen(true)
            setShowRecipes(!showRecipes)
            setShowMainScreen(!showMainScreen)
          }
        }}>Home</button><h1>{`${id} recipes`}</h1> <input placeholder="search"></input>
      </div>
      <div className="recipe_card"> {recipes} </div>
      <button className="More_Recipes_button"> Show More Recipes</button>
    </>

  )

}

export default Recipes