import { useState, useEffect } from "react";
import React from 'react'
import axios from "axios";
import App from "../App";
const _id = "d4c16393"
const app_key = "b0535457e09ea13ed80f7b42239b2c44"
const categories = ["chicken", "mango", "spaghetti", "chocolate", "fish", "rice", "meat",]

const Categories = ({ showRecipes, setShowRecipes, setSelectedCategory, setid, showMainScreen, setShowMainScreen }) => {
  const [currentCategories, setCurrentCategories] = useState([])
  const [id, setId] = useState("")

  useEffect(() => {
    getCurrentCategories()
  }, [])


  const getCurrentCategories = () => {
    axios.get(`https://api.edamam.com/search?q=${id}&app_id=${_id}&app_key=${app_key}&from=0&to=4&calories=591-722&health=alcohol-free`).then((response) => {

      setCurrentCategories(response.data)
    })
      .catch((err) => {
        console.log(err);
      });
  }
  const showCategories = categories.map((categories, i) => {
    return <button id={categories} onClick={(e) => {
      
      //when i click on any category the main screen will be hide and recipes of this category will be showing
      // because the init val of showRecipes false 
      setShowRecipes(!showRecipes)
      setShowMainScreen(!showMainScreen)
      setid(e.target.id)
      setId(e.target.id)

      setSelectedCategory(currentCategories)

    }}  >{categories}</button>
  })

  return (
    <div className="divButton">{showCategories} </div>
  )
}












export default Categories