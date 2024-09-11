import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const PokemonContext = createContext();

const PokemonContextProvider = ({children}) => {
    const [pokemon, setPokemon] = useState([]);

    return (
        <PokemonContext.Provider value={{pokemon,setPokemon}}>
            {children}
        </PokemonContext.Provider>
    );
};


export default PokemonContextProvider;