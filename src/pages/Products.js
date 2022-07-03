import React from "react";
import styled from "styled-wind";
import { productText } from "../data/basic_details";
import productImage from "../images/product/product.png";

const ListItem = styled.div`
    .flex;
    .flex-col;
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

const Product = () => {
  return (
    <Container>
      <ListItem>
        <img src={productImage} alt="products" />
        {Object.keys(productText).map((category, index) => (
          <p key={index}>
            <h1>{category}</h1>
            {productText[category].map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </p>
        ))}
      </ListItem>
    </Container>
  );
};

export default Product;
