import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpg";
import heroBcg2 from "../assets/hero-bcg-2.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>The Best Artists</h1>
        <p>
          Why buy photographs or paintings online? Because we carefully select
          artists from around the world using our rigorous guidelines: number of
          exhibitions, artist residencies, awards and inclusion in public and
          private collections. We make the whole experience easy by taking care
          of the delivery, the customs and the framing of the work.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--main-black);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
      box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.35);
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 390px;
      transform: translateX(-30%) translateY(25%);
      border-radius: var(--radius);
      box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.35);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 90%;
      height: 90%;
      background: var(--main-yellow);
      bottom: 0%;
      left: -15%;
      border-radius: 100%;
      box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.35);
    }
  }
`;

export default Hero;
