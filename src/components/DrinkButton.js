import React from 'react';

export const DrinkButton = ({ drinkData, onClick }) => {
    return (
        <div style={{ display: 'inline-flex', cursor: 'pointer', flexDirection: 'column', padding: 10, width: 100, height: 100, margin: 10, borderRadius: 5 }}
            onClick={() => onClick(drinkData)} key={drinkData.strDrink}>
            <img height={75} src={drinkData.strDrinkThumb} alt={`${drinkData.strDrink}`}/>
            {drinkData.strDrink}
        </div>
        )
}


