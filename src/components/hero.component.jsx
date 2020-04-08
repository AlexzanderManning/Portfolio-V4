import React from 'react';

const HeroSection = () => {
  return(
    <div id="hero" class="jumbotron">
      <div class="container">
        <h1 class="hero-title" class="load-hidden">
          Hi, my name is <span class="text-color-main">Alexzander Manning.</span>
          <br />
          I build things for the web.
        </h1>
        <p class="hero-about load-hidden" >I'm a software engineer based in Atlanta, GA specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>
        <div class="hero-cta" class="load-hidden">
          <a class="cta-btn cta-btn--hero" href="#about">Learn more</a>
          <a class="cta-btn cta-btn--hero" href="mailto:dmanning4@student.gsu.edu">Get In Touch</a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;