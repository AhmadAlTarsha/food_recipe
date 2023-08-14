import { useState, useEffect,useContext } from "react";
import { RecipesContext } from "../App";
const Nutritional_val = () => {
  const{currentRecipes}=useContext(RecipesContext)
    const totalNutrient=  currentRecipes.recipe.digest
   // console.log(totalNutrient);
 const array=totalNutrient.splice(7)
  

  return (
    <><table>
            <thead>
              <tr>
                <th>label</th>
                <th> ToTal Amount</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
             {totalNutrient.map((ele)=>{
        return  <tr>
  <td>{ele.label}</td>
<td>{ele.total}</td>
 <td>{ele.unit}</td>
              </tr>
    })}

            </tbody>
          </table></>
  )}


export default Nutritional_val


