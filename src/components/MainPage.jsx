import React, { useState } from "react";

import About from "./Sections/About";

import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import HeaderSection from "./Sections/HeaderSection";
import HeroSection from "./Sections/HeroSection";
import PortFolio from "./Sections/PortFolio";
import Resume from "./Sections/Resume";
import Service from "./Sections/Service";
import Skills from "./Sections/Skills";
import Facts from "./Sections/Facts";
import Testimonials from "./Sections/Testimonials";
import Projects from "./Sections/Projects";
import Mobile from "./Sections/Mobile";

export default function MainPage() {
  return (
    <>
      {/* <i className="bi bi-list mobile-nav-toggle d-xl-none"></i> */}
      {/* <MobileNavigation></MobileNavigation> */}

      {/* <!-- ======= Header ======= --> */}
      <HeaderSection></HeaderSection>

      {/* <!-- End Header --> */}

      {/* <!-- ======= Hero Section ======= --> */}
      <HeroSection></HeroSection>

      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <About></About>

        {/* <!-- End About Section --> */}

        {/* <!-- ======= Facts Section ======= --> */}
        {/* <Facts></Facts> */}
        {/* <!-- End Facts Section --> */}

        {/* <!-- ======= Skills Section ======= --> */}
        <Skills></Skills>
        {/* <!-- End Skills Section --> */}

        {/* <!-- ======= Resume Section ======= --> */}
        <Resume></Resume>
        {/* <!-- End Resume Section --> */}
        {/* <!-- ======= projects Section ======= --> */}
        <Projects></Projects>
        {/* <!-- End projects Section --> */}
        {/* <!-- ======= Services Section ======= --> */}
        <Service></Service>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Portfolio Section ======= --> */}
        {/* <PortFolio></PortFolio> */}
        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <Testimonials></Testimonials>
        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <Contact></Contact>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer></Footer>
      {/* <!-- End  Footer --> */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
