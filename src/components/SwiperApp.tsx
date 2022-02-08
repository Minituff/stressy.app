import { useState, Component, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";

import image2 from "../assets/screenshots/image2.png"
import image3 from "../assets/screenshots/image3.png"
import image4 from "../assets/screenshots/image4.png"
import image5 from "../assets/screenshots/image5.png"
import image6 from "../assets/screenshots/image6.png"
import image7 from "../assets/screenshots/image7.png"
import image8 from "../assets/screenshots/image8.png"

import "swiper/css";
import "swiper/css/effect-cards";

import "../components/SwiperApp.css"


type AppProps = {
  message?: string;
};

type AppState = {
  title: string;
  titles: string[]
};


export class SwiperApp extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      title: "Share with your friends",
      titles: [
        "Share with your friends",
        "Track headaches and find trends",
        "100% free with no ads",
        "Customize your calendar",
        "Complete control of your profile",
        "Beautiful light and dark themes",
        "Deep customization",
      ],
    };

    this.changeTitle = this.changeTitle.bind(this) 
  }

  changeTitle(swiper: any) {
    this.setState({
      title: this.state.titles[swiper.activeIndex]
    })
  }

  render() {
    return (
      <>
        <h3>{this.state.title}</h3>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCards]}
          centeredSlides={true}
          className="mySwiper"
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          navigation={true}
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={this.changeTitle}
        >
          <SwiperSlide> <img src={image2} alt='image2' className='swiper-img' /> </SwiperSlide>
          <SwiperSlide> <img src={image3} alt='image2' className='swiper-img' /> </SwiperSlide>
          <SwiperSlide> <img src={image4} alt='image4' className='swiper-img' /> </SwiperSlide>
          <SwiperSlide> <img src={image5} alt='image5' className='swiper-img' /> </SwiperSlide>
          <SwiperSlide> <img src={image6} alt='image6' className='swiper-img' /> </SwiperSlide>
          <SwiperSlide> <img src={image7} alt='image7' className='swiper-img' /> </SwiperSlide>
          <SwiperSlide> <img src={image8} alt='image8' className='swiper-img' /> </SwiperSlide>
        </Swiper>
      </>
    );
  }
}
