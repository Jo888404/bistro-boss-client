import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="bg-[url('/images/featured.jpg')] lg:pt-14 pt-2 lg:pb-20 pb-2 bg-fixed">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="hero  bg-slate-500">
        <div className="hero-content flex-col lg:gap-20 lg:flex-row max-w-5xl">
          <div className="flex-1">
            <img src={featuredImg} className=" rounded-lg shadow-2xl" />
          </div>
          <div className="flex-1 text-center lg:text-start ">
            <h1 className="text-2xl font-bold">March 20, 2023</h1>
            <h1 className="text-2xl font-bold">WHERE CAN I GET SOME?</h1>
            <p className="lg:py-6 py-2 w-80">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className=" lg:my-10">
              <button className="uppercase tracking-widest text-white font-medium pb-2 border-b-[3px] border-white rounded-b-lg cursor-pointer transform hover:scale-105 hover:border-white hover:text-white transition duration-300">
                read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
