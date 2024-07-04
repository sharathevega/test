import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './assets/css/bootstrap.css';
import './assets/css/revolution-slider.css';
import './assets/css/common.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/animate.css';
import "./assets/css/flaticon.css";
import "./assets/css/font-awesome.css";
import "./assets/css/hover.css";
import "./assets/css/jquery.fancybox.css";
import "./assets/css/owl.css";
import "./assets/css/style-header.css";
import "./assets/css/theme.css";
import SubmitAbstract from './components/SubmitAbstract';
import PlanningCommitte from './components/pages/PlanningCommitte';
import OrgCommittee from './components/pages/OrgCommittee';
import Speakers from './components/pages/Speakers';
import DownBrochur from './components/pages/DownBrochur';
import Guidelines from './components/pages/Guidelines';
import Faqs from './components/pages/Faqs';
import AbstractSubmission from './components/pages/AbstractSubmission';
import Register from './components/pages/Register';




function App() {

  // useEffect(() => {
  //   // Preloader handling
  //   const handlePreloader = () => {
  //     const preloader = document.querySelector('.preloader');
  //     if (preloader) {
  //       setTimeout(() => {
  //         preloader.style.transition = 'opacity 0.5s ease';
  //         preloader.style.opacity = 0;
  //         setTimeout(() => preloader.style.display = 'none', 500);
  //       }, 200);
  //     }
  //   };

  //   // Update header style + Scroll to Top
  //   const handleScroll = () => {
  //     const mainHeader = document.querySelector('.main-header');
  //     const scrollToTop = document.querySelector('.scroll-to-top');
  //     const windowPos = window.scrollY;

  //     if (mainHeader) {
  //       if (windowPos >= 250) {
  //         mainHeader.classList.add('fixed-header');
  //         if (scrollToTop) scrollToTop.style.display = 'block';
  //       } else {
  //         mainHeader.classList.remove('fixed-header');
  //         if (scrollToTop) scrollToTop.style.display = 'none';
  //       }
  //     }
  //   };

  //   // Submenu Dropdown Toggle
  //   const dropdowns = document.querySelectorAll('.main-header li.dropdown');
  //   dropdowns.forEach(dropdown => {
  //     const dropdownBtn = document.createElement('div');
  //     dropdownBtn.classList.add('dropdown-btn');
  //     dropdownBtn.innerHTML = '<span class="fa fa-angle-down"></span>';
  //     dropdown.appendChild(dropdownBtn);

  //     const dropdownMenu = dropdown.querySelector('ul');
  //     dropdownBtn.addEventListener('click', () => {
  //       if (dropdownMenu) {
  //         dropdownMenu.style.transition = 'max-height 0.5s ease';
  //         dropdownMenu.style.maxHeight = dropdownMenu.style.maxHeight ? null : `${dropdownMenu.scrollHeight}px`;
  //       }
  //     });
  //   });

  //   // Disable dropdown parent link
  //   const dropdownLinks = document.querySelectorAll('.navigation li.dropdown > a');
  //   dropdownLinks.forEach(link => {
  //     link.addEventListener('click', e => e.preventDefault());
  //   });

  //   // Initial function calls
  //   handlePreloader();
  //   handleScroll();

  //   // Event listener for scroll
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     // Cleanup event listeners
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/submit' element={<SubmitAbstract />} />
          <Route path='/planning-committee' element={<PlanningCommitte />} />
          <Route path='/organizing-committee' element={<OrgCommittee />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/download-brochure' element={<DownBrochur />} />
          <Route path='/guidelines' element={<Guidelines />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/abstract' element={<AbstractSubmission />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
