import { useContext } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../Context/PokemonContext';
import PokemonCard from './PokemonCard';
import {Button} from './PokemonCard';


const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
    height: 100%;
`;

const Title = styled.h2`  
    margin-bottom: 20px;
    color: black;
    font-weight: bold;
`

const SlotContainer = styled.div`
    grid-template-columns: repeat(6, 1fr);
    display: grid;
    flex-direction: row;
    gap:20px;
    width: 100%;
    justify-content: center;
`;

const Dashboard = () => {

  const pokemonContext = useContext(PokemonContext);

  return (
    <DashboardContainer>
      <Title>대시보드</Title>
      {pokemonContext.pokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <SlotContainer>
          {pokemonContext.pokemon.map(pokemon => (
            <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isSelected={true}
            />
          ))}
        </SlotContainer>
      )}
    </DashboardContainer>
  );
};



export default Dashboard;

