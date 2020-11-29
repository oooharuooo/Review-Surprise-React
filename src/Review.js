import React, { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {id,text,job,name,image} = data[index];
 

  const checkNumber = (number) => {
      if(number < 0) return data.length -1;
      if(number > data.length -1) return 0;
      return number;
  }

  const prevProfileHandler = () => {
     setIndex(i => {
      const newIndex = i - 1
      return checkNumber(newIndex);
     })
  }

  const nextProfileHandler = () => {
     setIndex(i => {
      const newIndex = i + 1
      return checkNumber(newIndex);
     })
  }

  const randomProfileHandler = () => {
     const randomNumber = Math.floor(Math.random() * data.length);
     
     randomNumber !== index ? 
      setIndex(randomNumber) : 
      setIndex(checkNumber(randomNumber + 1))
  }

  return (
      <>
        <article className="review" key={id}>
          <div className="img-container">
            <img src={image} alt={name} className="person-img"/>
            <span className="quote-icon"> <FaQuoteRight /> </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevProfileHandler}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextProfileHandler}><FaChevronRight /></button>
          </div>
          <button className="random-btn"  onClick={randomProfileHandler}>Surprise Me</button>
        </article>
      </>
  )
};

export default Review;
