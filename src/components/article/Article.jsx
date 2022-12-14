import React from "react";
import "./Article.css";

const Article = () => (
  <div
    className="header section__padding products__main-div header section__padding custo section__margin"
    id="article"
  >
    <div className="article__layout">
      <div className="custo-feature">
        <div className="feature-image" alt="cover"></div>
      </div>
      <div className="custo-heading">
        <h1 className="gradient__text">Custom Clothing</h1>
        <h2 className="gradient__text">
          Wholesale Apparel Printed With Your Logo
        </h2>
        <p>
          Shop our unique collection of custom clothing items printed or
          embroidered with your logo,artwork or exclusive images.At Custo Made
          Enjoy Guaranteed low prices and free shipping on most orders!
        </p>
      </div>
    </div>
  </div>
);

export default Article;
