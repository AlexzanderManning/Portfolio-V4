import React from "react";

import Container from "../container/container";
import Button from "../button/button.component";

import styles from "./hero-styles.module.scss";

const HeroSection = () => {
  return (
    <div id="hero" class={styles.hero}>
      <Container>
        <h1 className={`${styles.hero__title} load-hidden`}>
          Hi, my name is{" "}
          <span class="text-color--primary">Alexzander Manning.</span>
          <br />I build things for the web.
        </h1>

        <p class={`${styles.hero__about} load-hidden`}>
          I'm a software engineer based in Atlanta, GA specializing in building
          (and occasionally designing) exceptional, high-quality websites and
          applications.
        </p>

        <div class="hero-cta" class="load-hidden">
          <Button XL utilityClasses="mr--1" href="#about">
            Learn more
          </Button>
          
          <Button XL href="mailto:dmanning4@student.gsu.edu">
            Get In Touch
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
