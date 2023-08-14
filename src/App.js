import { useState,createContext} from "react";
import Categories from "./componants/categories";
import "./App.css";
import Recipes from "./componants/recipe_card";
import Recipes_details from "./componants/recipe_detiles";
import logo from  "./logo/logo.png"
export const RecipesContext = createContext();
function App() {
  //---------------------this state to controlled for show and hide the min screen-------------------------------//
  const [showMainScreen, setShowMainScreen] = useState(true)
   //---------------------this state to controlled for show and hide the recipes of selected category---------//
  const [showRecipes, setShowRecipes] = useState(false)
   //---------------------this state to controlled for show and hide the recipe_details of selected recipe---//
   const [showRecipeDetail, setShowRecipeDetail] = useState(false)
   //---------------------this state to controlled for selected category depending on user choice---//
   const [selectedCategory, setSelectedCategory] = useState("");
   //---------------------this state to controlled for selected Recipe depending on user choice---//
   const [currentRecipes, setcurrentRecipes] = useState(null)
   //---------------------this state to controlled for selected Recipes depending on user choice the category---//
  const [id, setid] = useState("")
  
  return (
    // all the data in this provider then i pass it to selected component
    <RecipesContext.Provider value={{showMainScreen,setShowMainScreen,showRecipes ,setShowRecipes,showRecipeDetail,setShowRecipeDetail,selectedCategory, setSelectedCategory,currentRecipes,setcurrentRecipes,id,setid}}>
      <div className="All_componants"> <div ><div className="app_Name_logo"><h1 id="app_title" >Food Recipes</h1> <img className="app_logo" src={logo}/></div></div> <div className="nav_bar"></div> <div className="recipes_card">

      
{showMainScreen && <Categories/>}

{showRecipes && <Recipes/>}
{showRecipeDetail && <Recipes_details/>}
</div></div>
    </RecipesContext.Provider>

  );
}
export default App;

