import Filters from "../components/filters";
import styles from "./channels.module.css";

export default function About() {
  return (
    <div className="container-fluid">
      <div className={`row flex-nowrap ${styles.nowrap}`}>
        <div className="mx-auto col-3 p-4 bg-dark d-none d-lg-block bg-dark">
          <Filters />
        </div>
        <div className="row ms-1 py-2">
          <div className="col col-lg-9">
            <div className="card mb-3 bg-light">
              <div className="card-body text-center align-items-center justify-content-center">
                <p>About</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
