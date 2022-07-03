import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-wind";
import {
  faEnvelope,
  faMapLocation,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { basic_details } from "../../data/basic_details";

const Container = styled.div`
    .bg-sdark;
    .text-slight;
    .pl-16;
    .pr-16;
    .lg:pl-32;
    .lg:pr-32;
    .flex;
    .pt-12;
    .pb-12;
    .justify-around;
    .flex-col;
    .lg:flex-row;
`;

const Item = styled.div`
    .mb-4;
    .pl-2;
    svg{
        height: 25px;
    }
    span{
        margin-left: 10px;
    }
`;

const Title = styled.h3`
    .text-white;
`;

const Icon = styled.div`
    .text-white;
    .text-5xl;
    .mb-4;
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <Title>SWEDEN (HQ)</Title>
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
          <FontAwesomeIcon icon={faCopyright} />{" "}
          <span>Copyright 2022. All Rights Reserved.</span>
        </Item>
      </div>
      <div>
        <Title>Social Media</Title>
        <a href={basic_details.instagram_url}>
          <Icon>
            <FontAwesomeIcon icon={faInstagram} />
          </Icon>
        </a>
        <a href={basic_details.facebook_url}>
          <Icon>
            <FontAwesomeIcon icon={faFacebook} />
          </Icon>
        </a>
      </div>
    </Container>
  );
};

export default Footer;
