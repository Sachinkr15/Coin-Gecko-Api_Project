import React from 'react';
import  BannerImage from "../../assets/banner2.jpg";
// import Carousel from './Carousel';

function Banner() {
    
  return (

    <>
     <div className="sm:block hidden">
    <img src={BannerImage}
    className="h-[25rem] w-full"/>
    <div className="absolute md:top-28 lg:top-26 top-24 right-0 left-0 text-center  ">
        <h1 className="text-2xl md:text-5xl  text-yellow-400 font-semibold pb-4">
            Crypto Tracker
        </h1>
        <p className="text-sm text-amber-400 ">Get all info regarding cryptocurrencies</p>
</div>
</div>


    </>
   
)
}

export default Banner;
