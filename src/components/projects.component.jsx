import React from 'react';
import dripClothingImg from '../images/dripclothing.png';
import pastoriaImg from '../images/pastoria.png';
import linkifyImg from '../images/linkify.png';

const ProjectSection = () => {
  return (
    <section id="projects">
    <div class="container">
      <div class="project-wrapper">
        <h2 class="section-title dark-blue-text">
          Projects
        </h2>

        
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="project-wrapper__text">
              <h3 class="project-wrapper__text-title">Drip Clothing</h3>
              <div>
                <p class="mb-4">
                  A fully responsive Ecommerce store built with React, React-Router, Redux, Redux-Persist and handles payment proccessing with the Stripe API.
                </p>
              </div>
              <a target="_blank" class="cta-btn cta-btn--hero" href="https://dripclothing.netlify.com/">
                See Live
              </a>
              <a target="_blank" class="cta-btn text-color-main" href="https://github.com/AlexzanderManning/clothing-ecommerce">
                Source Code
              </a>
            </div>
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="project-wrapper__image">
              <a href="https://dripclothing.netlify.com/" target="_blank">
                <div data-tilt class="thumbnail rounded">
                  <img class="img-fluid" src={dripClothingImg} />
                </div>
              </a>
            </div>
          </div>
        </div>
       
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="project-wrapper__text">
              <h3 class="project-wrapper__text-title">Pastoria</h3>
              <div>
                <p class="mb-4">
                  A fully responsive restaraunt website built with Gatsby.js, React and Sass. Check out the menu! The food here is tasty!
                </p>
              </div>
              <a target="_blank" class="cta-btn cta-btn--hero" href="https://pastoria.netlify.com/">
                See Live
              </a>
              <a target="_blank" class="cta-btn text-color-main" href="https://github.com/AlexzanderManning/Restaurant-Site">
                Source Code
              </a>
            </div>
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="project-wrapper__image">
              <a href="https://pastoria.netlify.com/" target="_blank">
                <div data-tilt class="thumbnail rounded">
                  <img class="img-fluid" src={pastoriaImg} />
                </div>
              </a>
            </div>
          </div>
        </div>
       
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="project-wrapper__text">
              <h3 class="project-wrapper__text-title">Linkify</h3>
              <div>
                <p class="mb-4">
                  A fully responsive link shortening SaaS built with HTML, CSS, JS, Bootstrap. Give it a try!
                </p>
              </div>
              <a target="_blank" class="cta-btn cta-btn--hero" href="https://linkify.netlify.com/">
                See Live
              </a>
              <a target="_blank" class="cta-btn text-color-main" href="https://github.com/AlexzanderManning/Linkifiy">
                Source Code
              </a>
            </div>
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="project-wrapper__image">
              <a href="https://linkify.netlify.com/" target="_blank">
                <div data-tilt class="thumbnail rounded">
                  <img class="img-fluid" src={linkifyImg} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ProjectSection;