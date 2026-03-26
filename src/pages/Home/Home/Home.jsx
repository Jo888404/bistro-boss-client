import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefService from "./ChefService/ChefService";
import PopularMenu from "./PopularMenu/PopularMenu";

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
      </div>
    </div>
  );
};

export default Home;
