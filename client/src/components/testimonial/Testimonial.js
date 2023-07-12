import React, { useState, useEffect } from "react";
import List from "./List";
import Data from "./Data";
import './Testimonial.css'
const Testimonial = () => {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  });

  return (
    <>
    <div className="testi">

        <List people={people} index={index} setIndex={setIndex} />
    </div>
    </>
  )
}

export default Testimonial