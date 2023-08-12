import { useState,useEffect } from "react";
import React from 'react'
import axios from "axios";
import App from "../App";

const categories = ["chicken","mango","spaghetti","chocolate", "fish","rice","meat", ]

  const Categories = ({show,setShow,setSelectedCategory,setid},) => {
   
    const [id, setId] = useState("")
    
 
    

     
const showCategories= categories.map((categories,i)=>{
    return <button id={categories} onClick={(e)=>{
        setShow(false)
        console.log(e.target.id);
       // console.log(id);
      setid(e.target.id)
        setId(e.target.id)
       // console.log(categ);
       // setSelectedCategory(categ)
    }}  >{categories}</button>
})

    return (
      <div className="divButton">{showCategories} </div>
    )
  }



  





  

  
  export default Categories