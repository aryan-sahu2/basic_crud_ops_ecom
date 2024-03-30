import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Nav = () => {
  const [products] = useContext(ProductContext);
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };
  const { search, pathname } = useLocation();

  let distinct_category = products
    .map((product) => product.category)
    .filter((value, index, self) => self.indexOf(value) === index);
  
    // console.log(distinct_category)

  return (
    <>
      {/* navigation part */}
      <div className="w-fit h-screen shadow flex flex-col items-center ">
        {(pathname != "/" || search.length > 0) && (
          <Link to="/">
            <div className="w-30 bg-sky-500 mt-10  text-white font-semibold px-3 py-1 rounded text-xl  ">
              Home
            </div>
          </Link>
        )}
        <Link to="/create">
          <div className="w-[30] bg-sky-500 mt-10  text-white font-semibold px-3 py-1 rounded text-xl  ">
            Add New Product
          </div>
        </Link>

        <hr className="my-3 w-[80%] " />
        <div className="w-[80%] mx-5 text-nowrap text-xl mb-3 font-semibold p-2">
          Category Filter
        </div>

        {distinct_category.map((item, index) => (
          <Link
            to={`/?category=${item}`}
            key={index}
            className="flex w-[80%] px-2  mx-5 items-center gap-2"
          >
            <span
              style={{ backgroundColor: color() }}
              className={`rounded-full w-[15px]  flex-shrink-0 h-[15px]`}
            ></span>
            <h3 className=" font-semibold text-md flex-shrink-0 text-nowrap">
              {item}
            </h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Nav;
