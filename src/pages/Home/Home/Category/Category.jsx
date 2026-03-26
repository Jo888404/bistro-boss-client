import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import slider1 from "../../../../assets/home/slide1.jpg";
import slider2 from "../../../../assets/home/slide2.jpg";
import slider3 from "../../../../assets/home/slide3.jpg";
import slider4 from "../../../../assets/home/slide4.jpg";
import slider5 from "../../../../assets/home/slide5.jpg";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <div className="w-full py-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <img src={slider1} className="w-full h-50 md:h-62.5 object-cover" />
            <h2 className="absolute uppercase bottom-4 left-1/2 -translate-x-1/2 text-white text-lg md:text-xl font-bold">
              Salads
            </h2>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img src={slider2} className="w-full h-50 md:h-62.5 object-cover" />
            <h2 className="absolute uppercase bottom-4 left-1/2 -translate-x-1/2 text-white text-lg md:text-xl font-bold">
              Soups
            </h2>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img src={slider3} className="w-full h-50 md:h-62.5 object-cover" />
            <h2 className="absolute uppercase bottom-4 left-1/2 -translate-x-1/2 text-white text-lg md:text-xl font-bold">
              Pizzas
            </h2>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img src={slider4} className="w-full h-50 md:h-62.5 object-cover" />
            <h2 className="absolute uppercase bottom-4 left-1/2 -translate-x-1/2 text-white text-lg md:text-xl font-bold">
              Desserts
            </h2>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img src={slider5} className="w-full h-50 md:h-62.5 object-cover" />
            <h2 className="absolute uppercase bottom-4 left-1/2 -translate-x-1/2 text-white text-lg md:text-xl font-bold">
              Salads
            </h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
