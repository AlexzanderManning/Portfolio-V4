import React from 'react';

import Container from '../container/container';

import styles from './contact-styles.module.scss';

const ContactSection = () => {
  return(
    <section id="contact" class={styles.background}>
      <Container>
        <h2 class="section-title">
          Get In Touch
        </h2>
        <div class="contact-wrapper">
          <p class="contact-wrapper__text">
             I am currently open for opportunities, my inbox is always open. Whether for a potential job, project or just to say hi, I'll try my best to answer your email as soon as possible!
          </p>
          <a
            target="_blank"
            class="cta-btn cta-btn--resume"
            href="mailto:dmanning4@student.gsu.edu"
            >Email Me</a>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;

