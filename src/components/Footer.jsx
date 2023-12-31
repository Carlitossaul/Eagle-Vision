import styles from "./Footer.module.css";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  return (
    location.pathname !== "/" && (
      <footer className={styles.footer}>
        <p>&copy; 2023 Eagle Vision - Elevate Your Soft Skills</p>
      </footer>
    )
  );
};

export default Footer;
