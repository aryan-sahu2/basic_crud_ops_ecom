import React from "react";
import Nav from "./Nav";
import CardDetails from "./CardDetails";

const Details = () => {
  return (
    <>
      <div className="flex ">
        <Nav />

        <div className="bg-zinc-200 h-screen flex justify-start items-center w-full overflow-y-auto overflow-x-hidden">
          {/* Cards Container */}
          <div className="w-[80%] flex rounded bg-zinc-100 flex-col gap-5 shadow h-fit m-10">
            {/* Card Details */}
            <CardDetails/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
