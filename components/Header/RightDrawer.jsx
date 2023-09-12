import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Menggunakan ikon FaBars dan FaTimes dari react-icons
import "./header.css";

const RightDrawer = ({ isOpen, onClose, children }) => {
  const drawerClassName = isOpen ? "right-drawer open border" : "right-drawer";

  return (
    <div className={drawerClassName}>
      <button className="toggle-button z-10" onClick={onClose}>
        {isOpen ? (
          <FaTimes className="text-black" />
        ) : (
          <FaBars className="text-black" />
        )}{" "}
        {/* Menggunakan ikon FaBars dan FaTimes berdasarkan status drawer */}
      </button>
      {children}
    </div>
  );
};

export default RightDrawer;
