import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const AdminNavBar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 w-full justify-center">
        {" "}
        {/* Căn giữa phần tử */}
        <NavLink to="/admin/product">
          <li className="flex flex-col items-center gap-1 cursor-pointer">
            <p>PRODUCT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </li>
        </NavLink>
        <NavLink to="/admin/order">
          <li className="flex flex-col items-center gap-1 cursor-pointer">
            <p>ORDER</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminNavBar;
