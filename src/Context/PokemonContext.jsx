import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import MOCK_DATA from "../mock";

export const PokemonContext = createContext();

const PokemonContextProvider = ({children}) => {
    const [pokemon, setPokemon] = useState([]);

    return (
        <PokemonContext.Provider value={{pokemon,setPokemon,pokemonList:MOCK_DATA}}>
            {children}
        </PokemonContext.Provider>
    );
};


export default PokemonContextProvider;