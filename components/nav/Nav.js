import Container from "../container/Container";
import classes from "./Nav.module.css";
import ProgressiveImage from "react-progressive-image";
const Nav = () => {
  return (
    <div className={classes.nav}>
      <img src="logo-min.png" />
      <img src="logo-min.png" />
      <img src="logo2-min.png" />
    </div>
  );
};

export default Nav;
