// src/Products.js

import { useState } from "react";
import { BeeProducts } from "./BeeProducts";
import { AirProducts } from "./AirProducts";
import { BusProducts } from "./BusProducts";

function Products() {
  const [visibleProduct, setVisibleProduct] = useState(null);
  const [visibleDetail, setVisibleDetail] = useState(null);

  const toggleVisibility = (productType) => {
    setVisibleProduct((prev) => (prev === productType ? null : productType));
    setVisibleDetail(null)
  };

  const toggleDetailVisibility = (detailType) => {
    setVisibleDetail((prev) => (prev === detailType ? null : detailType));
  };

  return (
    <div>
      <div className="products">
        <TisBus
          src={`images/bus.png`}
          isVisible={visibleProduct === "bus"}
          toggleVisibility={() => toggleVisibility("bus")}
        />
        <TisAir
          src={`images/air.png`}
          isVisible={visibleProduct === "air"}
          toggleVisibility={() => toggleVisibility("air")}
        />
        <TisBee
          src={`images/bee.png`}
          isVisible={visibleProduct === "bee"}
          toggleVisibility={() => toggleVisibility("bee")}
        />
      </div>
      {visibleProduct === "air" && (
        <AirProducts
          toggleDetailVisibility={toggleDetailVisibility}
          visibleDetail={visibleDetail}
        />
      )}

      {visibleProduct === "bus" && (
        <BusProducts
          toggleDetailVisibility={toggleDetailVisibility}
          visibleDetail={visibleDetail}
        />
      )}

      {visibleProduct === "bee" && (
        <BeeProducts
          toggleDetailVisibility={toggleDetailVisibility}
          visibleDetail={visibleDetail}
        />
      )}
    </div>
  );
}

export default Products;

function TisBus({ src, isVisible, toggleVisibility }) {
  return (
    <div onClick={toggleVisibility} style={{ cursor: "pointer" }}>
      <img
        src={src}
        alt="Bus"
        style={{ opacity: isVisible ? 1 : 0.5, transition: "opacity 0.3s" }}
      ></img>
    </div>
  );
}

function TisBee({ src, isVisible, toggleVisibility }) {
  return (
    <div onClick={toggleVisibility} style={{ cursor: "pointer" }}>
      <img
        src={src}
        alt="Bee"
        style={{ opacity: isVisible ? 1 : 0.5, transition: "opacity 0.3s" }}
      ></img>
    </div>
  );
}

function TisAir({ src, isVisible, toggleVisibility }) {
  return (
    <div onClick={toggleVisibility} style={{ cursor: "pointer" }}>
      <img
        src={src}
        alt="Air"
        style={{ opacity: isVisible ? 1 : 0.5, transition: "opacity 0.3s" }}
      ></img>
    </div>
  );
}
