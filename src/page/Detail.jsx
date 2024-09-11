import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MOCK_DATA from '../mock';
import styled from 'styled-components';
import PokemonCard from '../Components/PokemonCard';
import { Card }  from '../Components/PokemonCard';


const DetailContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;   
        background-color: #4b4b4b;
`
const Button = styled.button`
margin-top: 30px;
width: 10%;
background-color: #e9e9e9f9;
color:#000000;
font-size: 15px;
font-weight: bold;
border-radius: 15px;
cursor: pointer;
border: none;
padding: 10px;
transition:  background-color 0.5s ease;

&:hover {
background-color: #808080;
}
`



const Detail = () => {
    const navigator = useNavigate();
    const info = new URLSearchParams(useLocation().search);
    const pokemonId = info.get('id');
    const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(pokemonId));
    
  return (
    <DetailContainer>


    <Card key = {pokemonId}>
      <img src={pokemon.img_url} alt={""} />
      <div>{pokemon.korean_name}</div>
      <div>{pokemon.types}</div>
      <div>{pokemon.description}</div>
    </Card>

    <Button onClick={() => {
        navigator("/dex")
    }}>Dex</Button>

    </DetailContainer>
  )
}

export default Detail