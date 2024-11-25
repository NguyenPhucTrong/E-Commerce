import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("arrFavorite")) {
      if (localStorage.getItem("arrFavorite").includes(id)) {
        setFavorite(true);
      }
    } else {
      localStorage.setItem("arrFavorite", JSON.stringify([]));
    }
  }, []);

  const handleFavorite = (e) => {
    e.preventDefault();
    let arr = JSON.parse(localStorage.getItem("arrFavorite"));
    if (favorite) {
      let newArr = arr.filter((item) => item != id);
      localStorage.setItem("arrFavorite", JSON.stringify(newArr));
      setFavorite(false);
    } else {
      localStorage.setItem("arrFavorite", JSON.stringify([...arr, id]));
      setFavorite(true);
    }
  };

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <div className="flex justify-between">
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
        <img
          src={favorite ? assets.favorited_icon : assets.favorite_icon}
          className="h-3"
          alt=""
          onClick={(e) => handleFavorite(e)}
        />
      </div>
    </Link>
  );
};

export default ProductItem;
