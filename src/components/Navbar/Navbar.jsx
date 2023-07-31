import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className={styles.navbar}>
      <Link className={styles.brand}>
        Mini <span>Blog</span>
      </Link>
      <ul className={styles.links_list}>
        <li>
          <Link
            className={`${styles.link} ${
              window.location.pathname === "/" && styles.active
            }`}
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link} ${
              window.location.pathname === "/login" && styles.active
            }`}
            to={"/login"}
          >
            Entrar
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link} ${
              window.location.pathname === "/register" && styles.active
            }`}
            to={"/register"}
          >
            Cadastrar
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link} ${
              window.location.pathname === "/about" && styles.active
            }`}
            to={"/about"}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
