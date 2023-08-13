import { useState, } from "react";
import Categories from "./componants/categories";
import "./App.css";
import Recipes from "./componants/recipes";
import Recipes_details from "./componants/recipe_detiles";
import logo from  "./logo/logo.png"

function App() {
  //---------------------this state to controlled for show and hide the min screen-------------------------------//
  const [showMainScreen, setShowMainScreen] = useState(true)
   //---------------------this state to controlled for show and hide the recipes of selected category---------//
  const [showRecipes, setShowRecipes] = useState(false)
   //---------------------this state to controlled for show and hide the recipe_details of selected recipe---//
  const [showRecipeDetail, setShowRecipeDetail] = useState(false)
 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentRecipes, setcurrentRecipes] = useState(null)
  const [id, setid] = useState("")
  return (
    <div className="All_componants"> <div ><div className="app_Name_logo"><h1 id="app_title" >Food Recipes</h1> <img className="app_logo" src={logo}/></div></div> <div className="nav_bar"></div> <div className="recipe_card">

      
      {showMainScreen && <Categories showRecipes={showRecipes} setShowRecipes={setShowRecipes} showMainScreen={showMainScreen} setShowMainScreen={setShowMainScreen} setSelectedCategory={setSelectedCategory} setid={setid} />}

      {showRecipes && <Recipes showRecipes={showRecipes} showMainScreen={showMainScreen}  setShowMainScreen={setShowMainScreen} setShowRecipes={setShowRecipes}  showRecipeDetail={showRecipeDetail} setShowRecipeDetail={setShowRecipeDetail} selectedCategory={selectedCategory} id={id} setcurrentRecipes={setcurrentRecipes} />}
      {showRecipeDetail && <Recipes_details currentRecipes={currentRecipes} showRecipeDetail={showRecipeDetail} setShowMainScreen={setShowMainScreen} setShowRecipeDetail={setShowRecipeDetail} setShowRecipes={setShowRecipes} showRecipes={showRecipes}/>}
    </div></div>

  );
}
export default App;

