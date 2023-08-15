import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h2>
          About <span>Eagle Vision</span>
        </h2>
        <div>
          <p>
            Eagle Vision is an exciting project dedicated to promoting the
            development of soft skills through enriching articles and
            collaborative learning. This platform fosters personal growth.
          </p>
          <p>
            I take pride in providing a space where curious and motivated minds
            can explore a wide range of topics related to soft skills, from
            effective communication to leadership and critical thinking. Each
            article is designed to inspire, educate, and challenge, offering
            valuable insights for your personal and professional development.
          </p>
          <p>
            I invite you to be an active participant in this journey of growth.
            Whether sharing your own experiences or creating collaborative
            content, at Eagle Vision, we believe in collective wisdom and how
            each member can contribute to mutual learning.
          </p>
          <p>
            Get inspired, learn, and share with us as you hone your sharp vision
            and open new doors in your life and career!
          </p>
        </div>
        <Link to="/posts/create" className="btn">
          Create post
        </Link>
      </div>
    </div>
  );
};

export default About;
