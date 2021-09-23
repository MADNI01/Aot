import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import classes from "../styles/Home.module.css";
import Container from "../components/container/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../components/data/Data";
import Nav from "../components/nav/Nav";
import Link from "next/link";
import { motion } from "framer-motion";

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
    waitForAnimate: false,
    arrows: false,
  };
  const slider1 = useRef();

  const transition = { duration: .6, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
    <>
      <div className={classes.home}>
        <Container className={classes.container}>
          <Nav />
          <motion.div
            className={classes.names}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            {Data.map((item, n) => (
              <Link href={`/${item.key}`}><h2
                key={item.name}
                onMouseEnter={() => {
                  slider1.current.slickGoTo(n);
                }}
              >
                {item.name}
              </h2></Link>
            ))}
          </motion.div>
        </Container>
        <div className={classes.content}>
          <Slider {...settings1} ref={(slider) => (slider1.current = slider)}>
            {Data.map((item) => (
              <div className={classes.card} key={item.key}>
                <div className={classes.box}>
                  <Link href={`/${item.key}`}>
                    <img src={item.img} />
                  </Link>
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
