import { useState, Component, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";

import image2 from "../assets/screenshots/image2.png"
import image3 from "../assets/screenshots/image3.png"
import image4 from "../assets/screenshots/image4.png"
import image5 from "../assets/screenshots/image5.png"

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
        "100% free and open source",
        "Show only what you want to see",
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
        </Swiper>
      </>
    );
  }
}
