
import '../App.js'
import React, { useState } from 'react';
import axios from 'axios';


const Example = (props) => {
  // ----- VANILLA STATE ---------------//
  // const [pokemon, setPokemon] = useState([]);

  const [pokemon, setPokemon] = useState();

  const pokemonHandler = () => {
  

    // -------------AXIOS---------//
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      // SUCCESSFUL RESPONSE
      .then(response => {
        console.log("SUCCESS", response.data) 
        setPokemon(response.data.results)
      })
      // UNSUCCESSFUL RESPONSE
      .catch(err => console.error("ERROR", err)) 
  };

  return (
    <fieldset style={{textAlign:'center'}}>
      <div>
        
        <button onClick={pokemonHandler}>Fetch Pokemon</button>
        {
        // ----- VANILLA FUNCTION TO DISPLAY DATA ----------------------//
       
        pokemon &&
        pokemon.length > 0 && pokemon.map((poke, index)=>{
          return (<li key={index}>{index}: {poke.name}{poke.font_default}</li>)})
        }
      </div>
    </fieldset>
  );
  
}
export default Example;