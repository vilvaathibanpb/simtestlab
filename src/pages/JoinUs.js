import React from "react";
import styled from "styled-wind";
import { careersText } from "../data/basic_details";
import careerImage from "../images/career/career.png";

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

const JoinUs = () => {
  return (
    <Container>
      <ListItem>
        <img src={careerImage} alt="careers" />
        <p>
          <h1>{careersText.title}</h1>
          {careersText.para}
        </p>
      </ListItem>
    </Container>
  );
};

export default JoinUs;
