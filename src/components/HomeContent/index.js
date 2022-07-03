import React from "react";
import styled from 'styled-wind';
import { homeText } from "../../data/basic_details";
import home1Image from '../../images/home/home1.png'
import home2Image from '../../images/home/home2.png'

const ListItem = styled.div`
    .flex;
    .flex-col;
    .lg:flex-row;
    .pr-12;
    .pl-12;
    .pt-8;
    .pb-8;
    .text-sdark;
    img {
        height: 50vh;
        margin-top: 32px;
    }
    p{
        padding: 0 24px;
        line-height: 1.8rem;
        letter-spacing: -0.05em;
        overflow-wrap: break-word;
    }
`;

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const HomeContent = () => {
  return (
    <Container>
      <ListItem>
        <img src={home1Image} alt="home1" />
        <p>
          <h1>{homeText.home1Title}</h1>
          {homeText.home1}
        </p>
      </ListItem>
      <ListItem>
        <p>
          <h1>{homeText.home2Title}</h1>
          {homeText.home2}
        </p>
        <img src={home2Image} alt="home2" />
      </ListItem>
    </Container>
  );
};

export default HomeContent;
