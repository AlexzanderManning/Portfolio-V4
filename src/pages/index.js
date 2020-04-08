import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo"

import HeroSection from '../components/hero.component';
import AboutSection from'../components/about.component';
import ProjectSection from '../components/projects.component';
import ContactSection from '../components/contact.component';
import Footer from '../components/footer.component';

const IndexPage = () => (
  <Layout>
    <SEO title="Alexzander Manning | Developer" />
    <main>
      <HeroSection />
    </main>

    <AboutSection />
    <ProjectSection />
    <ContactSection />
    <Footer />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
