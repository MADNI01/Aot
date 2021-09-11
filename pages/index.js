import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import classes from "../styles/Home.module.css";
import Container from "../components/container/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../components/data/Data";

export default function Home() {
    /* get window dimensions */
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      window.addEventListener("resize", handleResize);
  
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    /* get window dimensions */

  const settings1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 300,
    variableWidth: true,
    draggable: windowSize.width > 1000 ? false : true,
    waitForAnimate:false,
    arrows:false,
    cssEase: 'linear',
  };
  const slider1 = useRef();



  return (
    <>
      <div className={classes.home}>
        <Container className={classes.container}>
          <div className={classes.nav}>
            <img src='logo.png'/>
          </div>
          <div className={classes.names}>
            {Data.map((item, n) => (
              <h2
                onMouseEnter={() => {
                  slider1.current.slickGoTo(n);
                }}

                
              >
                {item.name}
              </h2>
            ))}
          </div>
        </Container>
        <div className={classes.content}>
          <Slider {...settings1} ref={(slider) => (slider1.current = slider)}>
            {Data.map((item) => (
              <div className={classes.card}>
                <div className={classes.box}>
                  <img onClick={()=>{console.log(item.name)}} src={item.img} />
                  {windowSize.width < 1000 ? <h2>{item.name}</h2> : null}
                </div>
                <div className={classes.text}></div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
