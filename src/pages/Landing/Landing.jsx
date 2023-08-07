import styles from "./Landing.module.css";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <h1 className={styles.title}>EAGLE VISION</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          nostrum aliquid esse laudantium repellat accusantium, quisquam eveniet
          repellendus, dignissimos molestiae ipsam a iure ratione voluptatum
          consequatur recusandae voluptatem eligendi architecto.
        </p>
        <Link to={"/home"}>
          <button className="btn">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
