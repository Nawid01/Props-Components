import React from 'react';

function Images({ imageId }) {
  const imagePath = `/Props&Components/src/Images/${imageFile[imageId]}.jpg`;
  return <img src={imagePath} alt="Person" className="card-image" />;
}
console.log("halo");
const imageFile = {
  1: '../Images/1.jpg', // NAwid
  2: '../Images/2.jpg',  // Nadja
};
console.log(imageFile);
export default Images;