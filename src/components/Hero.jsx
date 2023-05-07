import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-around pt-8 bg-[#fcf0e4] mx-28">
          <div className="">
            <h1 className="text-green-900 font-bold text-5xl py-6">
              Grab Upto 50% Off On <br /> Selected Headphone
            </h1>
            <button className="bg-green-800 rounded-full ml-4 px-4 py-1 text-white">
              Buy Now
            </button>
          </div>
          <div className="">
            <img src={hero} alt="hero" className="h-72" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
