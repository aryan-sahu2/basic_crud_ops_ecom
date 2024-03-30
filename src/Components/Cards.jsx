import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Cards = () => {
  const [products] = useContext(ProductContext);

  const { search } = useLocation();
  const [filteredProducts, setfilteredProducts] = useState([]);
  const category = decodeURIComponent(search.split("=")[1]);
  
  const getProductCategory = async () => {
    try {
      // const { data } = await axios.get(`/products/category/${category}`);
      const data = products.filter((p)=>p.category == category)
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    category != "undefined"
      ? getProductCategory()
      : setfilteredProducts(products);
  }, [category, products]);

  console.log(filteredProducts);

  return (
    <>
      {filteredProducts.map((item, index) => {
        return (
          <Link key={index} to={`/details/${item.id}`}>
            <Card key={index} values={item} />
          </Link>
        );
      })}
    </>
  );
};

export default Cards;
