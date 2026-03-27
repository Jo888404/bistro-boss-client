import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 lg:mt-20 mt-14 mx-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="text-center my-10">
        <button className="uppercase tracking-widest text-gray-700 font-medium pb-2 border-b-[3px] border-gray-700 rounded-b-lg cursor-pointer transform hover:scale-105 hover:border-black hover:text-black transition duration-300">
          View Full Menu
        </button>
      </div>
      <div className="flex items-center justify-center lg:mt-24 w-full lg:h-62.5 h-32 bg-black rounded-lg">
        <h3 className="lg:text-5xl text-2xl font-semibold">
          Call Us: +88 0192345678910
        </h3>
      </div>
    </section>
  );
};

export default PopularMenu;
