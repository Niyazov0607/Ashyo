import React from "react";
import Header from "../Header/header";
import Navbar from "../Navbar/navbar";
import Hero from "../Hero/hero";
import Brands from "../Brands/brands";
import Cards from "../Cards/cards";
import CardsTwo from "../CardsTwo/cardsTwo";

const Main = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Hero />
            <Brands />
            <Cards />
            <CardsTwo />
        </div>
    );
};

export default Main;
