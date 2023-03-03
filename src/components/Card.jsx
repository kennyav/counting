import React from 'react'
import styled from '@emotion/styled';

const Container = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  padding: 1rem 2rem;
  border: 1px solid rgba(200 200 200 / 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #eee;
  text-shadow: 0 1px 0 #999;
`;

const Card = () => {
  return <Container>
      <img id="test" src={require(`../deck/ace_of_spades.png`)} alt="Not Found" />
  </Container>;
};

export default Card;
