import { useState, useEffect } from "react";

const Nutritional_val = ({currentRecipes}) => {
    const totalNutrient=  currentRecipes.recipe.digest
 const array=totalNutrient.splice(7)
    console.log(currentRecipes);

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


