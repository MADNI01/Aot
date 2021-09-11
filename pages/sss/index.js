import Container from "../../components/container/Container";
import Nav from "../../components/nav/Nav";
import classes from "./Annie.module.css";
import Data from "../../components/data/Data";
const Annie = () => {
  return (
    <div className={classes.annie}>
      <Container>
        <Nav />
        <div className={classes.content}>
          <div className={classes.card}>
            <div className={classes.box}>
              <img src="armin.jpg" />
            </div>
            </div>
            <div className={classes.card}>
            <div className={classes.box}>
              <img src="sasha.jpg" />
            </div>
            </div>
            <div className={classes.card}>
            <div className={classes.box}>
              <img src="annie.jpg" />
            </div>
            </div>
            <div className={classes.card}>
            <div className={classes.box}>
              <img src="reiner.jpg" />
            </div>
            </div>
            <div className={classes.card}>
            <div className={classes.box}>
              <img src="bert.jpg" />
            </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Annie;
