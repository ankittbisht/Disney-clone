import React from "react";
import "../App.css";

const ShimmerCard = ({ iterations }) => {
  const shimmerCards = [...Array(iterations)].map((_, index) => (
    <div className="card" key={index}>
      <div className="shimmerBG media shimmer"></div>
      <div className="p-32">
        <div className="shimmerBG title-line shimmer"></div>
      </div>
    </div>
  ));

  return <div className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth py-5 px-3">{shimmerCards}</div>;
};

export default ShimmerCard;
