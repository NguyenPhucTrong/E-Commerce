import React, { useState } from "react";

const ProductPage = () => {
  //Sample Products
  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !price || !quantity || !type || !image) {
      alert("Vui lòng điền đầy đủ thông tin sản phẩm!");
      return;
    }
    const newProduct = {
      productId: Math.floor(Math.random() * 1000000), // ID random number
      productName,
      price,
      quantity,
      type,
      image,
    };

    setProducts([...products, newProduct]);

    setProductName("");
    setPrice("");
    setQuantity("");
    setType("");
    setImage(null);
    setIsFormVisible(false);
  };

  //Upload product image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <h1 className="prata-regular text-2xl sm:py-3 leading-relaxed">
        List Products
      </h1>
      <div className="flex flex-col sm:flex-row border border-gray-400 ">
        <div className="mb-5">
          <table className="min-w-full table-auto border-separate">
            <thead>
              <tr>
                <th className="px-[70px] py-5 text-left">Image</th>
                <th className="px-[100px] py-5 text-left">Name</th>
                <th className="px-[100px] py-5 text-left">Price</th>
                <th className="px-[100px] py-5 text-left">Quantity</th>
                <th className="px-[100px] py-5 text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="px-4 py-5">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.productName}
                        className="w-12 h-12 object-cover"
                      />
                    ) : (
                      <p>No Image</p>
                    )}
                  </td>
                  <td className="px-[80px] py-2">{product.productName}</td>
                  <td className="px-[100px] py-2">{product.price}</td>
                  <td className="px-[100px] py-2">{product.quantity}</td>
                  <td className="px-[100px] py-2">{product.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        {isFormVisible ? "Hủy Thêm Sản Phẩm" : "Thêm Sản Phẩm Mới"}
      </button>

      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded-md shadow-lg">
            <div className="flex flex-row justify-between">
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                ADD NEW PRODUCT
              </h2>
              <button
                onClick={() => setIsFormVisible(false)}
                className="hover:text-gray-700 text-xl mt-[-15px]"
              >
                X
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Type
                </label>
                <input
                  type="text"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  className="w-full py-2 border border-gray-300 rounded-md"
                  accept="image/*"
                />
                {image && (
                  <img
                    src={image}
                    alt="Preview"
                    className="w-24 h-24 mt-2 object-cover"
                  />
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white font-light px-8 py-2 mt-4"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
