import classes from "./Nav.module.css";
import Link from 'next/link'
const Nav = () => {
  return (
    <div className={classes.nav}>
      <Link href='/'><img src="logo1.png" /></Link>
      <Link href='/'><img src="logo.png" /></Link>
      <Link href='/'><img src="logo2.png" /></Link>
    </div>
  );
};

export default Nav;
