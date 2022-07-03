import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-wind";
import {
  faEnvelope,
  faMapLocation,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { basic_details } from "../data/basic_details";
import contactImage from "../images/contact/contact.png";

const Container = styled.div`
    .pl-16;
    .pr-16;
    .lg:pl-32;
    .lg:pr-32;
    .pt-12;
    .pb-12;
    .justify-around;
    .flex-col;
    .lg:flex-row;
    img {
        height: 50vh;
        margin-top: 32px;
    }
`;

const Item = styled.div`
    .mb-4;
    .pl-2;
    color: #D9B784;
    svg{
        height: 25px;
    }
    span{
        margin-left: 10px;
        color: #1c2023;
    }
`;

const Title = styled.h1``;

const Contact = () => {
  return (
    <Container>
        <img src={contactImage} alt="contact" />
      <div>
        <Title>Our Headquarters:</Title>
        <Item>
          <FontAwesomeIcon icon={faMapLocation} />{" "}
          <span>{basic_details.address}</span>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <span>{basic_details.sales_email}</span>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faWhatsapp} />{" "}
          <span>{basic_details.phone}</span>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faMoneyBill} />{" "}
          <span>{basic_details.vatNumber}</span>
        </Item>
      </div>
    </Container>
  );
};

export default Contact;
