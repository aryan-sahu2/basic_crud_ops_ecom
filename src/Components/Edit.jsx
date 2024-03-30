import Nav from "./Nav";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [products, setproducts] = useContext(ProductContext);
  // console.log(products);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [product, setProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isProductsSet, setIsProductsSet] = useState(false);

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const submitHandler = (data) => {
    console.log(data);

    setProduct({
      id,
      ...data,
    });

    // Mark form as submitted
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && product) {
      // Update local storage
      const updatedProducts = products.map((p) => (p.id == id ? product : p));

      setproducts(updatedProducts);
      setIsProductsSet(true);
    }
  }, [product]);

  // useEffect to update local storage and navigate back
  useEffect(() => {
    if (isProductsSet && product) {
      // Update local storage

      localStorage.setItem("products", JSON.stringify(products));

      // Navigate back
      navigate(-1);
    }
  }, [product, isProductsSet, submitted, products, navigate, id]);

  return (
    <>
      <div className="flex">
        <Nav></Nav>

        <div className="w-full bg-zinc-200 h-screen flex justify-center">
          <div className="w-3/4 px-5  h-screen">
            <h1 className="text-3xl font-semibold my-10">Edit Product</h1>
            <form
              onSubmit={handleSubmit((data) => {
                submitHandler(data);
              })}
            >
              <input
                type="url"
                {...register("image", {
                  required: "Click and enter/edit data here.",
                })}
                placeholder="Image URL"
                className="px-3 py-1 text-md rounded font-semibold w-full mr-1 mb-4"
                defaultValue={product && product.image}
              />
              {errors.image && (
                <p className="px-1 py-1 -translate-y-5 text-sm font-semibold w-full my-1">
                  {errors.image?.message}
                </p>
              )}
              <input
                defaultValue={product && product.title}
                type="text"
                {...register("title", {
                  required: "Click and enter/edit data here.",
                })}
                placeholder="Title"
                className="px-3 py-1 text-md rounded font-semibold w-full mr-1 mb-4"
              />
              {errors.title && (
                <p className="px-1 py-1 text-sm font-semibold w-full my-1 -translate-y-5">
                  {errors.title?.message}
                </p>
              )}
              <div className="flex justify-between flex-wrap">
                <input
                  defaultValue={product && product.price}
                  type="number"
                  {...register("price", {
                    required: "Click and enter/edit data here.",
                  })}
                  placeholder="Price"
                  className="px-3 py-1 text-md rounded font-semibold w-[49%] mb-4"
                />
                {errors.price && (
                  <p className="px-1 py-1 text-sm font-semibold w-full my-1 -translate-y-5">
                    {errors.price?.message}
                  </p>
                )}
                <input
                  defaultValue={product && product.category}
                  type="text"
                  {...register("category", {
                    required: "Click and enter/edit data here.",
                  })}
                  placeholder="Category"
                  className="px-3 py-1 text-md rounded font-semibold w-[49%] mb-4"
                />
                {errors.category && (
                  <p className="px-1 py-1 text-sm font-semibold w-full my-1 -translate-y-5">
                    {errors.category?.message}
                  </p>
                )}
                <input
                  defaultValue={product && product.rating.rate}
                  type="number"
                  {...register("rating.rate", {
                    required: "Click and enter/edit data here.",
                  })}
                  placeholder={`Rating`}
                  className="px-3 py-1 text-md rounded font-semibold w-[49%] mb-4"
                />
                {errors.rating && (
                  <p className="px-1 py-1 text-sm font-semibold w-full my-1 -translate-y-5">
                    {errors.rating?.message}
                  </p>
                )}
                <input
                  defaultValue={product && product.rating.count}
                  type="number"
                  {...register("rating.count", {
                    required: "Click and enter/edit data here.",
                  })}
                  placeholder="Count"
                  className="px-3 py-1 text-md rounded font-semibold w-[49%] mb-4"
                />
                {errors.count && (
                  <p className="px-1 py-1 text-sm font-semibold w-full my-1 -translate-y-5">
                    {errors.count?.message}
                  </p>
                )}
              </div>
              <textarea
                defaultValue={product && product.description}
                type="textarea"
                {...register("description", {
                  required: "Click and enter/edit data here.",
                })}
                placeholder="Description"
                className="px-3 py-1 text-md rounded min-h-fit font-semibold w-full mr-1 mb-4"
              />
              {errors.description && (
                <p className="px-1 py-1 text-sm font-semibold w-full my-1 -translate-y-5">
                  {errors.description?.message}
                </p>
              )}
              <button
                className={`border-blue-500 hover:bg-blue-500 duration-1000 hover:text-white hover:font-semibold transition-all border rounded px-4 py-1`}
                type="submit"
                placeholder="Edit"
              >
                Save This Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
