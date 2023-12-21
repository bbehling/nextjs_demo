import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./sideMenu.module.css";
import { useSearchParams } from "next/navigation";
import Filters from "./filters";

export default function SideMenu() {
  const searchParams = useSearchParams();

  const search = searchParams.get("category");
  return (
    <>
      <div className="offcanvas offcanvas-start bg-dark font-styles" id="offcanvas">
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn shadow-none ms-auto d-none d-lg-block"
            data-bs-dismiss="offcanvas"
            data-bs-scroll="true"
            data-bs-backdrop="false"
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
          <Filters />
        </div>
      </div>
    </>
  );
}
