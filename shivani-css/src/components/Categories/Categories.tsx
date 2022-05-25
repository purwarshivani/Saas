import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import cat1 from "../../assets/images/cat-1.jpg";
import cat2 from "../../assets/images/cat-2.jpg";
import cat3 from "../../assets/images/cat-3.jpg";
import cat4 from "../../assets/images/cat-4.jpg";
import cat5 from "../../assets/images/cat-5.jpg";
import cat6 from "../../assets/images/cat-6.jpg";

const Categories = () => {
  return (
    <div className="">
      <div className="category-grid sideP">
        <CategoryCard title="Mens Clothes" image={cat1} />
        <CategoryCard title="Mens Clothes" image={cat2} />
        <CategoryCard title="Mens Clothes" image={cat3} />
        <CategoryCard title="Mens Clothes" image={cat4} />
        <CategoryCard title="Mens Clothes" image={cat5} />
        <CategoryCard title="Mens Clothes" image={cat6} />
      </div>
    </div>
  );
};

export default Categories;
