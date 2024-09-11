import { useContext } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../Context/PokemonContext';
import { useNavigate } from 'react-router-dom';
  
export const Card = styled.div`
  border: 1px solid #000000;
  background-color: #000000e2;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  color: white;
  font-size: 9px;
  transition:  background-color 0.8s ease,
  box-shadow 0.2s,
  transform 0.2s;
  padding: 20px;
  

  &:hover {
    background-color: #000000;
    transform: translateY(+5px);
    box-shadow: 0 8px 16px rgba(0,0,0,2);
  }

`;

export const Button = styled.button`
  background-color: #ffffff;
  border-radius : 8px;
  margin-top: 10px;
`;


function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  const pokemonContext = useContext(PokemonContext);
  const navigator = useNavigate();


  const addPokemon = () => {
    if(pokemonContext.pokemon.length < 6) {
      if(!pokemonContext.pokemon.includes(pokemon)) {
      pokemonContext.setPokemon([...pokemonContext.pokemon,pokemon])
      } else {
        alert("이미 선택되어진 포켓몬입니다.")
      }
    } else {
      alert("6마리의 포켓몬이 이미 추가되어 있습니다.\r포켓몬을 리스트에서 제거해거 후 추가해주세요.")
    }
  }

  const removePokemon = () => {
   const removePokemonArr =  pokemonContext.pokemon.filter(x => x.id !== pokemon.id);
  pokemonContext.setPokemon(removePokemonArr);
  }

  const detailPageClick = () => {
      navigator(`/detail?id=${pokemon.id}`)
   }
 

  
  return (
    <Card key = {pokemon.id} onClick={detailPageClick}>
      <img src={pokemon.img_url} alt={""} />
      <div>{pokemon.korean_name}</div>
      <div>{pokemon.types}</div>
      <div>{pokemon.description}</div>
      <div>
      {isSelected ?<Button onClick={(e)=> {
        e.stopPropagation();
        removePokemon();
      }}>
        삭제
        </Button>  :  
        <Button onClick={(e)=> {
          e.stopPropagation();
          addPokemon();
        }
        }>
          추가
          </Button>}
      </div>
    </Card>
  );
}

export default PokemonCard;
