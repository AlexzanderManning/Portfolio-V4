import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroSection from "../components/hero/hero.component";
import AboutSection from "../components/about/about.component";
import ProjectSection from "../components/projects/projects.component";
import ContactSection from "../components/contact/contact.component";


const IndexPage = () => (
  <Layout>
    <SEO title="Alexzander Manning | Developer" />
    <HeroSection />

    <AboutSection />

    <ProjectSection />

    <ContactSection />
  </Layout>
);

export default IndexPage;
