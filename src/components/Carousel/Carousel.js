import './Carousel.css';
import { useState, useEffect, Children, cloneElement, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Page } from './Page/Page';
import { CarouselContext } from './carousel-context';


const Carousel = ({ children, infinite, transitionTime }) => {

  const TRANSITION_DURATION = transitionTime;
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(500);
  const [pages, setPages] = useState([]);
  const [clonesCount, setClonesCount] = useState({head: 0, tail: 0})
  const [transitionDuration, setTransitionDuration] = useState(transitionTime)

  const windowElRef = useRef()

  useEffect(() => {
    if (infinite){
      setPages([
        cloneElement(children[Children.count(children) -1 ]), 
        ...children,
        cloneElement(children[0])
      ])
      setClonesCount({ head: 1, tail: 1})
      return
    }
    setPages(children)
  }, [children, infinite])

  useEffect(() => {
    const resizeHandler = () => {
      const windowElWidth = windowElRef.current.offsetWidth;
      setWidth(windowElWidth)
      setOffset( -(clonesCount.head) * width)
    }
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [clonesCount, width])

  useEffect(() => {
    if (transitionDuration === 0 ){
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION)
      }, TRANSITION_DURATION)
    }
  }, [transitionDuration, TRANSITION_DURATION])

  useEffect(() => {
    if (!infinite) return ;

    if (offset === 0){
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset( - ( width * (pages.length - 1 - clonesCount.tail)))
      }, TRANSITION_DURATION)
      return;
    }
    if (offset === -(width *(pages.length - 1))){
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset( - (clonesCount.head * width))
      }, TRANSITION_DURATION)
      return;
    }
    
  }, [infinite, offset, width, pages, clonesCount, TRANSITION_DURATION])
  
  const handleLeftArrowClick = () => {
  
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;

      return Math.min(newOffset, 0);
    })
  };
  const handleRightArrowClick = () => {

    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;

      const maxOffset = -( width * (pages.length - 1))
      return Math.max(newOffset, maxOffset);
    })
  };

  /*
  function IntervalLeftArrow(){
    console.log("j")
    setInterval(handleRightArrowClick, 5000);
  }

  if (intervalCarousel){
    setIntervalCarousel(false);
    console.log("he");
    IntervalLeftArrow();
  }*/
  

  return (
    <CarouselContext.Provider value={{ width }}>
      <div className="main-container">
        <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}/>
        <div className="window" ref={windowElRef}>
          <div
            className="all-pages-container"
            style={{
              transitionDuration: `${transitionDuration}ms`,
              transform: `translateX(${offset}px)`,
            }}
          >
            {pages}
          </div>
        </div>
        <FaChevronRight className="arrow1" onClick={handleRightArrowClick}/>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
Carousel.Page = Page
