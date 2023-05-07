import logo from "../assets/logo.png";
import { BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCartAdd } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <div className="container bg-white">
        <div className="flex justify-around py-6">
          <div className="logo h-8 w-8 flex gap-2">
            <img src={logo} alt="logo" />
            <h2 className="text-green-800 font-bold text-2xl my-auto">
              Shopcart
            </h2>
          </div>
          <ul className="flex gap-6 my-auto text-gray-800">
            <li className="flex gap-2">
              Categories{" "}
              <span className="my-1">
                <BsChevronDown />
              </span>
            </li>
            <li>Deals</li>
            <li>What&apos;s New</li>
            <li>Delivery</li>
          </ul>
          <div className="flex border bg-gray-200 rounded-full px-4 my-auto">
            <input
              type="search"
              placeholder="Search Product"
              className="focus:outline-none py-1 bg-gray-200"
            />
            <span className="my-auto text-gray-600">
              <BiSearch className="" />
            </span>
          </div>
          <ul className="flex gap-4 my-auto">
            <li className="flex gap-1">
              <span className="my-1">
                <BsFillPersonFill />
              </span>{" "}
              Account
            </li>
            <li className="flex gap-1">
              <span className="my-1">
                <BiCartAdd />
              </span>{" "}
              Cart
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
