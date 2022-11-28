import React from 'react';
import Slider from '../slider/Slider';
import Style from "../hotelsAndCity/_pages.module.css";
import BookingDeals from './../hotelsAndCity/BookingDeals';


const Home = () => {
  return (
    <section id={Style.pageBlock}>
      <article>
        <Slider />
        <BookingDeals/>
      </article>
    </section>
  );
}

export default Home
