import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import image2 from "../assets/screenshots/image2.png"
import image3 from "../assets/screenshots/image3.png"
import image4 from "../assets/screenshots/image4.png"
import image5 from "../assets/screenshots/image5.png"

import "swiper/css";
import "swiper/css/effect-cards";

import "../components/SwiperApp.css"

export const SwiperApp = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={image2} alt='image2' className='swiper-img' /> </SwiperSlide>
        <SwiperSlide> <img src={image3} alt='image2' className='swiper-img' /> </SwiperSlide>
        <SwiperSlide> <img src={image4} alt='image4' className='swiper-img' /> </SwiperSlide>
        <SwiperSlide> <img src={image5} alt='image5' className='swiper-img' /> </SwiperSlide>
      </Swiper>
    </>
  );
};
