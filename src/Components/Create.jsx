import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Nav from "./Nav";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [rating, setrating] = useState("");
  const [count, setcount] = useState("");
  const product = {
    id: nanoid(),
    image,
    title,
    category,
    price,
    description,
    rating,
    count,
  };
  const submitHandler = (data) => {
    settitle(data.title);
    setimage(data.image);
    setcategory(data.category);
    setprice(data.price);
    setdescription(data.description);
    setrating(data.rating);
    setcount(data.count);
    if (product.title != "") {
      setproducts([...products, product]);
      localStorage.setItem("products", JSON.stringify(products))
      toast.success("Product Added Successfully!")
      navigate("/");
    }
  };

  const [buttonColor, setButtonColor] = useState("");
  const [initialProductsLength, setInitialProductsLength] = useState(0);
  console.log(products);
  useEffect(() => {
    // Store the initial length of products
    setInitialProductsLength(products.length);
  }, []);

  useEffect(() => {
    // Check if length of products array has changed from initial value
    if (
      products.length !== initialProductsLength &&
      initialProductsLength !== 0
    ) {
      // Change button color to green
      setButtonColor(
        "bg-green-500 hover:bg-green-500 font-semibold text-white"
      );
      // Set a timer to revert back to original color after 2 seconds
      const timer = setTimeout(() => {
        setButtonColor("");
      }, 1500);

      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, [products, initialProductsLength]);

  return (
    <>
      <div className="flex ">
        <Nav />

        <div className="w-full bg-zinc-200 h-screen flex justify-center">
          <div className="w-3/4 px-5  h-screen">
            <h1 className="text-3xl font-semibold my-10">Add New Product</h1>
            <form
              onSubmit={handleSubmit((data) => {
                submitHandler(data);
              })}
            >
              <input
                type="url"
                {...register("image", { required: true })}
                placeholder="Image URL"
                className="px-3 py-1 text-md rounded font-semibold w-full mr-1 mb-4"
              />
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Title"
                className="px-3 py-1 text-md rounded font-semibold w-full mr-1 mb-4"
              />
              <div className="flex justify-between flex-wrap">
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="Price"
                  className="px-3 py-1 text-md rounded font-semibold w-[49%] mb-4"
                />
                <input
                  type="test"
                  {...register("category", {
                    required: "Click and enter data here.",
                  })}
                  placeholder="Category"
                  className="px-3 py-1 text-md rounded font-semibold w-[49%] mb-4"
                />{errors.category && (
                  <p className="px-1 py-1 text-sm font-semibold w-full my-1 -translate-y-5">
                    {errors.category?.message}
                  </p>
                )}
                <input
                  type="number"
                  {...register("rating.rate", {
                    required: true,
                  })}
                  placeholder={
                    Object.keys(errors).length === 0
                      ? `Rating`
                      : `Rating should be in between 1 to 5`
                  }
                  className="px-3 py-1 text-md rounded font-semibold w-[49%] mb-4"
                />
                <input
                  type="number"
                  {...register("rating.count", { required: true })}
                  placeholder="Count"
                  className="px-3 py-1 text-md rounded font-semibold w-[49%] mb-4"
                />
              </div>
              <textarea
                type="textarea"
                {...register("description", { required: true })}
                placeholder="Description"
                className="px-3 py-1 text-md rounded font-semibold w-full mr-1 mb-4"
              />
              <button
                className={`border-blue-500 ${buttonColor} hover:bg-blue-500 duration-1000 hover:text-white hover:font-semibold transition-all border rounded px-4 py-1`}
                type="submit"
              >Double Click to Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
