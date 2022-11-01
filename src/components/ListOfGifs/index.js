import React from "react";
import Gif from "../Gif";
import "./ListOfGifs.css";

export default function ListOfGifs({ gifs }) {
  //parametro original keyword
  return (
    <div className="">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} id={id} url={url} />
      ))}
    </div>
  );
}
