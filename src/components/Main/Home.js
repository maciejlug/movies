import React from "react";
import SliderComponent from "./HomeFiles/SliderComponent";
import topImage from "./contentData/topimg.jpg";
function Home({ size }) {
  return (
    <main>
      <div className="image-top">
        <img src={topImage} alt="topImage" />
      </div>
      <section className="content">
        <SliderComponent size={size} />
      </section>
    </main>
  );
}

export default Home;
