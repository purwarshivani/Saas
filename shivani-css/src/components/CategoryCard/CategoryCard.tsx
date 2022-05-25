import React from "react";

const CategoryCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="category-card border">
      <p className="category-card-subtitle ">15 Products</p>
      <div className="category-card">
        <img className="category-card-image" src={image} alt="" />
      </div>
      <h5 className="category-card-title">{title}</h5>
    </div>
  );
};

export default CategoryCard;
