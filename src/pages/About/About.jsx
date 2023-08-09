import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h2>
          About <span>Eagle Vision</span>
        </h2>
        <p>
          Eagle Vision is a passionate project dedicated to fostering soft
          skills development through enriching articles and collaborative
          learning. Our platform nurtures personal growth.
        </p>
        <p>
          We take pride in providing a space where curious and motivated minds
          can explore a wide range of topics related to soft skills, from
          effective communication to compassionate leadership and critical
          thinking. Each article is crafted to inspire, educate, and challenge,
          offering valuable insights for your personal and professional
          development.
        </p>
        <p>
          As part of our mission, we invite you to be an active protagonist on
          your growth journey. Whether by sharing your own experiences, engaging
          in enriching discussions, or creating collaborative content, at Eagle
          Vision, we believe in collective wisdom and how each member of our
          community can contribute to mutual learning.
        </p>
        <p>
          And remember, you're a crucial part of this exciting path of
          development. Get inspired, learn, and share with us as you hone your
          sharp vision and open new doors in your life and career!
        </p>
        <Link to="/posts/create" className="btn">
          Create post
        </Link>
      </div>
    </div>
  );
};

export default About;
