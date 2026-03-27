import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefService from "./ChefService/ChefService";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="max-w-7xl mx-auto">
        <Category></Category>
        <ChefService></ChefService>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
