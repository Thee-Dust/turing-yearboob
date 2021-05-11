import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
export default function Cohort(props) {
  return (
    <div>
      <Person info={props.info}/>
    </div>
  )
}


