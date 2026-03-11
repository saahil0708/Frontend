import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./SpeakersSlider.css";

import speaker1 from "../photos/speaker.png";
import speaker2 from "../photos/speaker.png";
import speaker3 from "../photos/speaker.png";
import speaker4 from "../photos/speaker.png";
import speaker5 from "../photos/interspeaker.png"; 

const speakers = [
  {
    name: "Jeetu Patel",
    role: "President & Chief Product Officer, Cisco",
    img: speaker1,
  },
  {
    name: "Jensen Huang",
    role: "Founder & CEO, NVIDIA",
    img: speaker2,
  },
  {
    name: "Julie Sweet",
    role: "Chair & CEO, Accenture",
    img: speaker3,
  },
  {
    name: "Gautam Adani",
    role: "Director, Adani Digital Labs",
    img: speaker4,
  },
  {
    name: "Gautam Adani",
    role: "Director, Adani Digital Labs",
    img: speaker5,
  },
];

// adding auto play functionality with smooth transition and infinite loop
const autoPlayConfig = {
  delay: 900,
  disableOnInteraction: false,
};

const SpeakersSlider = () => {
  return (
    <section className="speakers-section">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        loop={true}
        autoplay={autoPlayConfig}
        speed={1500}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1296: { slidesPerView: 4 },
        }}
      >
        {speakers.map((speaker, index) => (
          <SwiperSlide key={index}>
            <div className="speaker-card">
              <div className="card-content">
                <h3>{speaker.name}</h3>
                <p>{speaker.role}</p>
              </div>

              <div className="image-wrapper">
                <img src={speaker.img} alt={speaker.name} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SpeakersSlider;