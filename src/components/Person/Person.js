import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE

export default function Person(props) {
  return props.info.map(teacher => {
    return (
      <div>
        <img src={teacher.photo} alt=''></img>
        <span>{teacher.name}</span>
        <span>{teacher.quote}</span>
        <span>{teacher.superlative}</span>
      </div>
    )
  })
};

