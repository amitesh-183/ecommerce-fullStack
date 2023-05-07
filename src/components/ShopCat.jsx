import s1 from "../assets/asset20.png";
import s2 from "../assets/asset21.png";
import s3 from "../assets/asset22.png";
import s4 from "../assets/asset23.png";
import s5 from "../assets/asset24.png";
import s6 from "../assets/asset25.png";
import Heading from "./Heading";
import "../styles/shopcat.css";

const ShopCat = () => {
  const shopByCategory = [
    {
      title: "Furniture",
      img: s1,
    },
    {
      title: "Hand Bag",
      img: s2,
    },
    {
      title: "Books",
      img: s3,
    },
    {
      title: "Tech",
      img: s4,
    },
    {
      title: "Sneakers",
      img: s5,
    },
    {
      title: "Travel",
      img: s6,
    },
  ];

  return (
    <div>
      <div className="container py-10">
        <Heading />
        <div className=" flex justify-center py-8 text-center">
          {shopByCategory.map((item, index) => (
            <div
              key={index}
              className="shop-cat-container overflow-hidden flex rounded-xl mx-3 justify-center border border-blue-100"
            >
              <h1 className=" overflow-auto z-10 absolute text-2xl py-3 font-semibold text-white">
                {item.title}
              </h1>
              <img
                className="shop-cat-img rounded-xl bg-cover duration-700"
                src={item.img}
                alt="category"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCat;
