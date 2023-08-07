import styles from "./Landing.module.css";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <h1 className={styles.title}>EAGLE VISION</h1>
        <Link to={"/home"}>
          <button className="btn">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
