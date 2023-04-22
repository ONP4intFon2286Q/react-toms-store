import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <h5 className="copy">&copy;</h5>
      <h5>
        {new Date().getFullYear()} <span>Tom's Art</span>
      </h5>
      <h5> All Rights Reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--main-white);
  .copy {
    position: relative;
    transform: translateY(18.5%) scale(1.2);
  }
  span {
    color: var(--main-black);
  }
  h5 {
    color: var(--main-black);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
