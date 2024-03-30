import React, { useContext } from "react";
import Nav from "./Nav";
import Cards from "./Cards";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Home = () => {
  const [products] = useContext(ProductContext);

  return products ? (
    <>
      {/* Home page */}
      <div className="flex ">
        <Nav />

        <div className="bg-zinc-200 justify-center flex h-screen w-full overflow-y-auto overflow-x-hidden">
          <div className="w-[100%] min-h-full justify-center flex">
            <div className="w-[95%]  justify-start flex flex-wrap gap-3 shadow h-fit m-auto">
              <Cards></Cards>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <Loading />
    </>
  );
};

export default Home;
