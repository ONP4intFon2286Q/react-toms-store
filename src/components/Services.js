import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>Finest Artwork</h3>
          <p>
            Art for sale online: photographs and paintings can be purchased with
            guaranteed quality and ease
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className={`icon iconColor${id}`}>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--main-black);
  }
  padding: 5rem 0;

  background: #fff;

  .section-center {
    width: 100%;
    height: 100%;
  }
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--main-black);
  }
  .services-center {
    margin-top: 4rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .service {
    background: var(--main-white);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 100%;
    width: 360px;
    height: 360px;
    p {
      color: var(--main-black);
    }
  }

  .icon {
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
  }

  .iconColor1 {
    color: var(--main-red);
  }
  .iconColor2 {
    color: var(--main-yellow);
  }
  .iconColor3 {
    color: var(--main-blue-paint);
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: #fff;
    color: var(--main-black);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
