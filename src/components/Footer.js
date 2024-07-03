import React from 'react'
import logo from '../assets/images/logo-hd-1.png'
const Footer = () => {
  return (
    <div>
      <div className="footer_wrap">
        <div className="footer_add_st1">
          <img src={logo} alt="Nursing Global Conference" />
          <hr />
          <p>Join us for an inspiring and enlightening conference dedicated to the field of nursing, where we
            bring together
            professionals, educators, and innovators from around the globe.</p>
        </div>

        <div className="box_wrap_fot1">
          <div className="fot_add1">
            <h4>Mail Us At</h4>
            <p className=""><i className='bx bxs-envelope'></i> <a
              href="mailto:nursing@stemnetwork.info">nursing@stemnetwork.info</a><br />

              <i className='bx bxs-phone-call'></i> <a href="tel:+12345678900">+1 (234) 567-8900</a><br />
              <i className='bx bxl-whatsapp'></i> <a href="tel:+12345678900">+1 234 567 8900 </a><br />
            </p>
            <h4>Follow Us</h4>
            <p className="followus">
              <a href="https://www.linkedin.com/" target="_blank"><i className="bx bxl-linkedin-square"></i></a>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="bx bxl-youtube ficon"></i></a>
            </p>
          </div>

          <div className="menu_footer">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="https://nursing-meetings.com/development">Home</a></li>
              <li><a href="https://nursing-meetings.com/development/session-topic">Sessions</a></li>
              <li><a href="https://nursing-meetings.com/development/organizing-committee">Committee</a></li>
              <li><a href="https://nursing-meetings.com/development/speakers">Speakers</a></li>
              <li><a href="#">Program</a></li>
              <li><a href="https://nursing-meetings.com/development/faqs">FAQ's</a></li>

            </ul>
          </div>

          <div className="menu_footer2">
            <h4>General Enquiry</h4>
            <form id="enquiryForm" method="post">
              <div className="form">
                <div className="mb-2">
                  <input type="text" name="enquiryname" id="enquiryname" placeholder="Name"
                    className="form-control color-white" />
                  <div id="enquiryname_error" className="footer-error"></div>
                </div>
                <input type="text" placeholder="Email" name="enquiryemail" id="enquiryemail"
                  className="form-control mt-5 color-white" />
                <div id="enquiryemail_error" className="footer-error"></div>
                <div className="form-floating">
                  <textarea className="form-control color-white" name="enquiryquery" placeholder="Query"
                    id="floatingTextarea2" style={{ height: " 50px" }}></textarea>
                  <div id="enquiryquery_error" className="footer-error"></div>
                  <input type="hidden" name="category" id="category" value="enquiry" />
                </div>

                <button className="btn btn-primary w-100" onclick="enquiryformsubmit()" type="button"
                  id="enquiry_submit_btn">Submit</button>
                <div id="enquiry_error_div" className="footer-error"></div>
              </div>
            </form>

          </div>
        </div>
      </div>
      <div id="sequretiquestionModal" className="modal fade" tabindex="-1" aria-labelledby="sequretiquestionModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box sequretiquestionModalicon">
                <i className="fa fa-question" aria-hidden="true"></i>
              </div>
              <h4 className="sequretiquestionModalmodal-title w-100">Security Question</h4>
            </div>
            <div className="modal-body">
              <div className="col-md-12 cont_wrap14666">
                <div id="seequation">Anti-Spam: What is ?</div>
                <input id="seanswer" type="text" />
                <div id="security-ans-error" className="error"></div>
              </div>
            </div>
            <div className="modal-footer okbtn">
              <button id="securitysubmit" className="btn btn-success btn-block">Submit</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal HTML --> */}
      {/* <div id="myModal" className="modal fade" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box myModelicon">
                <i className="fa fa-check" aria-hidden="true"></i>

              </div>
              <h4 className="modal-title w-100 mymodelmodal-title">Abstract Registration Success!</h4>
            </div>
            <div className="modal-body">
              <p className="text-center mymodelmbody">Your abstract Registration is submitted successfully. Our
                team will contact
                you soon.
              </p>
            </div>
            <div className="modal-footer okbtn">
              <button className="btn btn-success btn-block" data-dismiss="modal" id="popupokbtn">OK</button>
            </div>
          </div>
        </div>
      </div> */}


      <div className="footer_last_wrap">
        <div className="last_st1"><a href="https://nursing-meetings.com/development/terms-of-use">Terms of Use</a> <a
          href="https://nursing-meetings.com/development/privacy-policy">Privacy Policy
        </a> <a href="https://nursing-meetings.com/development/contact">Contact Us</a></div>
        <div className="last_st2">Copyright © <a href="https://stemnetwork.com" target="_blank">STEM Network</a></div>
        <div className="last_st3"> Powered by <a href="https://evega.com" target="_blank">Evega</a></div>
      </div>

      {/* <div id="js-cookie-bg" className="cookie-bg">
        <div id="js-cookie-box" className="cookie-box cookie-box--hide">
          <div className="auto-container">
            <div className="row">
              <div className="col-md-9">
                <p className="cookie-text">We use cookies to improve your experience on our site. If you
                  continue to use this
                  site, we will assume that you consent to our use of cookies.</p>
              </div>
              <div className="col-md-3 text-right">
                <span id="js-cookie-accept" className="cookie-button">Accept</span>
                <span id="js-cookie-reject" className="cookie-button">Reject</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Footer