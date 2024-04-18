import React from 'react';

function Info({ person }) {
  return (
    <div className="card-info">
      <h2>{person.name}</h2>
      <p>Alter: {person.age}</p>
      <p>Stadt: {person.city}</p>
      <p>Telefon: {person.phone}</p>
      <p>Rolle: {person.role}</p>
      <p>Hobbies: {person.hobbies}</p>
    </div>
  );
}

export default Info;