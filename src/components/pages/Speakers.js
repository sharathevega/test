import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import m4 from '../../assets/images/m4.jpg';
import { Helmet } from 'react-helmet';
const Speakers = () => {
    return (
        <div>

            <Helmet>
                <title>Speakers of Nursing healthcare</title>
                <meta name="description" content="Empowering Excellence in Nursing Practice. Join us for an unparalleled networking experience – register now to connect with industry professionals and leaders!" />
            </Helmet>

            <Header />
            <div class="brand_wrap">
                <div class="auto-container">
                    <div class="row">
                        <div class="col-md-12">
                            <Link href="/">Home</Link> <i class="fa fa-angle-right"></i> <span>Speakers</span>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="abs_wrap5 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">Speakers</h1>

            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 mar_center">
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12  wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                                <div class="add_session1">
                                    <p class="mb_114">Nursing education focuses on educating nurses about how to administer
                                        different medicines, to examine patient and to deliver best services to patients with an
                                        aim to development the nursing profession where nurses must be prepared to satisfy
                                        various patients' needs; function as leaders; and advance science that welfares patients
                                        and therefore the capacity of health professionals to make safe, quality
                                        patient.<br /><br />
                                        Among nurse educators, opinions continue about the ideal balance of practical
                                        preparation and the need to educate the forthcoming practitioner to manage healthcare
                                        and to have a broader view of the practice. For meeting both requirements, nurse
                                        education aims to develop a lifelong expert who can adapt effectively to changes in both
                                        the theory and practice of nursing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row auto-container committee-member">
                <div class="col-lg-3 work-item">
                    <div class="inner-box">
                        <figure class="image-box"><img src={m4} alt="" /></figure>
                        <div class="lower-content">
                            <h3 class="lower-link"><a href="">Julie Louis Gerberding</a></h3>
                            <h4>Foundation for NIH </h4>
                            <p>PMWC 2025 PIONEER HONOREE, INFECTIOUS DISEASES TRACK</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 work-item">
                    <div class="inner-box">
                        <figure class="image-box"><img src={m4} alt="" /></figure>
                        <div class="lower-content">
                            <h3 class="lower-link"><a href="">Julie Louis Gerberding</a></h3>
                            <h4>Foundation for NIH </h4>
                            <p>PMWC 2025 PIONEER HONOREE, INFECTIOUS DISEASES TRACK</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 work-item">
                    <div class="inner-box">
                        <figure class="image-box"><img src={m4} alt="" /></figure>
                        <div class="lower-content">
                            <h3 class="lower-link"><a href="">Julie Louis Gerberding</a></h3>
                            <h4>Foundation for NIH </h4>
                            <p>PMWC 2025 PIONEER HONOREE, INFECTIOUS DISEASES TRACK</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 work-item">
                    <div class="inner-box">
                        <figure class="image-box"><img src={m4} alt="" /></figure>
                        <div class="lower-content">
                            <h3 class="lower-link"><a href="">Julie Louis Gerberding</a></h3>
                            <h4>Foundation for NIH </h4>
                            <p>PMWC 2025 PIONEER HONOREE, INFECTIOUS DISEASES TRACK</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 work-item">
                    <div class="inner-box">
                        <figure class="image-box"><img src={m4} alt="" /></figure>
                        <div class="lower-content">
                            <h3 class="lower-link"><a href="">Julie Louis Gerberding</a></h3>
                            <h4>Foundation for NIH </h4>
                            <p>PMWC 2025 PIONEER HONOREE, INFECTIOUS DISEASES TRACK</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 work-item">
                    <div class="inner-box">
                        <figure class="image-box"><img src={m4} alt="" /></figure>
                        <div class="lower-content">
                            <h3 class="lower-link"><a href="">Julie Louis Gerberding</a></h3>
                            <h4>Foundation for NIH </h4>
                            <p>PMWC 2025 PIONEER HONOREE, INFECTIOUS DISEASES TRACK</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 work-item">
                    <div class="inner-box">
                        <figure class="image-box"><img src={m4} alt="" /></figure>
                        <div class="lower-content">
                            <h3 class="lower-link"><a href="">Julie Louis Gerberding</a></h3>
                            <h4>Foundation for NIH </h4>
                            <p>PMWC 2025 PIONEER HONOREE, INFECTIOUS DISEASES TRACK</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 work-item">
                    <div class="inner-box">
                        <figure class="image-box"><img src={m4} alt="" /></figure>
                        <div class="lower-content">
                            <h3 class="lower-link"><a href="">Julie Louis Gerberding</a></h3>
                            <h4>Foundation for NIH </h4>
                            <p>PMWC 2025 PIONEER HONOREE, INFECTIOUS DISEASES TRACK</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Speakers