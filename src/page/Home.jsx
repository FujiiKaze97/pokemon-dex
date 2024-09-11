import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const HomeContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #4b4b4b;;
      width: 100%;
      height: 100vh;
  `

  const Button = styled.button`
      background-color: #cecece;
      color:#000000;
      font-size: 15px;
      font-weight: bold;
      border-radius: 15px;
      cursor: pointer;
      border: none;
      padding: 10px;
      transition:  background-color 0.5s ease;

      &:hover {
        background-color: #6d6d6d;
      }
  `

const Home = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/dex");
  }

  

  return (
    <HomeContainer>
      <Button onClick={handleClick}>포켓몬 도감 시작하기</Button>
    </HomeContainer>
  )
}

export default Home