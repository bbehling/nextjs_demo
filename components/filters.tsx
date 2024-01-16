import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sideMenu.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Filters() {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");

  const [searchValue, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const { push } = useRouter();

  function filter() {
    if (searchValue) {
      push(`/filtered?filter=${searchValue}`);
    }
  }

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
                  onClick={filter}
                >
                  <FontAwesomeIcon className={styles.iconStyle} icon={faMagnifyingGlass} />
                </button>
              </span>
              <input
                className={`form-control shadow-none border-end-0 border ${styles.input}`}
                type="search"
                id="example-search-input"
                value={searchValue}
                onChange={handleChange}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    filter();
                  }
                }}
              />
            </div>
          </div>
        </div>
        <h5 className={`px-3 mt-5 mb-3 ${styles.fontColor}`}>Videos Filtered by Category</h5>
        <ul className="nav nav-pills nav-pills flex-column mb-auto ms-2 me-2" id="menu">
          <li className="nav-item"></li>
          <li className="nav-item">
            <a href="/filtered?category=comedy" className={search == "comedy" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Comedy</span>
            </a>
          </li>
          <li>
            <a href="/filtered?category=sports" className={search == "sports" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Sports</span>
            </a>
          </li>
          <li>
            <a href="/filtered?category=food" className={search == "food" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Food</span>
            </a>
          </li>

          <li>
            <a
              href="/filtered?category=educational"
              className={search == "educational" ? "nav-link active" : "nav-link"}
            >
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Educational</span>
            </a>
          </li>
          <li>
            <a
              href="/filtered?category=businessFinancial"
              className={search == "businessFinancial" ? "nav-link active" : "nav-link"}
            >
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Business & Financial</span>
            </a>
          </li>
          <li>
            <a href="/filtered?category=artsCrafts" className={search == "artsCrafts" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Arts & Crafts</span>
            </a>
          </li>
          <li>
            <a
              href="/filtered?category=campingOutdoors"
              className={search == "campingOutdoors" ? "nav-link active" : "nav-link"}
            >
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Camping & Outdoors</span>
            </a>
          </li>
          <li>
            <a
              href="/filtered?category=fitnessHealth"
              className={search == "fitnessHealth" ? "nav-link active" : "nav-link"}
            >
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Fitness & Health</span>
            </a>
          </li>
          <li>
            <a
              href="/filtered?category=independentNews"
              className={search == "independentNews" ? "nav-link active" : "nav-link"}
            >
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>Independent News</span>
            </a>
          </li>
          <li>
            <a href="/filtered?category=diy" className={search == "diy" ? "nav-link active" : "nav-link"}>
              <span className={`ms-1 d-sm-inline ${styles.fontColor}`}>DIY</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
