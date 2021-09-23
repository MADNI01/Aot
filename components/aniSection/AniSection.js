import Container from "../container/Container";
import Nav from "../nav/Nav";
import classes from "./AniSection.module.css";
import Data from "../data/Data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const AniSection = () => {
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
  const [data, setData] = useState(Data);
  const router = useRouter();
  useEffect(() => {
    setData(Data);
  }, []);



  const index = data?.findIndex((item) => item.key == router.query.id);

  const transition = { duration: .6, ease: [0.43, 0.13, 0.23, 0.96] };




  return (
    <div className={classes.section}>
      <Container>
        <Nav />
        <motion.div className={classes.name} initial={{y:300,x:'50%',opacity:0}} animate={{y:'50%',x:'50%',opacity:1}} transition={{...transition,delay:2.6,duration:1}}>
          <span>
            {data[index]?.name}
          </span>
        </motion.div>
        <motion.div className={classes.content}initial={{y:'49%',x:'50%'}} animate={{bottom:0,y:0,x:'50%',width:'100%'}} transition={{...transition,duration: 1.2,delay:1.7}}>
          <motion.div className={classes.card} animate={{width:0}} transition={{delay:1.3}}>
            <div className={classes.box} >
              <motion.img animate={{opacity:0}} transition={{...transition,delay:.2}}
                src={
                  index == 1
                    ? data[7].img
                    : index == 0
                    ? data[6].img
                    : data[index - 2]?.img
                }
              />
            </div>
          </motion.div>



          <motion.div className={classes.card} animate={{width:0}} transition={{delay:1.3}}>
            <div className={classes.box} >
              <motion.img src={index == 0 ? data[7].img : data[index - 1]?.img} animate={{opacity:0}} transition={{...transition,delay:.6}}/>
            </div>
          </motion.div>


          <motion.div className={classes.card} initial={{width:300}} animate={{width:'100%'}} transition={{delay:1.4}}>
            <motion.div className={classes.box} >
              <motion.img src={data[index]?.img} initial={{objectPosition:' center'}}  animate={{width:'1600px',objectPosition:'0 -580px'}} transition={{...transition,duration:1.2,delay:1.9}} />
            </motion.div>
          </motion.div>


          <motion.div className={classes.card} animate={{width:0}} transition={{delay:1.3}}>
            <div className={classes.box}  >
              <motion.img src={index == 7 ? data[0].img : data[index + 1]?.img} animate={{opacity:0}} transition={{...transition,delay:.8}}/>
            </div>
          </motion.div>



          <motion.div className={classes.card} animate={{width:0}} transition={{delay:1.3}}>
            <div className={classes.box}>
              <motion.img animate={{opacity:0}} transition={{...transition,delay:.4}}
                src={
                  index == 6
                    ? data[0].img
                    : index == 7
                    ? data[1].img
                    : data[index + 2]?.img
                }
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AniSection;
