import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./sideMenu.module.css";

export default function SideMenu() {
  return (
    <div className="sticky-top">
      <div className="offcanvas offcanvas-start bg-dark font-styles" id="offcanvas">
        <div className="offcanvas-header">
          <div className="offcanvas-title d-none d-sm-block" id="offcanvas"></div>
          <button
            type="button"
            className="btn-close text-reset shadow-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-0">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="input-group bg-white">
                <span className="input-group-append">
                  <button
                    className={`btn shadow-none bg-white rounded-0 border-start-0 border ms-n5 ${styles.button} `}
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
          <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a href="#" className="nav-link text-truncate">
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Political</span>
              </a>
            </li>
            <li>
              <a href="#submenu1" data-bs-toggle="collapse" className="nav-link text-truncate">
                <i className="fs-5 bi-speedometer2"></i>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Business</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-truncate">
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Electronics</span>
              </a>
            </li>

            <li>
              <a href="#" className="nav-link text-truncate">
                <i className="fs-5 bi-grid"></i>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Apparel</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Gaming & Entertainment</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Health & Wellness</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Comedy</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Jewelry & Accessories</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Kitchen & Dining</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-2">
        <button className="btn float-start" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
      </div>
    </div>
  );
}
