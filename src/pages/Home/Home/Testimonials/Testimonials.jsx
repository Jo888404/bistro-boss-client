import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <>
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper max-w-5xl"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center space-y-4 text-center mx-20 my-10">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating || 0}
                  readOnly
                />
                <FaQuoteLeft className="text-5xl text-black" />

                <p>{review.details}</p>
                <h3 className="text-3xl font-medium text-[#CD9003]">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonials;
