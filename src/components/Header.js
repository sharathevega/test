import React from 'react'
import logo from '../assets/images/logo-hd-1.png'
import map from '../assets/images/map.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="main-header">
                <div className="header-top">
                    <div className="auto-container clearfix">
                        <div className="top-left pull-left">
                            <ul className="links-nav clearfix">
                                <li className="message_wrap"><a href="mailto:nursing@stemnetwork.info"><i
                                    className='bx bx-envelope'></i>
                                    nursing@stemnetwork.info</a>
                                </li>
                                <li><a href="tel:+12345678900"><i className='bx bxs-phone-call'></i> +1 (234) 567-8900</a></li>
                                <li className="regs_wrap"><a href="https://nursing-meetings.com/development/register">Register
                                    Now</a> For Only $200 </li>
                            </ul>
                        </div>

                        <div className="top-right pull-right">
                            <div className="social-links clearfix">
                                Francisco Airport, CA, USA</div>
                        </div>
                    </div>
                </div>

                <div className="header-upper">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-md-4" style={{ textAlign: "start" }}><a href="https://nursing-meetings.com/development"
                                className="max_wrap156"><img src={logo} alt="Nursing Global Conference" /></a>
                            </div>
                            <div className="col-md-4">
                                <div className="map_wrap156" style={{ textAlign: "start" }}><img src={map} alt="Nursing Global Conference" />
                                    Double Tree by Hilton Hotel San<br />
                                    Francisco Airport, CA, USA</div>
                            </div>
                            <div className="col-md-4 img_text5">
                                <a href="https://nursing-meetings.com/development/register">
                                    <div className="june_wrap55"><b>June 20-23, 2025</b>
                                        <p></p><span>Book Your Slot!</span>
                                    </div>
                                </a>
                            </div>

                            <div className="pull-left logo-outer">
                                <div className="logo"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="nav-outer clearfix">
                            <nav className="main-menu">
                                <div className="navbar-header">
                                    <a href="https://nursing-meetings.com/development" className="mobil_lo5"><img
                                        src={logo} alt="Nursing Global Conference" /></a>
                                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse clearfix">
                                    <ul className="navigation clearfix">

                                        <li><a href="#sessions-block" className="">Sessions</a></li>
                                        <li className="dropdown ">
                                            <a href="#" className="">Committee <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li className=""><a
                                                    href="https://nursing-meetings.com/development/planning-committee">Planning
                                                    Committee</a></li>
                                                <li className=""><a
                                                    href="https://nursing-meetings.com/development/organizing-committee">Organizing
                                                    Committee</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://nursing-meetings.com/development/speakers"
                                            className="">Speakers</a></li>
                                        <li className="dropdown ">
                                            <a href="https://nursing-meetings.com/development/download-brochure"
                                                className="">Downloads <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a
                                                    href="https://nursing-meetings.com/development/download-brochure">Brochure</a>
                                                </li>
                                                <li><a href="#">Abstract Sample</a></li>
                                                <li><a href="#">Poster Information</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Info <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a
                                                    href="https://nursing-meetings.com/development/guidelines">Guidelines</a>
                                                </li>
                                                <li><a href="https://nursing-meetings.com/development/faqs">FAQs</a></li>
                                            </ul>
                                        </li>
                                        <li><Link to='/submit' className="">Submit
                                            Abstract</Link></li>
                                        <li><a href="https://nursing-meetings.com/development/register"
                                            className="">Register</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>



                <div className="sticky-header">
                    <div className="auto-container clearfix">
                        <div className="logo pull-left">
                            <a href="https://nursing-meetings.com/development" className="img-responsive"><img
                                src={logo} alt="Nursing Global Conference" /></a>
                        </div>


                        <div className="right-col pull-right">

                            <nav className="main-menu">
                                <div className="navbar-header">
                                    {/* <!-- Toggle Button --> */}
                                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse clearfix">
                                    <ul className="navigation clearfix">
                                        <li><a href="#sessions-block" className="">Sessions</a></li>
                                        <li className="dropdown ">
                                            <a className="" href="#">Committee <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li className=""><a
                                                    href="https://nursing-meetings.com/development/planning-committee">Planning
                                                    Committee</a></li>
                                                <li className=""><a
                                                    href="https://nursing-meetings.com/development/organizing-committee">Organizing
                                                    Committee</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://nursing-meetings.com/development/speakers"
                                            className="">Speakers</a></li>
                                        <li className="dropdown ">
                                            <a href="https://nursing-meetings.com/development/download-brochure"
                                                className="">Downloads <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li className=""><a
                                                    href="https://nursing-meetings.com/development/download-brochure">Brochure</a>
                                                </li>
                                                <li><a href="#">Abstract Sample</a></li>
                                                <li><a href="#">Poster Information</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Info <span className="fa fa-angle-down"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a
                                                    href="https://nursing-meetings.com/development/guidelines">Guidelines</a>
                                                </li>
                                                <li><a href="https://nursing-meetings.com/development/faqs">FAQs</a></li>
                                            </ul>
                                        </li>
                                        <li><Link to='/submit' className="">Submit
                                            Abstract</Link></li>
                                        <li><a href="https://nursing-meetings.com/development/register"
                                            className="">Register</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>
            <div classNameName="brand_wrap">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-md-12 " style={{ textAlign: "start" }}>
                            <a href="https://nursing-meetings.com/development">Home</a> <i className="fa fa-angle-right"></i>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header