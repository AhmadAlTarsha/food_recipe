import { useState,useEffect } from "react";
import axios from "axios";
import App from "../App";
import React from 'react'
const _id= "d4c16393"
const app_key="b0535457e09ea13ed80f7b42239b2c44"
const Recipes = ({show,setShow,id}) => {
  const [currentCategories,setCurrentCategories]=useState([])
  useEffect(()=>{
    getCurrentCategories()
  },[])
  
  const getCurrentCategories=()=>{
      axios.get(`https://api.edamam.com/search?q=${id}&app_id=${_id}&app_key=${app_key}&from=0&to=4&calories=591-722&health=alcohol-free`).then((response) => {
     
     setCurrentCategories(response.data.hits)  
    //console.log(currentCategories);
  // console.log(response.data);
  
         })
         .catch((err) => {
           console.log(err); 
         });  
 

      }

  const recipes=currentCategories.map((recipes,inx)=>{
    console.log(recipes.recipe.label);
return <><p>{recipes.recipe.label}</p></>
      })
  return (
    <><button onClick={()=>{
      setShow(true)
    }}>Back to Home</button>
   {recipes}
    {/* <p>{selectedCategory}</p> */}
    </>
  )
}

export default Recipes