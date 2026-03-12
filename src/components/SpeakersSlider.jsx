import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SpeakersSlider.css";

const SpeakersSlider = ({ speakers }) => {
  return (
    <div className="speakers-slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="speakers-swiper-editorial"
      >
        {speakers.map((speaker) => (
          <SwiperSlide key={speaker.id}>
            <div className="speaker-card-editorial">
              <div className="speaker-image-wrapper-ed">
                <div className="speaker-category-badge">{speaker.category}</div>
                <img src={speaker.image} alt={speaker.name} className="speaker-img-ed" />
              </div>
              
              <div className="speaker-info-ed">
                <h3 className="speaker-name-ed">{speaker.name}</h3>
                <p className="speaker-role-ed">{speaker.role}</p>
                <p className="speaker-bio-ed">{speaker.bio}</p>
                
                <a 
                  href={speaker.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="speaker-linkedin-ed"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpeakersSlider;
