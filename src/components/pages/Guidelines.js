import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
const Guidelines = () => {
    return (
        <div>

            <Helmet>
                <title>Guidelines  for a Nursing Healthcare</title>
                <meta name="description" content="Empowering Excellence in Nursing Practice. Join us for an unparalleled networking experience – register now to connect with industry professionals and leaders!" />
            </Helmet>


            <Header />


            <div class="brand_wrap">
                <div class="auto-container">
                    <div class="row">
                        <div class="col-md-12">
                            <Link to="/">Home</Link> <i class="fa fa-angle-right"></i>
                            <span>Guidelines</span>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="abs_wrap5 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">Guidelines</h1>

            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 mar_center">
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12  wow fadeInUp" data-wow-delay="400ms"
                                data-wow-duration="1000ms">
                                <div class="content1">
                                    <div class="heading">Revisions and Errata</div>
                                    <p>Nursing education focuses on educating nurses about how to administer different
                                        medicines, to examine
                                        patient and to deliver best services to patients with an aim to development the
                                        nursing profession where
                                        nurses must be prepared to satisfy various patients' needs; function as leaders; and
                                        advance science
                                        that welfares patients and therefore the capacity of health professionals to make
                                        safe, quality patient.
                                    </p>
                                    <p>Among nurse educators, opinions continue about the ideal balance of practical
                                        preparation and the need
                                        to educate the forthcoming practitioner to manage healthcare and to have a broader
                                        view of the practice.
                                        For meeting both requirements, nurse education aims to develop a lifelong expert who
                                        can adapt
                                        effectively to changes in both the theory and practice of nursing.</p>
                                    <div class="heading">Revisions</div>
                                    <p>The usages of Medical simulation in nursing education is significant for improving
                                        practice, pa-tient
                                        safety, and inter professional team skills, the equilibrium of simulation to
                                        clinical time remains in
                                        the hands of the organisations.</p>
                                    <p>Nurses are mastering the difficulties of care and advanced technology permitting them
                                        in greater
                                        numbers to contribute decisively on teams, understand health policy, analyse
                                        information to make
                                        critical decisions, and support the well-being of all.</p>
                                    <ul>
                                        <li>Nursing Ethics</li>
                                        <li>Nursing Management</li>
                                        <li>Nursing Leadership</li>
                                        <li>Innovations in Nursing Education</li>
                                        <li>Evidence-Based Teaching and Learning</li>
                                        <li>Health Education</li>
                                    </ul>
                                    <div class="heading">Revisions and Errata</div>
                                    <p>Nursing education focuses on educating nurses about how to administer different
                                        medicines, to examine
                                        patient and to deliver best services to patients with an aim to development the
                                        nursing profession where
                                        nurses must be prepared to satisfy various patients' needs; function as leaders; and
                                        advance science
                                        that welfares patients and therefore the capacity of health professionals to make
                                        safe, quality patient.
                                    </p>
                                    <div class="heading">Revisions and Errata</div>
                                    <p>
                                        Among nurse educators, opinions continue about the ideal balance of practical
                                        preparation and the need
                                        to educate the forthcoming practitioner to manage healthcare and to have a broader
                                        view of the practice.
                                        For meeting both requirements, nurse education aims to develop a lifelong expert who
                                        can adapt
                                        effectively to changes in both the theory and practice of nursing.</p>
                                    <p>The usages of Medical simulation in nursing education is significant for improving
                                        practice, pa-tient
                                        safety, and inter professional team skills, the equilibrium of simulation to
                                        clinical time remains in
                                        the hands of the organisations.</p>
                                    <p>Nurses are mastering the difficulties of care and advanced technology permitting them
                                        in greater
                                        numbers to contribute decisively on teams, understand health policy, analyse
                                        information to make
                                        critical decisions, and support the well-being of all.</p>
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

export default Guidelines