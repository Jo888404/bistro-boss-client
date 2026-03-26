import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefService from "./ChefService/ChefService";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="max-w-7xl mx-auto">
        <Category></Category>
        <ChefService></ChefService>
      </div>
    </div>
  );
};

export default Home;
