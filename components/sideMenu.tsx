import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRight, faMagnifyingGlass, faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./sideMenu.module.css";
import { usePathname } from "next/navigation";

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <>
      <div className="offcanvas offcanvas-start bg-dark font-styles" id="offcanvas">
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn shadow-none ms-auto d-none d-lg-block"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            role="button"
          >
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
          <button
            type="button"
            className="btn shadow-none ms-auto d-sm-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            role="button"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          </button>
        </div>
        <div className="offcanvas-body px-0">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="input-group bg-white">
                <span className="input-group-append">
                  <button
                    className={`btn shadow-none btn-primary bg-white rounded-0 border-start-0 border ms-n5 ${styles.button} `}
                    type="button"
                  >
                    <FontAwesomeIcon className={styles.iconStyle} icon={faMagnifyingGlass} />
                  </button>
                </span>
                <input
                  className={`form-control shadow-none border-end-0 border ${styles.input}`}
                  type="search"
                  id="example-search-input"
                />
              </div>
            </div>
          </div>
          <h5 className={`px-3 mt-5 mb-3 ${styles.fontColor}`}>Sorted by Category</h5>
          <ul className="nav nav-pills nav-pills flex-column mb-auto ms-2 me-2" id="menu">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a href="/political" className={pathname == "/political" ? "nav-link active" : "nav-link"}>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Political</span>
              </a>
            </li>
            <li>
              <a href="/business" className={pathname == "/business" ? "nav-link active" : "nav-link"}>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Business</span>
              </a>
            </li>
            <li>
              <a href="/electronics" className={pathname == "/electronics" ? "nav-link active" : "nav-link"}>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Electronics</span>
              </a>
            </li>

            <li>
              <a href="/apparel" className={pathname == "/apparel" ? "nav-link active" : "nav-link"}>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Apparel</span>
              </a>
            </li>
            <li>
              <a href="/gaming" className={pathname == "/gaming" ? "nav-link active" : "nav-link"}>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Gaming & Entertainment</span>
              </a>
            </li>
            <li>
              <a href="/health" className={pathname == "/health" ? "nav-link active" : "nav-link"}>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Health & Wellness</span>
              </a>
            </li>
            <li>
              <a href="/comedy" className={pathname == "/comedy" ? "nav-link active" : "nav-link"}>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Comedy</span>
              </a>
            </li>
            <li>
              <a href="/jewelry" className={pathname == "/jewelry" ? "nav-link active" : "nav-link"}>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Jewelry & Accessories</span>
              </a>
            </li>
            <li>
              <a href="#/kitchen" className={pathname == "/kitchen" ? "nav-link active" : "nav-link"}>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Kitchen & Dining</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-2 ms-4" style={{ position: "fixed" }}>
        <button
          className="btn float-start d-none d-lg-block"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          role="button"
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
      </div>
    </>
  );
}
