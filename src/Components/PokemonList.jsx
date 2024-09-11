import { useContext } from 'react';
import styled from 'styled-components';
import PokemonContextProvider from '../Context/PokemonContext';
import PokemonCard from './PokemonCard';


const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    background-color: #ffffff;
    padding: 20px;
    border: 1px solid black;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 30px;
    
`;



const PokemonList = ({ pokemonList, onAddPokemon }) => {


  return (
    <ListContainer>
      {pokemonList.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => {}}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;