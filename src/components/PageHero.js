import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--main-white);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--main-gray);

  a {
    color: var(--main-black);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--main-rollover);
  }
`;

export default PageHero;
