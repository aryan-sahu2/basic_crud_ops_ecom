import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const CardDetails = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();
  const deleteHandler = (id) => {
    const filteredProducts = products.filter((i) => i.id !== id);
    setproducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate("/");
  };

  useEffect(() => {
    if (!singleProduct) {
      setSingleProduct(products.filter((p) => p.id == id)[0]);
    }
  }, [id, singleProduct, products]);

  return singleProduct ? (
    <>
      <div className="flex bg-zinc-50 shadow rounded-md p-3 items-start ">
        <img
          className="h-60 object-contain hover:scale-150 hover:rounded-xl transition-all bg-white"
          src={singleProduct.image}
          alt=""
        />
        <div className="p-4 ml-5">
          <h1 className="font-semibold text-2xl m-1">{singleProduct.title}</h1>
          <h2 className="font-semibold text-zinc-400 text-xl m-1">
            Rating : {singleProduct.rating.rate} | Available : {singleProduct.rating.count}
            
          </h2>
          <p className="font-base text-md m-1">{singleProduct.description}</p>
          <h4 className="font-semibold text-xl mb-3 m-1">
            Price : {singleProduct.price} INR
          </h4>
          <Link
            to={`/edit/${singleProduct.id}`}
            className="w-30 bg-slate-900 mr-4 text-white font-semibold px-3 py-1 rounded text-md"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteHandler(singleProduct.id)}
            className="w-30 bg-red-600 mr-4 text-white font-semibold px-3 py-1 rounded text-md"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CardDetails;
