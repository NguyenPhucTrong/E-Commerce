import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const FavoriteProductItem = ({ id, image, name, price, setHidden }) => {
  const { currency } = useContext(ShopContext);
  const [check, setCheck] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    let arr = JSON.parse(localStorage.getItem("arrCompare"));
    if (check) {
      let newArr = arr.filter((item) => item !== id);
      localStorage.setItem("arrCompare", JSON.stringify(newArr));
      setCheck(false);
    } else {
      if (JSON.parse(localStorage.getItem("arrCompare")).length === 2) {
        console.log("toi da 2");
      } else {
        localStorage.setItem("arrCompare", JSON.stringify([...arr, id]));
        setCheck(true);
      }
    }
    JSON.parse(localStorage.getItem("arrCompare")).length === 2
      ? setHidden(false)
      : setHidden(true);
  };

  return (
    <Link className="mb-5 text-gray-700 cursor-pointer" to={`/product/${id}`}>
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
          className="h-10"
          onClick={(e) => handleCheck(e)}
          src={check ? assets.check_icon : assets.add_icon}
          alt=""
        />
      </div>
    </Link>
  );
};

export default FavoriteProductItem;
