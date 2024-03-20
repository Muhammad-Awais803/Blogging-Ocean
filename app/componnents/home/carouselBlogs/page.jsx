"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopTrendingCategories from '../toptrendingcategories/page';

const CarouselBlogs = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1920 },
          items: 5
        },
        xl: {
          breakpoint: { max: 1919, min: 1440 },
          items: 4
        },
        lg: {
          breakpoint: { max: 1439, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1020, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='w-full'>
        <div style={{ position: "" }} className='h-[200px] w-full'>
        <Carousel responsive={responsive} >
          <TopTrendingCategories image="/travelling.jpg"/>
          <TopTrendingCategories image="/art.jpg"/>
          <TopTrendingCategories image="/globe.jpg"/>
          <TopTrendingCategories image="/enjoying.jpg"/>
          <TopTrendingCategories image="/ai2.jpg"/>
          <TopTrendingCategories image="/art.jpg"/>
          <TopTrendingCategories image="/globe.jpg"/>
          <TopTrendingCategories image="/enjoying.jpg"/>

          
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselBlogs
