import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            <Header />

            <div className="brand_wrap">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/">Home</Link> <i className="fa fa-angle-right"></i>
                            <span>FAQ's</span>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="abs_wrap5 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">FAQ's</h1>

            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 mar_center">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12  wow fadeInUp" data-wow-delay="400ms"
                                data-wow-duration="1000ms">
                                <div className="faqsblock">
                                    <div className="content-column">
                                        <div className="inner-box">
                                            <ul className="accordion-box">
                                                {[...Array(5).keys()].map((i) => (
                                                    <li key={i} className={`accordion block wow fadeInUp ${activeIndex === i ? 'active-block' : ''}`} data-wow-delay={`${i * 200}ms`} data-wow-duration="1500ms">
                                                        <div className={`acc-btn ${activeIndex === i ? 'active' : ''}`} onClick={() => toggleAccordion(i)}>
                                                            <div className="icon-outer">
                                                                <i className="bx bxs-arrow-from-left hide5"></i>
                                                                <i className="bx bxs-arrow-from-top show5"></i>
                                                            </div>
                                                            {i === 0 && 'Will there be continuing education credits available ?'}
                                                            {i === 1 && 'How can I register for the nursing conference ?'}
                                                            {i === 2 && 'Who should attend the nursing conference ?'}
                                                            {i === 3 && 'What types of sessions will be offered ?'}
                                                            {i === 4 && 'How can I register for the nursing conference ?'}
                                                        </div>
                                                        <div className={`acc-content ${activeIndex === i ? 'current' : ''}`}>
                                                            <div className="content clearfix">
                                                                <p>The conference will feature a variety of sessions, including
                                                                    keynote speeches, panel
                                                                    discussions, hands-on workshops, and breakout sessions
                                                                    covering topics like patient safety,
                                                                    leadership, technology integration, and mental health.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Faqs;
