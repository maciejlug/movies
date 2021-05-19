import React, { useState, useEffect, useContext } from "react";
import data from "../contentData/FilmData";
import Item from "../SliderFiles/Item";
import { FcPrevious, FcNext } from "react-icons/fc";
import { Context } from "../context";

function Slider() {
  const [sliderData, setSliderData] = useState();
  const [toRender, setToRender] = useState();
  const [sliderIndex, setSliderIndex] = useState(0);
  const { size } = React.useContext(Context);

  const splitArray = (arr, n) => {
    let chunks = [];
    let chunk = [];
    for (let i = 0; i < arr.length + 1; i++) {
      if (chunk.length === n) {
        chunks.push(chunk);
        chunk = [];
      }
      if (i === arr.length) {
        if (chunk.length === 0) return chunks;
        chunks.push(chunk);
        return chunks;
      }
      chunk.push(arr[i]);
    }
  };

  useEffect(() => {
    if (size <= 792) {
      setToRender(2);
    }
    if (size <= 1092 && size > 792) {
      setToRender(4);
    }

    if (size > 1092) {
      setToRender(6);
    }
  }, [size]);

  useEffect(() => {
    setSliderData(splitArray(data, toRender));
    setSliderIndex(0);
  }, [toRender]);

  return (
    <div className="slider-top">
      <h2>
        <span>/</span>Some movies
      </h2>
      <div className="slider-top-box">
        <div className="sliders-container">
          {sliderData &&
            sliderData.map((item, index) => (
              <Item
                key={index}
                props={item}
                index={index}
                active={sliderIndex}
              />
            ))}
        </div>
        <button
          onClick={() => setSliderIndex(sliderIndex - 1)}
          className="prev-slide"
          style={0 === sliderIndex ? { display: "none" } : {}}
        >
          <FcPrevious />
        </button>
        <button
          onClick={() => setSliderIndex(sliderIndex + 1)}
          className="next-slide"
          style={
            sliderData && sliderData.length - 1 === sliderIndex
              ? { display: "none" }
              : { color: "blue" }
          }
        >
          <FcNext />
        </button>
      </div>
    </div>
  );
}

export default Slider;
