import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import FavoriteProductItem from "../components/FavoriteProductItem";
import CompareView from "../components/CompareView";
import { assets } from "../assets/assets";

const ListFavorited = () => {
  const { products } = useContext(ShopContext);
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  const [showCompareView, setShowCompareView] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [hiddenBtn, setHiddenBtn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("arrFavorite")) {
      JSON.parse(localStorage.getItem("arrFavorite")).length == 0
        ? setShowEmpty(true)
        : setFavoriteProduct(
            products.filter((item) =>
              localStorage.getItem("arrFavorite").includes(item._id)
            )
          );
    } else {
      setShowEmpty(true);
    }
    localStorage.setItem("arrCompare", JSON.stringify([]));
  }, []);
  return (
    <div className="my-10">
      <CompareView
        setShow={() => setShowCompareView(false)}
        show={showCompareView}
      />
      <div className="text-center text-3xl py-8">
        <Title text1={"FAVORITE"} text2={"CLOTHES"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </div>
      <div className={`w-full flex ${showEmpty ? "" : "hidden"}`}>
        <img src={assets.empty_list} alt="" className="h-30 m-auto" />
      </div>
      <div className="flex flex-wrap -mx-2 justify-evenly">
        {favoriteProduct.map((item, index) => (
          <FavoriteProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            setHidden={(value) => setHiddenBtn(value)}
          />
        ))}
      </div>
      <button
        onClick={() => setShowCompareView(true)}
        className={`w-full bg-black text-white py-3 hover:bg-neutral-800 ${
          hiddenBtn ? "hidden" : ""
        }`}
      >
        Compare Product
      </button>
    </div>
  );
};

export default ListFavorited;
