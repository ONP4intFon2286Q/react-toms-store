import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
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
    icon: <GiCompass />,
    title: "mission",
    text: "Tom's Art believes that the digital world is an incredible tool for buying art, spreading art around the world and allowing people to purchase pieces that they love, whether it is by an emerging African artist or a more established contemporary American painter or even a rising star of street art.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Buying art made easy: Tom's Art is an online gallery for contemporary art that allows collectors and art lovers alike to buy original works of art in complete security from nationally recognized artists.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "From abstract canvases, figurative paintings, drawings or even street art and graffiti, we offer an international selection of work in a variety of styles and techniques. SINGULART is also helping emerging artists from around the globe to sell their works to art lovers.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
