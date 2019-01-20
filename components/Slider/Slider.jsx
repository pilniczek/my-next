import React from 'react';
import {
  bool, oneOfType, string, number, shape, func,
} from 'prop-types';

// TODO
// import Iterator from '../Iterator';
// split action.setDisplayedSlide to action.setDisplayedSlideLeft & action.setDisplayedSlideRight
// add action for sliding by dots

const Slider = ({id, sliderIsRunning, displayedSlide, actions: { setDisplayedSlide, setSliderIsRunning }}) => {

  var maxIndex = 2
  var slideCount = 3

  const handleClickLeft = () => {

    if(!sliderIsRunning){
      setSliderIsRunning(id, true)

      if(displayedSlide <= 0){
        setDisplayedSlide(id, maxIndex)
      } else {
        setDisplayedSlide(id, displayedSlide - 1)
      }

      setTimeout(() => {
        setSliderIsRunning(id, false)
      }, 300);
    }
  }

  const handleClickRight = () => {
    if(!sliderIsRunning){
      setSliderIsRunning(id, true)

      if(displayedSlide >= maxIndex){
        setDisplayedSlide(id, 0)
      } else {
        setDisplayedSlide(id, displayedSlide + 1)
      }

      setTimeout(() => {
        setSliderIsRunning(id, false)
      }, 300);
    }
  }

  /*const handleClickDot = () => {
    if(!sliderIsRunning){
      setDisplayedSlide(id, num)
      setSliderIsRunning(id, true)
      setTimeout(() => {
        setSliderIsRunning(id, sliderIsRunning)
      }, 2000);
    }
  }*/

  return(
    <div className="slider__wrapper">
      <div
        className="slider__inner"
        displayedslide={displayedSlide}
        style={{ width: `${slideCount}00%`, left: `-${displayedSlide}00%` }}
      >
        <div
          className="slide"
          index="0"
          total={3}
          first="true"
          last="false"
          style={{ width: '33.333%' }}
        >
          <span className="slide__header">slide__0</span>
            This is realy nice slide!
        </div>
        <div
          className="slide"
          index="1"
          total={3}
          first="false"
          last="false"
          style={{ width: '33.333%' }}
        >
          <span className="slide__header">slide__1</span>
            This is realy nice slide!
        </div>
        <div
          className="slide"
          index="2"
          total={3}
          first="false"
          last="true"
          style={{ width: '33.333%' }}
        >
          <span className="slide__header">slide__2</span>
            This is realy nice slide!
        </div>
      </div>
      <button
        className="slider__control move__left"
        type="button"
        onClick={handleClickLeft}
      >
          &lt;
      </button>
      <button
        className="slider__control move__right"
        type="button"
        onClick={handleClickRight}
      >
          &gt;
      </button>
      {/*<div className="slider__control dots__wrapper">
        <button
          className="dot"
          index="0"
          total={3}
          first
          last={false}
          type="button"
          //onClick={handleClickDot}
        />
        <button
          className="dot"
          index="1"
          total={3}
          first={false}
          last={false}
          type="button"
          //onClick={handleClickDot}
        />
        <button
          className="dot"
          index="2"
          total={3}
          first={false}
          last
          type="button"
          //onClick={handleClickDot}
        />
      </div>*/}
    </div>
  )
}

Slider.propTypes = {
  id: oneOfType([
    string,
    number,
  ]).isRequired,
  sliderIsRunning: bool,
  displayedSlide: number,
  actions: shape({
    setDisplayedSlide: func.isRequired,
    setSliderIsRunning: func.isRequired
    /*goLeft: func.isRequired,
    goRight: func.isRequired,
    goDot: func.isRequired,*/
  }).isRequired,
};

Slider.defaultProps = {
  sliderIsRunning: false,
  displayedSlide: 1,
};

export default Slider;
