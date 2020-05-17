import React from 'react';

export const RecipeBook = ({ drinkData }) => {
    let ingredients = [...Array(15).keys()].map(i => i+1).map(i => ({ingredient: drinkData[`strIngredient${i}`], quantity: drinkData[`strMeasure${i}`]}))
    return (
        <div>
            <h2>{drinkData.strDrink}</h2>
            <img height={200} src={drinkData.strDrinkThumb} alt={`${drinkData.strDrink}`} />
            <table style={{'marginLeft':'auto', 'marginRight':'auto'}}>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.filter(({ingredient, quantity}) => {return ingredient}).map(({ ingredient, quantity }) => 
                                <tr key={ingredient}>
                                    <td key={ingredient}>{ingredient}</td>
                                    <td key={quantity}>{quantity}</td>
                                </tr>
                    )
                    }
                </tbody>
            </table>
            <p>{drinkData.strInstructions}</p>
        </div>
    )
}
