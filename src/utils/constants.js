import React from "react";
import { GiLargePaintBrush, GiPaintBucket } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiLargePaintBrush />,
    title: "Who",
    text: "Tom's Art believes that the digital world is an incredible tool for buying art, spreading art around the world and allowing people to purchase pieces that they love.",
  },
  {
    id: 2,
    icon: <GiPaintBucket />,
    title: "We",
    text: "Buying art made easy: Tom's Art is an online gallery for contemporary art that allows collectors and art lovers alike to buy original works of art in complete security.",
  },
  {
    id: 3,
    icon: <FaPaintBrush />,
    title: "Are",
    text: "From abstract canvases, figurative paintings, drawings or even street art and graffiti, we offer an international selection of work in a variety of styles and techniques.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
