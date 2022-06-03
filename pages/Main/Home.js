import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faQuoteLeft,
  faQuoteRight,
  faBus,
  faGraduationCap,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <>
      <Head>
        <title>Bhujel | Home</title>
        <meta name="keywords" content="Bhujel"></meta>
      </Head>

      <div className={Styles.Image}>
        <Image
          src="/firstImages.jpg"
          alt="School picture"
          width={40}
          height={15}
          layout="responsive"
        />
        <div className={Styles.ImageContent}>
          <h1>
            <span className={Styles.ImageContentColor}>ADMISSION OPEN</span> AT
          </h1>
          <h1>GENIUS ENGLISH MEDIUM SCHOOL</h1>
          <Link href="">
            <a className={Styles.btn}>
              LEARN MORE
              <FontAwesomeIcon
                className={Styles.icon}
                icon={faArrowRightLong}
                style={{ fontSize: 22, color: "black" }}
              />
            </a>
          </Link>
        </div>
      </div>

      <div className={Styles.principal}>
        <h2 className={Styles.message}>MESSAGE FROM THE PRINCIPAL</h2>
        <p className={Styles.underline}></p>
      </div>

      <div className={Styles.principalImage}>
        <div className={Styles.picture}>
          <img src="/principal1.jpg" alt="School principal"></img>
        </div>

        <div className={Styles.principalText}>
          <div>
            <FontAwesomeIcon
              className={Styles.icon}
              icon={faQuoteLeft}
              style={{ fontSize: 30, color: "black" }}
            />
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <div>
            <FontAwesomeIcon
              className={Styles.icons}
              icon={faQuoteRight}
              style={{ fontSize: 30, color: "black" }}
            />
          </div>

          <p>Rama Pokhrel</p>
          <p>Principal , Genius English Medium School</p>
        </div>
      </div>

      <div className={Styles.whyus}>
        <h2 className={Styles.message}>WHY US?</h2>
        <p className={Styles.underline}></p>
      </div>

      <div className={Styles.ThridSection}>
        <div className={Styles.hello}>
          <Image
            src="/14269.jpg"
            alt="School picture"
            width={30}
            height={10}
            layout="responsive"
          />
        </div>

        <div className={Styles.whyuscontent}>
          <div className={Styles.firstDiv}>
            <div>
              <FontAwesomeIcon
                className={Styles.icon2}
                icon={faBus}
                style={{ fontSize: 30, color: "#000066" }}
              />
              <p className={Styles.icon1}>TRANSPORTATION FACILITY</p>
              <p className={Styles.icon2}>
                Are you looking for quality education with a modest investment?
              </p>
            </div>

            <div>
              <FontAwesomeIcon
                className={Styles.icon2}
                icon={faGraduationCap}
                style={{ fontSize: 30, color: "#000066" }}
              />
              <p className={Styles.icon1}>EXTRAORDINARY EDUCATION</p>
              <p className={Styles.icon2}>
                Are you looking for quality education with a modest investment?
              </p>
            </div>

            <div>
              <FontAwesomeIcon
                className={Styles.icon2}
                icon={faChalkboardUser}
                style={{ fontSize: 30, color: "#000066" }}
              />
              <p className={Styles.icon1}>TRAINED TEACHERS</p>
              <p className={Styles.icon2}>
                Are you looking for quality education with a modest investment?
              </p>
            </div>

            <div>
              <FontAwesomeIcon
                className={Styles.icon2}
                icon={faChalkboardUser}
                style={{ fontSize: 30, color: "#000066" }}
              />
              <p className={Styles.icon1}>CLEAN HOSTEL FACILITY</p>
              <p className={Styles.icon2}>
                Are you looking for quality education with a modest investment?
              </p>
            </div>

            <div>
              <FontAwesomeIcon
                className={Styles.icon2}
                icon={faChalkboardUser}
                style={{ fontSize: 30, color: "#000066" }}
              />
              <p className={Styles.icon1}>SECUTIRY</p>
              <p className={Styles.icon2}>
                Are you looking for quality education with a modest investment?
              </p>
            </div>
          </div>

          <div className={Styles.secondDiv}>
            <div>
              <FontAwesomeIcon
                className={Styles.icon2}
                icon={faChalkboardUser}
                style={{ fontSize: 30, color: "#000066" }}
              />
              <p className={Styles.icon1}>SECUTIRY</p>
              <p className={Styles.icon2}>
                Are you looking for quality education with a modest investment?
              </p>
            </div>

            <div>
              <FontAwesomeIcon
                className={Styles.icon2}
                icon={faChalkboardUser}
                style={{ fontSize: 30, color: "#000066" }}
              />
              <p className={Styles.icon1}>CLEAN HOSTEL FACILITY</p>
              <p className={Styles.icon2}>
                Are you looking for quality education with a modest investment?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.noticesandevents}>
        <h2 className={Styles.message}>NOTICES AND EVENTS</h2>
        <p className={Styles.underline}></p>
      </div>

      <div className={Styles.noticeandeventsection}>
        <div className={Styles.noticeandeventcontainer}>
          <div className={Styles.containerimage1}>
            <FontAwesomeIcon
              className={Styles.icon2}
              icon={faBus}
              style={{ fontSize: 30, color: "#000066" }}
            />
            <p className={Styles.icon1}>TRANSPORTATION FACILITY</p>
            <p className={Styles.icon2}>
              Are you looking for quality education with a modest investment?
            </p>
          </div>

          <div className={Styles.containerimage2}>
            <FontAwesomeIcon
              className={Styles.icon2}
              icon={faGraduationCap}
              style={{ fontSize: 30, color: "#000066" }}
            />
            <p className={Styles.icon1}>EXTRAORDINARY EDUCATION</p>
            <p className={Styles.icon2}>
              Are you looking for quality education with a modest investment?
            </p>
          </div>

          <div className={Styles.containerimage3}>
            <FontAwesomeIcon
              className={Styles.icon2}
              icon={faChalkboardUser}
              style={{ fontSize: 30, color: "#000066" }}
            />
            <p className={Styles.icon1}>TRAINED TEACHERS</p>
            <p className={Styles.icon2}>
              Are you looking for quality education with a modest investment?
            </p>
          </div>

          <div className={Styles.containerimage4}>
            <FontAwesomeIcon
              className={Styles.icon2}
              icon={faChalkboardUser}
              style={{ fontSize: 30, color: "#000066" }}
            />
            <p className={Styles.icon1}>CLEAN HOSTEL FACILITY</p>
            <p className={Styles.icon2}>
              Are you looking for quality education with a modest investment?
            </p>
          </div>

          <div className={Styles.containerimage5}>
            <FontAwesomeIcon
              className={Styles.icon2}
              icon={faChalkboardUser}
              style={{ fontSize: 30, color: "#000066" }}
            />
            <p className={Styles.icon1}>SECUTIRY</p>
            <p className={Styles.icon2}>
              Are you looking for quality education with a modest investment?
            </p>
          </div>
        </div>
        <div className={Styles.noticesbutton}>
          <Link href="">
            <a className={Styles.btn2}>
              MORE NOTICES
              <FontAwesomeIcon
                className={Styles.icon}
                icon={faArrowRightLong}
                style={{ fontSize: 22, color: "black" }}
              />
            </a>
          </Link>
        </div>
      </div>

      <div className={Styles.QuoteSection}>
        <Image
          src="/quote1.jpg"
          alt="School picture"
          width={20}
          height={7}
          layout="responsive"
        />

        <div className={Styles.Quotecontent}>
          <FontAwesomeIcon
            className={Styles.contentquote}
            icon={faQuoteLeft}
            style={{ fontSize: 50, color: "white" }}
          />
          <h1 className={Styles.quotee}>GENIUS EDUCATION MAKES SINCERE</h1>
          <FontAwesomeIcon
            className={Styles.contentquote1}
            icon={faQuoteRight}
            style={{ fontSize: 50, color: "white" }}
          />
        </div>
      </div>
    </>
  );
};
export default Index;
