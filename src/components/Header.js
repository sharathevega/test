import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo-hd-1.png';
import map from '../assets/images/map.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const [dropdownStates, setDropdownStates] = useState({});

    useEffect(() => {
        // Handle Preloader
        const handlePreloader = () => {
            const preloader = document.querySelector('.preloader');
            if (preloader) {
                setTimeout(() => {
                    preloader.style.transition = 'opacity 0.5s ease';
                    preloader.style.opacity = 0;
                    setTimeout(() => (preloader.style.display = 'none'), 500);
                }, 200);
            }
        };

        // Update header style and Scroll to Top
        const handleScroll = () => {
            const mainHeader = document.querySelector('.main-header');
            const scrollToTop = document.querySelector('.scroll-to-top');
            const windowPos = window.scrollY;

            if (mainHeader) {
                if (windowPos >= 250) {
                    mainHeader.classList.add('fixed-header');
                    if (scrollToTop) scrollToTop.style.display = 'block';
                } else {
                    mainHeader.classList.remove('fixed-header');
                    if (scrollToTop) scrollToTop.style.display = 'none';
                }
            }
        };

        handlePreloader();
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    const toggleDropdown = (key) => {
        setDropdownStates({
            ...dropdownStates,
            [key]: !dropdownStates[key],
        });
    };

    return (
        <div>
            <header className="main-header">
                {/* Header Top */}
                <div className="header-top">
                    <div className="auto-container clearfix">
                        <div className="top-left pull-left">
                            <ul className="links-nav clearfix">
                                <li className="message_wrap">
                                    <a href="mailto:nursing@stemnetwork.info">
                                        <i className="bx bx-envelope"></i> nursing@stemnetwork.info
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+12345678900">
                                        <i className="bx bxs-phone-call"></i> +1 (234) 567-8900
                                    </a>
                                </li>
                                <li className="regs_wrap">
                                    <a href="https://nursing-meetings.com/development/register">Register Now</a> For Only $200
                                </li>
                            </ul>
                        </div>
                        <div className="top-right pull-right">
                            <div className="social-links clearfix">Francisco Airport, CA, USA</div>
                        </div>
                    </div>
                </div>

                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-md-4" style={{ textAlign: 'start' }}>
                                <Link to="/" className="max_wrap156">
                                    <img src={logo} alt="Nursing Global Conference" />
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <div className="map_wrap156" style={{ textAlign: 'start' }}>
                                    <img src={map} alt="Nursing Global Conference" />
                                    Double Tree by Hilton Hotel San
                                    <br />
                                    Francisco Airport, CA, USA
                                </div>
                            </div>
                            <div className="col-md-4 img_text5">
                                <Link to="/register">
                                    <div className="june_wrap55">
                                        <b>June 20-23, 2025</b>
                                        <p></p>
                                        <span>Book Your Slot!</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="pull-left logo-outer">
                                <div className="logo"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="nav-outer clearfix">
                            <nav className="main-menu">
                                <div className="navbar-header">
                                    <Link to="/" className="mobil_lo5">
                                        <img src={logo} alt="Nursing Global Conference" />
                                    </Link>
                                    <button type="button" className="navbar-toggle" onClick={toggleNavbar}>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className={`navbar-collapse collapse clearfix ${isNavbarCollapsed ? '' : 'in'}`}>
                                    <ul className="navigation clearfix">
                                        <li><a href="#sessions-block">Sessions</a></li>
                                        <li className="dropdown">
                                            <a onClick={() => toggleDropdown('committee')}>
                                                Committee {dropdownStates.committee ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                            </a>
                                            <ul className={`dropdown-menu ${dropdownStates.committee ? 'show' : ''}`}>
                                                <li><Link to="/planning-committee">Planning Committee</Link></li>
                                                <li><Link to="/organizing-committee">Organizing Committee</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/speakers">Speakers</Link></li>
                                        <li className="dropdown">
                                            <Link to="/download-brochure" onClick={() => toggleDropdown('downloads')}>
                                                Downloads {dropdownStates.downloads ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                            </Link>
                                            <ul className={`dropdown-menu ${dropdownStates.downloads ? 'show' : ''}`}>
                                                <li><Link to="/download-brochure">Brochure</Link></li>
                                                <li><Link to="">Abstract Sample</Link></li>
                                                <li><Link to="">Poster Information</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="" onClick={() => toggleDropdown('info')}>
                                                Info {dropdownStates.info ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                            </Link>
                                            <ul className={`dropdown-menu ${dropdownStates.info ? 'show' : ''}`}>
                                                <li><Link to="/guidelines">Guidelines</Link></li>
                                                <li><Link to="/faqs">FAQs</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/submit">Submit Abstract</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Sticky Header */}
                <div className="sticky-header">
                    <div className="auto-container clearfix">
                        <div className="logo pull-left">
                            <Link to="/" className="img-responsive">
                                <img src={logo} alt="Nursing Global Conference" />
                            </Link>
                        </div>
                        <div className="right-col pull-right">
                            <nav className="main-menu">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" onClick={toggleNavbar}>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className={`navbar-collapse collapse clearfix ${isNavbarCollapsed ? '' : 'in'}`}>
                                    <ul className="navigation clearfix">
                                        <li><Link to="#sessions-block">Sessions</Link></li>
                                        <li className="dropdown">
                                            <Link to="" onClick={() => toggleDropdown('stickyCommittee')}>
                                                Committee {dropdownStates.stickyCommittee ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                            </Link>
                                            <ul className={`dropdown-menu ${dropdownStates.stickyCommittee ? 'show' : ''}`}>
                                                <li><Link to="/planning-committee">Planning Committee</Link></li>
                                                <li><Link to="/organizing-committee">Organizing Committee</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/speakers">Speakers</Link></li>
                                        <li className="dropdown">
                                            <Link to="/download-brochure" onClick={() => toggleDropdown('stickyDownloads')}>
                                                Downloads {dropdownStates.stickyDownloads ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                            </Link>
                                            <ul className={`dropdown-menu ${dropdownStates.stickyDownloads ? 'show' : ''}`}>
                                                <li><Link to="/download-brochure">Brochure</Link></li>
                                                <li><Link to="">Abstract Sample</Link></li>
                                                <li><Link to="">Poster Information</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="#" onClick={() => toggleDropdown('stickyInfo')}>
                                                Info <i className={`fa ${dropdownStates.stickyInfo ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                                            </Link>
                                            <ul className={`dropdown-menu ${dropdownStates.stickyInfo ? 'show' : ''}`}>
                                                <li><Link to="/guidelines">Guidelines</Link></li>
                                                <li><Link to="/faqs">FAQs</Link></li>
                                            </ul>
                                        </li>


                                        <li><Link to="/submit">Submit Abstract</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
