import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const CompareView = ({ setShow, show }) => {
  let [arr, setArr] = useState([]);
  const { currency, products } = useContext(ShopContext);
  useEffect(() => {
    setArr(
      products.filter((item) =>
        JSON.parse(localStorage.getItem("arrCompare")).includes(item._id)
      )
    );
  }, [show]);
  return (
    <div
      onClick={() => setShow()}
      className={`fixed w-full h-full top-0 right-0 bg-black bg-opacity-15 content-center justify-items-center ${
        show ? "" : "hidden"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[96vh] h-[96vh] bg-white rounded-lg"
      >
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 border-b"></th>
              <th className="py-2 px-4 border-b">First Product</th>
              <th className="py-2 px-4 border-b">Second Product</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b">
                <img src={arr[0]?.image[0]} alt="" />
              </td>
              <td className="py-2 px-4 border-b">
                <img src={arr[1]?.image[0]} alt="" />
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">Name</td>
              <td className="py-2 px-4 border-b">{arr[0]?.name}</td>
              <td className="py-2 px-4 border-b">{arr[1]?.name}</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">Price</td>
              <td className="py-2 px-4 border-b">
                {currency}
                {arr[0]?.price}
              </td>
              <td className="py-2 px-4 border-b">
                {currency}
                {arr[1]?.price}
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">Category</td>
              <td className="py-2 px-4 border-b">{arr[0]?.category}</td>
              <td className="py-2 px-4 border-b">{arr[1]?.category}</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">Subcategory</td>
              <td className="py-2 px-4 border-b">{arr[0]?.subCategory}</td>
              <td className="py-2 px-4 border-b">{arr[1]?.subCategory}</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">Sizes</td>
              <td className="py-2 px-4 border-b">{arr[0]?.sizes.join(", ")}</td>
              <td className="py-2 px-4 border-b">{arr[1]?.sizes.join(", ")}</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">Best Seller</td>
              <td className="py-2 px-4 border-b">
                {arr[0]?.bestseller ? "Yes" : "No"}
              </td>
              <td className="py-2 px-4 border-b">
                {arr[1]?.bestseller ? "Yes" : "No"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompareView;
