import React from 'react';
import me from '../images/profile.png';
import resume from '../assets/resume.pdf';

const AboutSection = () => {
  return(
    <section id="about">
      <div class="container">
        <h2 class="section-title">
          About me
        </h2>
        <div class="row about-wrapper">
          <div class="col-md-6 col-sm-12">
            <div class="about-wrapper__image">
              <img
                class="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={me}
                alt="Profile Image"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="about-wrapper__info">
              <p class="about-wrapper__info-text">
                Hello! I'm Alexzander, a software engineer based in Atlanta, GA who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
              </p>
              <p class="about-wrapper__info-text">
                Here are a few technologies I've been working with recently:
              </p>
              <div class="about-wrapper__info-text ul-container">
                <ul class="ul-fix">
                  <li>Javascript (ES6+)</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Gatsby.Js</li>
                </ul>

                <ul class="ul-fix">
                  <li>HTML</li>
                  <li>CSS / SASS</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                </ul>

              </div>
              <span class="d-flex mt-3">
                <a target="_blank" class="cta-btn cta-btn--resume" href={resume}>
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;