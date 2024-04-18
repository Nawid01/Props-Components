import React from 'react';
import Images from '../Components/imgaes';
import Info from '../Components/Info';

function Card({ person }) {
  return (
    <div className="card">
      <Images imageId={person.id} />
      <Info person={person} />
    </div>
  );
}

export default Card;