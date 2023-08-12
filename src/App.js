import { useState, useEffect } from "react";
import Categories from "./componants/categories";
import "./App.css";
import Recipes from "./componants/recipes";
import Recipes_details from "./componants/recipes_detiles";




function App() {
  //const [id,setId]=useState("")
  const [show, setShow] = useState(false)
  const [show2,setShow2] = useState(true)
const [show3, setShow3] = useState(false)
  //const [show,setShow]=useState(true)
  const [selectedCategory, setSelectedCategory] = useState("");
 const [currentRecipes, setcurrentRecipes] = useState(null)
  const [id, setid] = useState("")
  return (
    <div className="main_screen"> <div className="app_name"><h1 id="app_title" >Food Recipes</h1></div> <div className="nav_bar"><h1>{`${id} Recipes`}</h1></div> <div className="recipe_card">

      {/* {show2 && show ? <Categories show={show} setShow={setShow} setSelectedCategory={setSelectedCategory} setid={setid} /> :
        <Recipes show={show} setShow2={setShow2} setShow={setShow} selectedCategory={selectedCategory} id={id} />

      } */}
      {show2 &&<Categories show={show} setShow={setShow} show2={show2} setShow2={setShow2}  setSelectedCategory={setSelectedCategory} setid={setid} /> }
      {show && <Recipes show={show} setShow2={setShow2} setShow={setShow} show2={show2} show3={show3} setShow3={setShow3} selectedCategory={selectedCategory} id={id} setcurrentRecipes={setcurrentRecipes}/> }
      {show3 && <Recipes_details currentRecipes={currentRecipes}/>}
    </div></div>

  );
}

export default App;
