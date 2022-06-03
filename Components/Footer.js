import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faSchool } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <div className={styles.Footerleftsection}>
          <div>
            <p>
              <FontAwesomeIcon
                className={styles.collegeicon}
                icon={faSchool}
                style={{ fontSize: 80, color: "black" }}
              />
            </p>
          </div>

          <div>
            <h1 className={styles.logoslast}>
              <span className={styles.logos}>G</span>enius
              <span className={styles.logos}>S</span>chool
            </h1>
          </div>
        </div>

        <div className="Footerrightsection">
          <div className={styles.bottommenu}>
            <Link href="../Main/Home">
              <a>Home</a>
            </Link>
            <Link href="../Main/About">
              <a>About</a>
            </Link>
            <Link href="../Main/Notices">
              <a>Notices</a>
            </Link>
            <Link href="../Main/Gallery">
              <a>Gallery</a>
            </Link>
            <Link href="../Main/Contact">
              <a>Contact</a>
            </Link>
          </div>

          <div>
            <p className={styles.copyright}>Genius School - Copyright @2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
