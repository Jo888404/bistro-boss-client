import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../../assets/home/01.jpg";
import img2 from "../../../../assets/home/02.jpg";
import img3 from "../../../../assets/home/03.png";
import img4 from "../../../../assets/home/04.jpg";
import img5 from "../../../../assets/home/05.png";
import img6 from "../../../../assets/home/06.png";

const Banner = () => {
  return (
    <div className="[&_.thumbs-wrapper]:flex [&_.thumbs-wrapper]:justify-center">
      <Carousel
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
      >
        <div className="md:h-155">
          <img src={img1} className="h-full object-cover" />
        </div>

        <div className="md:h-155">
          <img src={img2} className="h-full object-cover" />
        </div>

        <div className="md:h-155">
          <img src={img3} className="h-full object-cover" />
        </div>

        <div className="md:h-155">
          <img src={img4} className="h-full object-cover" />
        </div>

        <div className="md:h-155">
          <img src={img5} className="h-full object-cover" />
        </div>

        <div className="md:h-155">
          <img src={img6} className="h-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
