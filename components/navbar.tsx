import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 sticky-top">
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
            <li className="nav-item">
              <button
                className="nav-link d-sm-none d-md-block d-lg-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas"
              >
                Filter
              </button>
            </li>
            <li className="nav-item">
              <a href="/" className={pathname == "/" ? "nav-link active" : "nav-link"}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={pathname == "/about" ? "nav-link active" : "nav-link"} href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={pathname == "/contact" ? "nav-link active" : "nav-link"} href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
