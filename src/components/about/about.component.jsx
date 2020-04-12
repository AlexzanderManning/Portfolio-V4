import React from "react";

import Container from "../container/container";
import Button from '../button/button.component';

import styles from "./about-styles.module.scss";
import me from "../../images/profile.png";
import resume from "../../assets/resume.pdf";

const AboutSection = () => {
  return (
    <section id="about" class={styles.background}>
      <Container>
        <div className={styles.container}>
          <h2 class={styles.title}>About me</h2>
          <div class={styles.aboutWrapper}>
            <div className={styles.flexChildren}>
              <div class={styles.imgContainer}>
                <img
                  class={styles.img__fluid}
                  // height="auto"
                  // width="250px"
                  src={me}
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className={styles.flexChildren}>
              <div class={styles.aboutWrapper__info}>
                <p>
                  Hello! I'm Alexzander, a software engineer based in Atlanta,
                  GA who enjoys building things that live on the internet. I
                  develop exceptional websites and web apps that provide
                  intuitive, pixel-perfect user interfaces with efficient and
                  modern backends.
                </p>
                <br></br>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>
                <div class={styles.aboutWrapper__infoText}>
                  <ul class={styles.ul}>
                    <li>Javascript (ES6+)</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Gatsby.Js</li>
                  </ul>

                  <ul class={styles.ul}>
                    <li>HTML</li>
                    <li>CSS / SASS</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                  </ul>
                </div>
                <span class={styles.btn}>
                  <Button
                    target='_blank'
                    href={resume}
                    inverted
                    medium
                  >
                    View Resume
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
