import React from 'react';

const Footer = () => {
  return(
    <footer class="footer navbar-static-bottom">
      <div class="container">
        <a href="#top" class="back-to-top">
          <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div class="social-links">
          <a href="mailto:dmanning4@student.gsu.edu" target="_blank">
            <i class="fa fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/alexzander-manning/" target="_blank">
            <i class="fa fa-linkedin fa-inverse"></i>
          </a>
          <a href="https://github.com/AlexzanderManning" target="_blank">
            <i class="fa fa-github fa-inverse"></i>
          </a>
        </div>

        <hr />

        <p class="footer__text">
          © 2020 - Developed by <a href="https://github.com/AlexzanderManning" target="_blank">Alexzander Manning</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;