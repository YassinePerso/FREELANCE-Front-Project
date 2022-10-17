import React, { useEffect } from "react";
import styles from "../../Styles/Home.module.css";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import video from "../../images/video.mp4";

const Home = () => {
  useEffect(() => {
    window.onload = function () {
      document.getElementById("autoplay").onplay();
    };
  });

  return (
    <>
      <main className={styles.containerHome}>
        <section className={styles.containerHomeImg}>
          <video controls="controls" autoplay="1" muted loop id="autoplay" preload="auto">
            <source loop autoplay src={video} type="video/mp4" />
          </video>
          <div id={styles.divOnAnimations}>
            <h1 className={styles.h1One}>
              <span className={styles.spanOne}>100% Français</span>
            </h1>
            <h1 className={styles.h1Two}>
              <span className={styles.spanTwo}>100% Légal</span>
            </h1>
            <h1 className={styles.h1Three}>
              <span className={styles.spanThree}>100% Naturel</span>
            </h1>
          </div>
        </section>

        <section className={styles.containerHomeText}>
          <div className={styles.divPHome}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              ducimus quae tempore illo error rem? Cumque adipisci aliquid
              debitis tempora suscipit! Officiis dolor quod commodi facere ab id
              corporis ipsam! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Doloremque placeat voluptatibus quibusdam a
              mollitia corrupti vel consequatur iste fugit. Libero tenetur
              molestiae id dolorum officia laboriosam, incidunt hic modi alias!
            </p>
          </div>

          <section className={styles.containerHomeButton}>
            <div className={styles.firstButtonGridHome}></div>
            <div className={styles.secondButtonGridHome}>
              <Zoom delay={200} duration={2000}>
                <Link to="/Decouverte">
                  <button>Découvrez Chanvrax</button>
                </Link>
              </Zoom>
            </div>
            <div className={styles.thirdButtonGridHome}></div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
