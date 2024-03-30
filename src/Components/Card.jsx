import React from "react";

const Card = ({values}) => {
    // console.log(values);
  return (
    <>
      {/* Card */}
      <div className="w-60 min-h-[45vh] bg-zinc-100 rounded m-2 p-2">
        <img
          className="h-60 object-contain rounded w-full mb-3 hover:scale-110 hover:rounded-3xl transition-all bg-white p-2"
          src={values.image}
          alt=""
        />
        <div className="flex gap-1 h-fit items-start  justify-between">
          <h1 className="shadow p-2 text-sm rounded-md font-semibold hover:text-blue-500 hover:scale-105 text-md">
            {values.title}
          </h1>
          <h3 className="shadow p-2 rounded-md text-nowrap hover:text-emerald-800 hover:scale-105 font-semibold text-md">
          {values.price} ₹
          </h3>
        </div>
      </div>
    </>
  );
};

export default Card;
