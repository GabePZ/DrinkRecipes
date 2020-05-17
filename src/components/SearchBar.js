import React  from 'react';

export const SearchBar = ({onSetSearchValue}) => {
    let inputStyle = {color:"green", height:50, fontSize:50};
    
    return (
        <>
        <h1>Drink Search:</h1>
        <input size={50} style={inputStyle} onKeyPress={
            (event) => {
                if (event.key === "Enter"){
                    onSetSearchValue(event.target.value)}
                }}/>
        </>
            
        )
}
