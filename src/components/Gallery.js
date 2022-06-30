import React, { Component } from "react";
import ReactDOM from "react-dom";

const Gallery = ({ images, loading }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="gallery">
    {images?.map(img => (
      <div className='photo' key={img.id}>
        <a href={img.url}>
        <img src={img.src.original} alt={img.alt}></img>
        </a>
        <a href={img.photographer_url}>
            <h3 className="photographer">{img.photographer}</h3>
        </a>
      </div>
    ))}
    </div>
  );
};

export default Gallery;