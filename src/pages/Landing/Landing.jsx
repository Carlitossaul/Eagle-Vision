import { useEffect, useState } from "react";
import styles from "./Landing.module.css";
import "animate.css";
import logo from "../../assets/logoEagleVision.png";

import { Link } from "react-router-dom";

const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className={`${styles.divLoading} `}>
          <img
            className={`${styles.loading} animate__animated animate__zoomInLeft`}
            src={logo}
            alt="logo"
          />
        </div>
      ) : (
        <div className={styles.landing}>
          <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.info}>
              <p>
                🦅 Welcome to Eagle Vision, where soft skills come to life. Find
                inspiration in our articles and share your own perspectives.
              </p>
              <p>
                🌟 Our community invites you to explore topics like
                communication, leadership, problem-solving, time management,
                empathy, critical thinking, personal growth, and more...
              </p>
              <p>
                🤝 Join a diverse network of eager minds to learn and grow
                together. Share your own insights and discover the collective
                wisdom that will help you thrive.
              </p>
              <p>
                🔍 Develop a sharp vision to spot opportunities and foster
                meaningful connections. At Eagle Vision, we expand horizons
                together.
              </p>
              <p>
                🚀 Your journey to a better self starts here. Join us and gain
                the perspective that will take you beyond your limits.
              </p>
            </div>
            <Link to={"/home"}>
              <button className="btn">Start</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;
