import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Buttons from "./Buttons";

function List({ people, index, setIndex }) {
  return (
    <section className="section-testimonial">
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <>
            <article className={position} key={id}>
              <div className="inner-testimonial">
                <div className="inner-testimonial2">
                  <div className="testimonial-image">
                    <div className="image">
                      <img src={image} alt="name" className="person-img" />
                    </div>
                    <div className="name">
                      <p>{name}</p>
                      <p className="title">{title}</p>
                    </div>
                  </div>
                  <div className="testimonial-quote">
                    <p className="text">{quote}</p>
                  </div>
                  

                </div>
              </div>
                <div className="quote-icon">
                  <FaQuoteRight className="icon" />
                </div>
            </article>
            </>
          );
        })}
        <Buttons index={index} setIndex={setIndex} />
      </div>
    </section>
  );
}

export default List;