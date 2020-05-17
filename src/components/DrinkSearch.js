import React, { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar'
import { DrinkButton } from './DrinkButton'
import { RecipeBook } from './RecipeBook'

const COCKTAIL_API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const DrinkSearch = () => {

    let [searchValue, setSearchValue] = useState();
    let [searchResults, setSearchResults] = useState([]);
    let [recipe, setRecipe] = useState()

    useEffect(() => {
        if (searchValue) {
            fetch(`${COCKTAIL_API_BASE}${searchValue}`)
                .then(response => response.json())
                .then(data => {
                    if (data.drinks) {
                        setSearchResults(data.drinks);
                    } else {
                        setSearchResults([]);
                    }

                })
        } else {
            setSearchResults([]);
        }
    }, [searchValue]
    )
    return (
        <div>
            <SearchBar onSetSearchValue={(searchValue) => {
                setRecipe();
                setSearchValue(searchValue);
            }
            } />
            <br/>
            {!recipe && searchResults.map((drinkData) => {
                return <DrinkButton key={drinkData.strDrink} drinkData={drinkData} onClick={(drinkData) => {
                    setSearchResults([]); // Reset search results to close the buttons
                    setRecipe(drinkData);
                }} />
            })}
            {recipe && <RecipeBook drinkData={recipe} />}
        </div>
    )
}
