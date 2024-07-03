import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo-hd-1.png'
import img4 from '../assets/images/img4.jpg';
import icon1 from '../assets/images/icon_1.png';
import icon2 from '../assets/images/icon_2.png';
import icon3 from '../assets/images/icon_3.png';
import icon4 from '../assets/images/icon_4.png';
import icon5 from '../assets/images/icon_5.png';
import icon6 from '../assets/images/icon_6.png';
import icon7 from '../assets/images/icon_7.png';
import icon8 from '../assets/images/icon_8.png';
import edit from '../assets/images/edit.png';
import dow from '../assets/images/dow.png';
import mess from '../assets/images/mess.png';
import mess1 from '../assets/images/mess1.png';
import mess2 from '../assets/images/mess2.png';
import ph from '../assets/images/ph.png';
import Header from './Header';
import Footer from './Footer';

import { Helmet } from 'react-helmet';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <div>
            <Helmet>
                <title>Innovative Nursing Strategies for a Healthier Tomorrow</title>
                <meta name="description" content="Empowering Excellence in Nursing Practice. Join us for an unparalleled networking experience – register now to connect with industry professionals and leaders!" />
            </Helmet>
            <Header />

            {isLoading ? (
                <>
                    <Skeleton width={"100%"} height={550} />
                    {/* <Skeleton width={300} height={50} style={{ margin: '10px 0' }} />
                    <Skeleton width={250} height={20} style={{ margin: '10px 0' }} />
                    <Skeleton width={400} height={15} count={3} /> */}
                </>
            ) : (
                <>
                    <div className="banner_wrap test-banner" style={{ textAlign: "start" }}>
                        <div className="auto-container clearfix">
                            <div className="row clearfix">
                                <div className="col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                                    <hr />
                                    <h1>
                                        Innovative<br />Nursing Strategies<br /> for a Healthier Tomorrow
                                    </h1>
                                    <h5>Empowering Excellence in Nursing Practice</h5>
                                    <p>Join us for an unparalleled networking experience – register now to connect with industry
                                        professionals and
                                        leaders!</p>
                                    <a href="https://nursing-meetings.com/development/register">Register now</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )}


            <div className="session_wrap1" id="sessions-block">
                <div className="auto-container clearfix">
                    <div className="row clearfix">
                        <div className="col-md-12 session_wrap_style1 wow fadeInUp" data-wow-delay="400ms"
                            data-wow-duration="1500ms">
                            <h2>Sessions</h2>
                            <p>Explore our diverse lineup of sessions designed to inspire, educate, and connect you with the
                                latest trends
                                and insights in the industry.</p>
                        </div>

                        <div className="col-md-5 sq_mobhide session_wra155 wow fadeInUp" data-wow-delay="400ms"
                            data-wow-duration="1600ms">
                            <div className="sq_mainbox">
                                <div className="sq_box1"></div>
                                <div className="sq_box2"></div>
                                <span className="nur_wrap1">Nursing</span>
                                <span className="nur_wrap2">CONFERENCE</span>
                                <span className="nur_wrap3">June 20-23, 2025</span>
                                <span className="nur_wrap4">Francisco Airport, CA, USA</span>
                            </div>

                        </div>
                        <div className="col-md-7 mar_mk55 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1800ms">
                            <div className="add_wrap_session">
                                <ul>
                                    <li><a href="session-topic.php"> 1. Nursing Education </a></li>

                                    <li><a href="session-topic.php"> 2. Nursing & Healthcare</a></li>

                                    <li><a href="session-topic.php"> 3. Nursing Research</a></li>

                                    <li><a href="session-topic.php"> 4. Psychiatric and Mental Health Nursing</a></li>

                                    <li><a href="session-topic.php"> 5. Public Health Nursing</a></li>

                                </ul>
                            </div>
                            <div className="add_wrap_session">
                                <ul>
                                    <li><a href="session-topic.php"> 6. Rehabilitation Nursing</a></li>
                                    <li><a href="session-topic.php"> 7. Role of Nurses in Diseases Control</a></li>
                                    <li><a href="session-topic.php"> 8. Nursing Education</a></li>
                                    <li><a href="session-topic.php"> 9. Public Health & Safety</a></li>
                                    <li><a href="session-topic.php"> 10. Trauma & Critical Care</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="book_wrap">
                <div className="auto-container clearfix">
                    <div className="row clearfix">
                        <div className="col-md-12 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                            <h2>Book by MAY. 2023 & Save $1651!</h2>
                            <h3>BRING A COLLEAGUE SAVE $200 TOTAL, BRING MORE, SAVE MORE</h3>
                            <a href="#">Register now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="import_wrap">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-md-12 session_wrap_style1 wow fadeInUp" data-wow-delay="200ms"
                            data-wow-duration="1000ms">
                            <h2>Important <span>Dates</span></h2>
                            <p>Stay on track with our key dates to ensure you don't miss any important deadlines or events
                                related to the
                                conference.</p>
                        </div>

                        <div className="col-md-3 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                            <div className="date-mainblock-color1">
                                <div className="date-topbg-color1">
                                    <div className="pull-left date-lflex">
                                        <div className="date-circle1"></div>
                                        <div className="date-lstrip1"></div>
                                        <div className="date-circle2"></div>
                                        <div className="date-lstrip2"></div>
                                    </div>
                                    <div className="pull-right date-rflex">
                                        <div className="date-circle1"></div>
                                        <div className="date-lstrip3"></div>
                                        <div className="date-circle2"></div>
                                        <div className="date-lstrip4"></div>
                                    </div>
                                </div>
                                <div className="date-textblock">
                                    <div className="may_wrap15">
                                        28<sub>TH</sub> <span>MAY 2024</span>
                                    </div>
                                    <div className="earl_wrap">
                                        Early Bird Registration
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1100ms">
                            <div className="date-mainblock-color1">
                                <div className="date-topbg-color1">
                                    <div className="pull-left date-lflex">
                                        <div className="date-circle1"></div>
                                        <div className="date-lstrip1"></div>
                                        <div className="date-circle2"></div>
                                        <div className="date-lstrip2"></div>
                                    </div>
                                    <div className="pull-right date-rflex">
                                        <div className="date-circle1"></div>
                                        <div className="date-lstrip3"></div>
                                        <div className="date-circle2"></div>
                                        <div className="date-lstrip4"></div>
                                    </div>
                                </div>
                                <div className="date-textblock">
                                    <div className="may_wrap15">
                                        8<sub>TH</sub> <span>JUNE 2024</span>
                                    </div>
                                    <div className="earl_wrap pt_350">
                                        Abstract Submission Deadline
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">
                            <div className="date-mainblock-color2">
                                <div className="date-topbg-color2">
                                    <div className="pull-left date-lflex">
                                        <div className="date-circle1"></div>
                                        <div className="date-rstrip1"></div>
                                        <div className="date-circle2"></div>
                                        <div className="date-rstrip2"></div>
                                    </div>
                                    <div className="pull-right date-rflex">
                                        <div className="date-circle1"></div>
                                        <div className="date-rstrip3"></div>
                                        <div className="date-circle2"></div>
                                        <div className="date-rstrip4"></div>
                                    </div>
                                </div>
                                <div className="date-textblock">
                                    <div className="may_wrap15 rih5">
                                        16<sub>TH</sub> <span>JUNE 2024</span>
                                    </div>
                                    <div className="earl_wrap">
                                        Full Paper Submission
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-md-3 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1300ms">
                            <div className="date-mainblock-color2">
                                <div className="date-topbg-color2">
                                    <div className="pull-left date-lflex">
                                        <div className="date-circle1"></div>
                                        <div className="date-rstrip1"></div>
                                        <div className="date-circle2"></div>
                                        <div className="date-rstrip2"></div>
                                    </div>
                                    <div className="pull-right date-rflex">
                                        <div className="date-circle1"></div>
                                        <div className="date-rstrip3"></div>
                                        <div className="date-circle2"></div>
                                        <div className="date-rstrip4"></div>
                                    </div>
                                </div>
                                <div className="date-textblock">
                                    <div className="may_wrap15 rih5">
                                        25<sub>TH</sub> <span>JUNE 2024</span>
                                    </div>
                                    <div className="earl_wrap pt_350">
                                        Final Registration Deadline
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq_wrap">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-md-12 session_wrap_style1 wow fadeInUp" data-wow-delay="200ms"
                            data-wow-duration="1000ms">
                            <h2 className="bot_wrap156">FAQ'<span className="org_wrap">s</span></h2>
                        </div>
                        <div className="col-md-6">
                            <div className="content-column">
                                <div className="inner-box">
                                    <ul className="accordion-box">
                                        <li className="accordion block wow fadeInUp active-block" data-wow-delay="0ms"
                                            data-wow-duration="1500ms">
                                            <div className="acc-btn active">
                                                <div className="icon-outer">
                                                    <i className="bx bxs-arrow-from-left hide5"></i>
                                                    <i className="bx bxs-arrow-from-top show5"></i>
                                                </div> Will there be continuing education
                                                credits available ?
                                            </div>
                                            <div className="acc-content current">
                                                <div className="content clearfix">
                                                    <p>The conference will feature a variety of sessions, including keynote
                                                        speeches, panel
                                                        discussions, hands-on workshops, and breakout sessions covering
                                                        topics like patient safety,
                                                        leadership, technology integration, and mental health.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block wow fadeInUp" data-wow-delay="200ms"
                                            data-wow-duration="1500ms">
                                            <div className="acc-btn">
                                                <div className="icon-outer"><i className="bx bxs-arrow-from-left hide5"></i>
                                                    <i className="bx bxs-arrow-from-top show5"></i>
                                                </div> How can I register for the nursing
                                                conference ?
                                            </div>
                                            <div className="acc-content">
                                                <div className="content clearfix">
                                                    <p>The conference will feature a variety of sessions, including keynote
                                                        speeches, panel
                                                        discussions, hands-on workshops, and breakout sessions covering
                                                        topics like patient safety,
                                                        leadership, technology integration, and mental health.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block wow fadeInUp" data-wow-delay="400ms"
                                            data-wow-duration="1500ms">
                                            <div className="acc-btn">
                                                <div className="icon-outer"><i className="bx bxs-arrow-from-left hide5"></i>
                                                    <i className="bx bxs-arrow-from-top show5"></i>
                                                </div> Who should attend the nursing
                                                conference ?
                                            </div>
                                            <div className="acc-content">
                                                <div className="content clearfix">
                                                    <p>The conference will feature a variety of sessions, including keynote
                                                        speeches, panel
                                                        discussions, hands-on workshops, and breakout sessions covering
                                                        topics like patient safety,
                                                        leadership, technology integration, and mental health.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block wow fadeInUp" data-wow-delay="400ms"
                                            data-wow-duration="1500ms">
                                            <div className="acc-btn">
                                                <div className="icon-outer"><i className="bx bxs-arrow-from-left hide5"></i>
                                                    <i className="bx bxs-arrow-from-top show5"></i>
                                                </div> What types of sessions will be offered
                                                ?
                                            </div>
                                            <div className="acc-content">
                                                <div className="content clearfix">
                                                    <p>The conference will feature a variety of sessions, including keynote
                                                        speeches, panel
                                                        discussions, hands-on workshops, and breakout sessions covering
                                                        topics like patient safety,
                                                        leadership, technology integration, and mental health.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block wow fadeInUp" data-wow-delay="400ms"
                                            data-wow-duration="1500ms">
                                            <div className="acc-btn">
                                                <div className="icon-outer"><i className="bx bxs-arrow-from-left hide5"></i>
                                                    <i className="bx bxs-arrow-from-top show5"></i>
                                                </div> How can I register for the nursing
                                                conference ?
                                            </div>
                                            <div className="acc-content">
                                                <div className="content clearfix">
                                                    <p>The conference will feature a variety of sessions, including keynote
                                                        speeches, panel
                                                        discussions, hands-on workshops, and breakout sessions covering
                                                        topics like patient safety,
                                                        leadership, technology integration, and mental health.</p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-column">
                                <div className="inner-box ">
                                    <ul className="accordion-box">
                                        <li className="accordion block wow fadeInUp active-block" data-wow-delay="0ms"
                                            data-wow-duration="1500ms">
                                            <div className="acc-btn active">
                                                <div className="icon-outer"><i className="bx bxs-arrow-from-left hide5"></i>
                                                    <i className="bx bxs-arrow-from-top show5"></i>
                                                </div> Will there be continuing education
                                                credits available ?
                                            </div>
                                            <div className="acc-content current">
                                                <div className="content clearfix">
                                                    <p>The conference will feature a variety of sessions, including keynote
                                                        speeches, panel
                                                        discussions, hands-on workshops, and breakout sessions covering
                                                        topics like patient safety,
                                                        leadership, technology integration, and mental health.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block wow fadeInUp" data-wow-delay="200ms"
                                            data-wow-duration="1500ms">
                                            <div className="acc-btn">
                                                <div className="icon-outer"><i className="bx bxs-arrow-from-left hide5"></i>
                                                    <i className="bx bxs-arrow-from-top show5"></i>
                                                </div> How can I register for the nursing
                                                conference ?
                                            </div>
                                            <div className="acc-content">
                                                <div className="content clearfix">
                                                    <p>The conference will feature a variety of sessions, including keynote
                                                        speeches, panel
                                                        discussions, hands-on workshops, and breakout sessions covering
                                                        topics like patient safety,
                                                        leadership, technology integration, and mental health.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block wow fadeInUp" data-wow-delay="400ms"
                                            data-wow-duration="1500ms">
                                            <div className="acc-btn">
                                                <div className="icon-outer"><i className="bx bxs-arrow-from-left hide5"></i>
                                                    <i className="bx bxs-arrow-from-top show5"></i>
                                                </div> Who should attend the nursing
                                                conference ?
                                            </div>
                                            <div className="acc-content">
                                                <div className="content clearfix">
                                                    <p>The conference will feature a variety of sessions, including keynote
                                                        speeches, panel
                                                        discussions, hands-on workshops, and breakout sessions covering
                                                        topics like patient safety,
                                                        leadership, technology integration, and mental health.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block wow fadeInUp" data-wow-delay="400ms"
                                            data-wow-duration="1500ms">
                                            <div className="acc-btn">
                                                <div className="icon-outer"><i className="bx bxs-arrow-from-left hide5"></i>
                                                    <i className="bx bxs-arrow-from-top show5"></i>
                                                </div> What is the main focus of the nursing
                                                conference ?
                                            </div>
                                            <div className="acc-content">
                                                <div className="content clearfix">
                                                    <p>The conference will feature a variety of sessions, including keynote
                                                        speeches, panel
                                                        discussions, hands-on workshops, and breakout sessions covering
                                                        topics like patient safety,
                                                        leadership, technology integration, and mental health.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block wow fadeInUp" data-wow-delay="400ms"
                                            data-wow-duration="1500ms">
                                            <div className="acc-btn">
                                                <div className="icon-outer"><i className="bx bxs-arrow-from-left hide5"></i>
                                                    <i className="bx bxs-arrow-from-top show5"></i>
                                                </div> Who should attend the nursing
                                                conference ?
                                            </div>
                                            <div className="acc-content">
                                                <div className="content clearfix">
                                                    <p>The conference will feature a variety of sessions, including keynote
                                                        speeches, panel
                                                        discussions, hands-on workshops, and breakout sessions covering
                                                        topics like patient safety,
                                                        leadership, technology integration, and mental health.</p>
                                                </div>
                                            </div>
                                        </li>



                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="faq_wrap">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-md-12 session_wrap_style1 wow fadeInUp" data-wow-delay="200ms"
                            data-wow-duration="1000ms">
                            <h2 className="bot_wrap157 mty155">Venue <span className="org_wrap">Highlights</span></h2>
                        </div>
                    </div>
                </div>
                <div className="bg_wrap_acc5 test-heghlight" >
                    <div className="auto-container clearfix">
                        <div className="row">
                            <div className="col-md-12">
                                <a href="#" className="add_bh154 wow fadeInUp" data-wow-delay="200ms"
                                    data-wow-duration="1000ms">
                                    <div className="gallery_wra15 test-highlights1" ></div>
                                    <span>Lucerne</span>
                                </a>

                                <a href="#" className="add_bh155 wow fadeInUp" data-wow-delay="300ms"
                                    data-wow-duration="1000ms">
                                    <div className="gallery_wra15 test-highlights2" ></div>
                                    <span>Bern</span>
                                </a>

                                <a href="#" className="add_bh154 wow fadeInUp" data-wow-delay="400ms"
                                    data-wow-duration="1000ms">
                                    <div className="gallery_wra15 test-highlights3" ></div>
                                    <span>Jungfraujoch</span>
                                </a>

                                <a href="#" className="add_bh156 wow fadeInUp" data-wow-delay="500ms"
                                    data-wow-duration="1000ms">
                                    <div className="gallery_wra15 test-highlights4" ></div>
                                    <span>Geneva</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spek_wrap">
                <div className="set_gray_wrap1 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                    <div className="add_style1">
                        <hr />
                        <h2> Want to speak at health's biggest conference? We're excited to announce that the HIMSS25 Call
                            for
                            Proposals is now open!</h2>
                        <a href="#">Submit Your Abstract</a>
                    </div>
                </div>
                <div className="set_gray_wrap2 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1000ms"><img
                    src={img4} alt="Nursing Global Conference" /></div>
            </div>

            <div className="import_wrap2">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-md-12 session_wrap_style1 wow fadeInUp" data-wow-delay="200ms"
                            data-wow-duration="1000ms">
                            <h2>Explore Our Comprehensive Networking Services</h2>
                            <p>Unlock new opportunities and build valuable connections with our comprehensive networking
                                services,
                                tailored to enhance your conference experience.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="enhan_wrap">
                <div className="auto-container clearfix">
                    <div className="row clearfix">
                        <div className="col-md-3 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                            <div className="wrap_iocn1">
                                <img src={icon1} alt="Nursing Global Conference" />
                                Enhance international cooperation
                            </div>
                        </div>
                        <div className="col-md-3 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                            <div className="wrap_iocn1">
                                <img src={icon2} alt="Nursing Global Conference" />
                                Provide opportunities for networking
                            </div>
                        </div>
                        <div className="col-md-3 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1000ms">
                            <div className="wrap_iocn1 top156">
                                <img src={icon3} alt="Nursing Global Conference" />
                                Economic growth
                            </div>
                        </div>
                        <div className="col-md-3 wow fadeInUp" data-wow-delay="800ms" data-wow-duration="1000ms">
                            <div className="wrap_iocn2 top156">
                                <img src={icon8} alt="Nursing Global Conference" />
                                Scholars help
                            </div>
                        </div>
                        <div className="col-md-12 wow fadeInUp" data-wow-delay="1000ms" data-wow-duration="1000ms">
                            <hr />
                        </div>
                        <div className="col-md-3 wow fadeInUp" data-wow-delay="1100ms" data-wow-duration="1000ms">
                            <div className="wrap_iocn1 top156">
                                <img src={icon4} alt="Nursing Global Conference" />
                                New learnings
                            </div>
                        </div>
                        <div className="col-md-3 wow fadeInUp" data-wow-delay="1200ms" data-wow-duration="1000ms">
                            <div className="wrap_iocn1">
                                <img src={icon5} alt="Nursing Global Conference" />
                                Contribute to technological advancements
                            </div>
                        </div>
                        <div className="col-md-3 wow fadeInUp" data-wow-delay="1300ms" data-wow-duration="1000ms">
                            <div className="wrap_iocn1">
                                <img src={icon6} alt="Nursing Global Conference" />
                                Promoting the exchange of ideas
                            </div>
                        </div>
                        <div className="col-md-3 wow fadeInUp" data-wow-delay="1400ms" data-wow-duration="1000ms">
                            <div className="wrap_iocn2 top156">
                                <img src={icon7} alt="Nursing Global Conference" />
                                Knowledge sharing
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="down_wrap_style wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-md-10 mar_wrap55">
                            <div className="ess_wrap5">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Essential <span>Downloads</span></h2>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box_st1">
                                            <img src={edit} className="pol55" alt="Nursing Global Conference" />
                                            <h3>Poster</h3>
                                            <a href="#">Download <img src={dow}
                                                alt="Nursing Global Conference" /></a>
                                        </div>
                                        <div className="blue_wrap55"></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box_st1">
                                            <img src={edit} className="pol55" alt="Nursing Global Conference" />
                                            <h3>Brochure</h3>
                                            <a href="#">Download <img src={dow}
                                                alt="Nursing Global Conference" /></a>
                                        </div>
                                        <div className="blue_wrap55"></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box_st1">
                                            <img src={edit} className="pol55" alt="Nursing Global Conference" />
                                            <h3>Sample Abstract</h3>
                                            <a href="#">Download <img src={dow}
                                                alt="Nursing Global Conference" /></a>
                                        </div>
                                        <div className="blue_wrap55"></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box_st1">
                                            <img src={edit} className="pol55" alt="Nursing Global Conference" />
                                            <h3>Sample PPT</h3>
                                            <a href="#">Download <img src={dow}
                                                alt="Nursing Global Conference" /></a>
                                        </div>
                                        <div className="blue_wrap55"></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box_st1">
                                            <img src={edit} className="pol55" alt="Nursing Global Conference" />
                                            <h3>Poster </h3>
                                            <a href="#">Download <img src={dow}
                                                alt="Nursing Global Conference" /></a>
                                        </div>
                                        <div className="blue_wrap55"></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box_st1">
                                            <img src={edit} className="pol55" alt="Nursing Global Conference" />
                                            <h3>Conference </h3>
                                            <a href="#">Download <img src={dow}
                                                alt="Nursing Global Conference" /></a>
                                        </div>
                                        <div className="blue_wrap55"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="cont_wrap_add  wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                <div className="auto-container clearfix">
                    <div className="row clearfix">
                        <div className="col-md-9 mar_wrap1579">
                            <div className="call_cont_st1">
                                <div className="wr_sty1">
                                    <div className="logo_cont15"><img src={logo}
                                        alt="Nursing Global Conference" /></div>
                                    <div className="cont_head_st1">
                                        <h2>Discover What's Next in Precision Medicine!</h2>
                                        <p>Join our community today for the latest news, exclusive interviews, and unique
                                            insights from
                                            world-renowned speakers and experts.</p>
                                    </div>
                                    <form id="joinourcommunityform" method="post">
                                        <div className="row">
                                            <div className="col-md-12 cont_wrap14666">
                                                <label>Email Address:*</label>
                                                <input name="email" type="email" id="joinourcommunityemail" />
                                                <div id="joinourcommunityemail-error" style={{ color: " red" }}></div>
                                            </div>
                                            <div className="col-md-6 cont_wrap14666">
                                                <label>First Name:*</label>
                                                <input name="fname" id="joinourcommunityfname" type="text" />
                                                <div id="jocfname-error" style={{ color: " red" }}></div>
                                            </div>
                                            <div className="col-md-6 cont_wrap14666">
                                                <label>Last Name:*</label>
                                                <input name="lname" id="joinourcommunitylname" type="text" />
                                                <div id="joclname-error" style={{ color: " red" }}></div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="sbtn"><input name="submit" value="Submit" className="appy15"
                                                    type="button" id="joinourcommunitysubmitbtn"
                                                    onClick="savejoincommunity();" /></div>
                                                <input type="hidden" name="category" value="joinourcommunity" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="wr_sty2">
                                    <div className="img_wrap156">
                                        <img src={mess1} className="mess15" alt="Nursing Global Conference" />
                                        <span className="jum55">June 20-23, 2025</span>

                                        <img src={mess2} className="mess16" alt="Nursing Global Conference" />
                                        <span className="jum56">Double Tree by Hilton Hotel SanFrancisco Airport, CA, USA</span>

                                        <span className="jum57"><img src={ph} alt="Nursing Global Conference" />+1
                                            (234) 567-8900</span>

                                        <img src={mess} className="img15444" alt="Nursing Global Conference" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Main