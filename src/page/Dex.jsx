import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from '../Components/Dashboard';
import PokemonList from '../Components/PokemonList';
import MOCK_DATA from '../mock';

const DexContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: #4b4b4b;
`

export const Button = styled.button`
margin-left: 30px;
margin-top : 30px;
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

const Dex = () => {

  const navigate = useNavigate();


  const handleClick = () => {
    navigate("/");
  }



  return (
    <DexContainer>
      <Button onClick={handleClick}>Main</Button>
      <Dashboard></Dashboard>
      <PokemonList></PokemonList>
    </DexContainer>
  )
}

export default Dex