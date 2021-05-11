import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
export default function Cohort(props) {
  console.log(props)
  return (
    <div>
      {Person(props.info)}
    </div>
  )
}


