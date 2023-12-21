import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sideMenu.module.css";
import { useSearchParams } from "next/navigation";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Filters() {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  return (
    <div className="bg-dark font-styles d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <div className="col-12">
        <div className="row ">
          <div className="col-12 min-vw-50">
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
            <a href="/filtered?category=political" className={search == "political" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Political</span>
            </a>
          </li>
          <li>
            <a href="/filtered?category=business" className={search == "business" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Business</span>
            </a>
          </li>
          <li>
            <a
              href="/filtered?category=electronics"
              className={search == "electronics" ? "nav-link active" : "nav-link"}
            >
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Electronics</span>
            </a>
          </li>

          <li>
            <a href="/filtered?category=apparel" className={search == "apparel" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Apparel</span>
            </a>
          </li>
          <li>
            <a href="/filtered?category=gaming" className={search == "gaming" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Gaming & Entertainment</span>
            </a>
          </li>
          <li>
            <a href="/filtered?category=health" className={search == "health" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Health & Wellness</span>
            </a>
          </li>
          <li>
            <a href="/filtered?category=comedy" className={search == "comedy" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Comedy</span>
            </a>
          </li>
          <li>
            <a href="/filtered?category=jewelry" className={search == "jewelry" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Jewelry & Accessories</span>
            </a>
          </li>
          <li>
            <a href="/filtered?category=kitchen" className={search == "kitchen" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Kitchen & Dining</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
