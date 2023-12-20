import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
      <div className="container-fluid">
        <a className="navbar-brand col-2" href="#">
          Creator Discounts
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ms-3">
              <a href="/" className={pathname == "/" ? "nav-link active" : "nav-link"}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={pathname == "/About" ? "nav-link active" : "nav-link"} href="/about">
                About
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-primary" type="submit">
              <span className={styles.fontColor}>Contact Us</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
