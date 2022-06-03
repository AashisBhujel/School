import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faQuoteLeft,
  faQuoteRight,
  faAt,
  faPhone,
  faBars,
  faBus,
  faGraduationCap,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Head>
        <title>Bhujel | About</title>
        <meta name="keywords" content="Bhujel"></meta>
      </Head>

      <div className={Styles.sectionOne}>
        <Image
          src="/R4mt20.jpg"
          alt="School picture"
          width={40}
          height={15}
          layout="responsive"
        />

        <div className={Styles.sectionOneContent}>
          <div className={Styles.sectionOneImage}>
            <img src="/principal1.jpg" alt="School principal iyarn mage"></img>
          </div>

          <div className={Styles.sectionOneImageContent}>
            <div className={Styles.quoteicon5}>
              <FontAwesomeIcon
                className={Styles.quoteicon7}
                icon={faQuoteLeft}
                style={{ fontSize: 50, color: "white" }}
              />
            </div>

            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </h3>

            <div className={Styles.quoteicon6}>
              <FontAwesomeIcon
                className={Styles.quoteicon8}
                icon={faQuoteRight}
                style={{ fontSize: 50, color: "white" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.aboutTitle}>
        <h2 className={Styles.titleText}>ABOUT SCHOOL</h2>
        <p className={Styles.underline}></p>
      </div>

      <div className={Styles.aboutContent}>
        <img src="/aboutimage.jpg" alt="About"></img>

        <div className={Styles.aboutContentText}>
          {/* quoteicon5 */}
          <div className={Styles.leftquote}>
            <FontAwesomeIcon
              className={Styles.Leftquoteicon}
              icon={faQuoteLeft}
              style={{ fontSize: 50, color: "black" }}
            />
          </div>

          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </h3>

          <div className={Styles.rightquote}>
            <FontAwesomeIcon
              className={Styles.Rightquoteicon}
              icon={faQuoteRight}
              style={{ fontSize: 50, color: "black" }}
            />
          </div>

          <p className={Styles.Name}>Rama Pokhrel</p>
          <p className={Styles.Address}>
            Principal , Genius English Medium School
          </p>
        </div>
      </div>

      <div className={Styles.aboutTitle}>
        <h2 className={Styles.titleText}>OUR HISTORY</h2>
        <p className={Styles.underline}></p>
      </div>

      <div className={Styles.historyContent}>
        <img src="/ourhistoryimg.jpg" alt="About"></img>

        <div className={Styles.historyContentText}>
          {/* quoteicon5 */}
          <div className={Styles.leftquotesecond}>
            <FontAwesomeIcon
              className={Styles.Leftquoteico}
              icon={faQuoteLeft}
              style={{ fontSize: 50, color: "black" }}
            />
          </div>

          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </h3>

          <div className={Styles.rightquotsecondd}>
            <FontAwesomeIcon
              className={Styles.Rightquoteico}
              icon={faQuoteRight}
              style={{ fontSize: 50, color: "black" }}
            />
          </div>
        </div>
      </div>

      <div className={Styles.aboutTitle}>
        <h2 className={Styles.titleText}>LOCATION & CONTACT</h2>
        <p className={Styles.underline}></p>
      </div>

      <div class={Styles.mapouter}>
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="600"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=darshan%20solutions%20pvt&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>

      <div className={Styles.aboutTitle}>
        <h2 className={Styles.titleText}>CONTACTS</h2>
        <p className={Styles.underline}></p>
      </div>

      <div className={Styles.contactSection}>
        <div className={Styles.number}>
          <div className={Styles.phoneIcon}>
            <FontAwesomeIcon
              className={Styles.Rightquoteico}
              icon={faPhone}
              style={{ fontSize: 50, color: "black" }}
            />
          </div>

          <div className={Styles.phoneDetail}>
            <p>01-4800147, +977-9841495786</p>
          </div>
        </div>

        <div className={Styles.mail}>
          <div className={Styles.gmailIcon}>
            <FontAwesomeIcon
              className={Styles.Rightquoteico}
              icon={faAt}
              style={{ fontSize: 50, color: "black" }}
            />
          </div>

          <div className={Styles.gmailDetail}>
            <p>Geniusschool100@Gmail.Com</p>
          </div>
        </div>
      </div>

      <div className={Styles.bottomImage}>
        <Image
          src="/aboutlast.jpg"
          alt="School picture"
          width={18}
          height={7}
          layout="responsive"
        />
      </div>
    </>
  );
};

export default About;
