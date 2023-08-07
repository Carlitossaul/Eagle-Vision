import styles from "./Footer.module.css";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  return (
    location.pathname !== "/" && (
      <footer className={styles.footer}>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>Mini Blog &copy; 2022</p>
      </footer>
    )
  );
};

export default Footer;
