import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Filters from "../components/filters";
import styles from "./contacts.module.css";

export default function Contact() {
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
                <p>Contact Us</p>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex flex-row align-items-center justify-content-center">
                <a
                  type="button"
                  className={`btn shadow-none btn-primary bg-white rounded-0 border-start-0 border ms-n5 ${styles.button} `}
                  role="button"
                  href="mailto:some@email.com"
                  target="_blank"
                >
                  <FontAwesomeIcon className={styles.iconStyle} icon={faEnvelope} size="2xl" />
                  <h3 className={`py-2 ${styles.text}`}> emailaddress@gmail.com</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
