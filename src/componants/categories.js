import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";
import App from "../App";

const _id= "d4c16393"

const app_key="b0535457e09ea13ed80f7b42239b2c44"





const Categories = ({id}) => {
    const URL = `https://api.edamam.com/search?q=${id}&app_id=${_id}&app_key=${app_key}&from=0&to=4&calories=591-722&health=alcohol-free `;
    const [recipe,setRcipe]=useState([])
  
//console.log(id);
useEffect(()=>{
getAllRecipes()
  
},[id])

 const getAllRecipes=()=>{
  axios.get( URL).then((response) => {
const recipes=response.data.hits
  
   console.log(recipe)
 
  setRcipe(recipes)
  console.log(recipes);
    })
    .catch((err) => {
      console.log(err);

    });


 }
 const a=   recipe.map((ele,i)=>{
 
    return <div><img src={ele.recipe.image}/></div>
})

  return (
    <div>{a}</div>
  )
}

export default Categories