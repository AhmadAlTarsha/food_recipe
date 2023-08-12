import { useState,useEffect } from "react";
import Categories from "./componants/categories";
import "./App.css";
import Recipes from "./componants/recipes";




function App() {
 //const [id,setId]=useState("")
 const [show,setShow]=useState(true)
 //const [show,setShow]=useState(true)
 const [selectedCategory, setSelectedCategory] = useState(null);
 const [id, setid] = useState("")
  return (
    <div  className="App">
      <h1 >food Recipes</h1>
     {show? <Categories show={show} setShow={setShow} setSelectedCategory={setSelectedCategory} setid={setid}/>:
     <Recipes show={show} setShow={setShow} selectedCategory={selectedCategory} id={id}/>
    
     }
    </div>
  );
}

export default App;
