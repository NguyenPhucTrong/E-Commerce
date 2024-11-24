import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const { currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProduct = () => {
    console.log("Products từ context:", products);
    console.log("Loại dữ liệu của products:", typeof products);

    const product = products.find((product) => product._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0])
      console.log(product);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-2 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row" >
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.75%] w-full ">
            {
              productData.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={productData.name}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={() => setImage(img)}
                />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt={productData.name} className="w-full h-auto" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt=" star" className="w-3 5" />
            <img src={assets.star_icon} alt=" star" className="w-3 5" />
            <img src={assets.star_icon} alt=" star" className="w-3 5" />
            <img src={assets.star_icon} alt=" star" className="w-3 5" />
            <img src={assets.star_dull_icon} alt=" star" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8" >
            <p>
              Select Size
            </p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className={"bg-black text-white rounded-full py-3 px-8 text-sm active:bg-gray-500 "}>Add to cart</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>7 days return policy</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">
            Description
          </b>
          <p className="border px-5 py-3 text-sm"> Reviews (122) </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 test-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. E-commerce websites allow users to browse products, add them to their cart, and make a purchase using a secure payment gateway. E-commerce websites are designed to be user-friendly and easy to navigate, making it simple for users to find the products they want to buy.
          </p>
          <p>
            E-commerce websites are designed to help users find the products they want to buy online. They often include a search bar, a list of categories, a shopping cart, and a payment gateway. Users can search for products from different categories, add them to their cart, and pay for them online.
          </p>
          <p>
            E-commerce websites have become increasingly popular over the years. They are a convenient way for users to shop for products and services from the comfort of their own homes. E-commerce websites are also a great way for businesses to reach a wider audience and increase their sales.
          </p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div >
  ) : <div className="opacity-0"> </div>;
};

export default Product;