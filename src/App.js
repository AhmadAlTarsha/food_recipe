import { useState,useEffect } from "react";
import axios from "axios";
import "./App.css";
import Categories from "./componants/categories";


const categories = ["chicken","mango","spaghetti","chocolate", "fish","rice","meat", ]


 
const showCategories= categories.map((categories,i)=>{
  return <p id={categories}>{ categories}</p>
  
  
})

function App() {
 const [id,setId]=useState("mango")
  return (
    <div className="App">
      <h1 onClick={(e)=>{
        console.log(e.target.id
          );
        setId(e.target.id)
      }}>{showCategories}</h1>
      <Categories  id={id}/>
    
    </div>
  );
}

export default App;
