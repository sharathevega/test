import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet';

const SubmitAbstract = () => {
    return (
        <div >
            <Helmet>
                <title>Submit Abstract Nursing Strategies for a Healthier Tomorrow</title>
                <meta name="description" content="Empowering Excellence in Nursing Practice. Join us for an unparalleled networking experience – register now to connect with industry professionals and leaders!" />
            </Helmet>
            <Header />
            <h1 class="abs_wrap5 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">Abstract Submission</h1>
            <div class="bg_add_form15">
                <div class="auto-container">
                    <div class="row clearfix">
                        <form action="" id="abstractform" method="POST">


                            <div class=" col-md-8 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                                <div class="row clearfix">
                                    <div class="col-md-6 left15">

                                        <select name="title" class="set156" id="title" required>
                                            <option value="" selected="selected">Select</option>
                                            <option value="Dr.">Dr.</option>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Miss.">Miss.</option>
                                            <option value="Mrs.">Mrs.</option>
                                        </select>
                                        <div class="error" id="title_error"></div>
                                    </div>
                                    <div class="col-md-6 left16">
                                        <input name="name" id="name" class="set157" placeholder="Name" value="" type="text"
                                            required />
                                        <div class="error" id="name_error"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-6 left15">
                                        <input name="email" id="email" class="set157" placeholder="Email" value=""
                                            type="email" required />
                                        <div class="error" id="email_error"></div>
                                    </div>
                                    <div class="col-md-6 left16">
                                        <input name="alt_email" id="alt_email" class="set157" value=""
                                            placeholder="Alternative Email" type="email" />
                                        <div class="error" id="alt_email_error"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-6 left15">
                                        <input name="phone" id="phone" class="set157" placeholder="Phone" value=""
                                            type="text" required />
                                        <div class="error" id="phone_error"></div>
                                    </div>
                                    <div class="col-md-6 left16">
                                        <input name="whatsapp_number" id="whatsapp_number" class="set157" value=""
                                            placeholder="WhatsApp Number" type="text" />
                                        <div class="error" id="whatsapp_number_error"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-6 left15">
                                        <input name="city" id="city" class="set157" placeholder="City" type="text" value=""
                                            required />
                                        <div class="error" id="city_error"></div>
                                    </div>
                                    <div class="col-md-6 left16">
                                        <select class="set156" name="country" id="country" required>
                                            <option value="">Select Country</option>
                                            <option value="1">Afghanistan</option>
                                            <option value="2">Albania</option>
                                            <option value="3">Algeria</option>
                                            <option value="4">American Samoa</option>
                                            <option value="5">Andorra</option>
                                            <option value="6">Angola</option>
                                            <option value="7">Anguilla</option>
                                            <option value="8">Antarctica</option>
                                            <option value="9">Antigua and Barbuda</option>
                                            <option value="10">Argentina</option>
                                            <option value="11">Armenia</option>
                                            <option value="12">Aruba</option>
                                            <option value="13">Australia</option>
                                            <option value="14">Austria</option>
                                            <option value="15">Azerbaijan</option>
                                            <option value="16">Bahamas</option>
                                            <option value="17">Bahrain</option>
                                            <option value="18">Bangladesh</option>
                                            <option value="19">Barbados</option>
                                            <option value="20">Belarus</option>
                                            <option value="21">Belgium</option>
                                            <option value="22">Belize</option>
                                            <option value="23">Benin</option>
                                            <option value="24">Bermuda</option>
                                            <option value="25">Bhutan</option>
                                            <option value="26">Bolivia</option>
                                            <option value="27">Bosnia and Herzegowina</option>
                                            <option value="28">Botswana</option>
                                            <option value="29">Bouvet Island</option>
                                            <option value="30">Brazil</option>
                                            <option value="31">British Indian Ocean Territory</option>
                                            <option value="32">Brunei Darussalam</option>
                                            <option value="33">Bulgaria</option>
                                            <option value="34">Burkina Faso</option>
                                            <option value="35">Burundi</option>
                                            <option value="36">Cambodia</option>
                                            <option value="37">Cameroon</option>
                                            <option value="38">Canada</option>
                                            <option value="39">Cape Verde</option>
                                            <option value="40">Cayman Islands</option>
                                            <option value="41">Central African Republic</option>
                                            <option value="42">Chad</option>
                                            <option value="43">Chile</option>
                                            <option value="44">China</option>
                                            <option value="45">Christmas Island</option>
                                            <option value="46">Cocos (Keeling) Islands</option>
                                            <option value="47">Colombia</option>
                                            <option value="48">Comoros</option>
                                            <option value="49">Congo</option>
                                            <option value="50">Congo, the Democratic Republic of the</option>
                                            <option value="51">Cook Islands</option>
                                            <option value="52">Costa Rica</option>
                                            <option value="53">Cote d'Ivoire</option>
                                            <option value="54">Croatia (Hrvatska)</option>
                                            <option value="55">Cuba</option>
                                            <option value="56">Cyprus</option>
                                            <option value="57">Czech Republic</option>
                                            <option value="58">Denmark</option>
                                            <option value="59">Djibouti</option>
                                            <option value="60">Dominica</option>
                                            <option value="61">Dominican Republic</option>
                                            <option value="62">East Timor</option>
                                            <option value="63">Ecuador</option>
                                            <option value="64">Egypt</option>
                                            <option value="65">El Salvador</option>
                                            <option value="66">Equatorial Guinea</option>
                                            <option value="67">Eritrea</option>
                                            <option value="68">Estonia</option>
                                            <option value="69">Ethiopia</option>
                                            <option value="70">Falkland Islands (Malvinas)</option>
                                            <option value="71">Faroe Islands</option>
                                            <option value="72">Fiji</option>
                                            <option value="73">Finland</option>
                                            <option value="74">France</option>
                                            <option value="75">France Metropolitan</option>
                                            <option value="76">French Guiana</option>
                                            <option value="77">French Polynesia</option>
                                            <option value="78">French Southern Territories</option>
                                            <option value="79">Gabon</option>
                                            <option value="80">Gambia</option>
                                            <option value="81">Georgia</option>
                                            <option value="82">Germany</option>
                                            <option value="83">Ghana</option>
                                            <option value="84">Gibraltar</option>
                                            <option value="85">Greece</option>
                                            <option value="86">Greenland</option>
                                            <option value="87">Grenada</option>
                                            <option value="88">Guadeloupe</option>
                                            <option value="89">Guam</option>
                                            <option value="90">Guatemala</option>
                                            <option value="91">Guinea</option>
                                            <option value="92">Guinea-Bissau</option>
                                            <option value="93">Guyana</option>
                                            <option value="94">Haiti</option>
                                            <option value="95">Heard and Mc Donald Islands</option>
                                            <option value="96">Holy See (Vatican City State)</option>
                                            <option value="97">Honduras</option>
                                            <option value="98">Hong Kong</option>
                                            <option value="99">Hungary</option>
                                            <option value="100">Iceland</option>
                                            <option value="101">India</option>
                                            <option value="102">Indonesia</option>
                                            <option value="103">Iran (Islamic Republic of)</option>
                                            <option value="104">Iraq</option>
                                            <option value="105">Ireland</option>
                                            <option value="106">Israel</option>
                                            <option value="107">Italy</option>
                                            <option value="108">Jamaica</option>
                                            <option value="109">Japan</option>
                                            <option value="110">Jordan</option>
                                            <option value="111">Kazakhstan</option>
                                            <option value="112">Kenya</option>
                                            <option value="113">Kiribati</option>
                                            <option value="114">Korea, Democratic People's Republic of</option>
                                            <option value="115">Korea, Republic of</option>
                                            <option value="116">Kuwait</option>
                                            <option value="117">Kyrgyzstan</option>
                                            <option value="118">Lao, People's Democratic Republic</option>
                                            <option value="119">Latvia</option>
                                            <option value="120">Lebanon</option>
                                            <option value="121">Lesotho</option>
                                            <option value="122">Liberia</option>
                                            <option value="123">Libyan Arab Jamahiriya</option>
                                            <option value="124">Liechtenstein</option>
                                            <option value="125">Lithuania</option>
                                            <option value="126">Luxembourg</option>
                                            <option value="127">Macau</option>
                                            <option value="128">Macedonia, The Former Yugoslav Republic of</option>
                                            <option value="129">Madagascar</option>
                                            <option value="130">Malawi</option>
                                            <option value="131">Malaysia</option>
                                            <option value="132">Maldives</option>
                                            <option value="133">Mali</option>
                                            <option value="134">Malta</option>
                                            <option value="135">Marshall Islands</option>
                                            <option value="136">Martinique</option>
                                            <option value="137">Mauritania</option>
                                            <option value="138">Mauritius</option>
                                            <option value="139">Mayotte</option>
                                            <option value="140">Mexico</option>
                                            <option value="141">Micronesia, Federated States of</option>
                                            <option value="142">Moldova, Republic of</option>
                                            <option value="143">Monaco</option>
                                            <option value="144">Mongolia</option>
                                            <option value="145">Montserrat</option>
                                            <option value="146">Morocco</option>
                                            <option value="147">Mozambique</option>
                                            <option value="148">Myanmar</option>
                                            <option value="149">Namibia</option>
                                            <option value="150">Nauru</option>
                                            <option value="151">Nepal</option>
                                            <option value="152">Netherlands</option>
                                            <option value="153">Netherlands Antilles</option>
                                            <option value="154">New Caledonia</option>
                                            <option value="155">New Zealand</option>
                                            <option value="156">Nicaragua</option>
                                            <option value="157">Niger</option>
                                            <option value="158">Nigeria</option>
                                            <option value="159">Niue</option>
                                            <option value="160">Norfolk Island</option>
                                            <option value="161">Northern Mariana Islands</option>
                                            <option value="162">Norway</option>
                                            <option value="163">Oman</option>
                                            <option value="164">Pakistan</option>
                                            <option value="165">Palau</option>
                                            <option value="166">Panama</option>
                                            <option value="167">Papua New Guinea</option>
                                            <option value="168">Paraguay</option>
                                            <option value="169">Peru</option>
                                            <option value="170">Philippines</option>
                                            <option value="171">Pitcairn</option>
                                            <option value="172">Poland</option>
                                            <option value="173">Portugal</option>
                                            <option value="174">Puerto Rico</option>
                                            <option value="175">Qatar</option>
                                            <option value="176">Reunion</option>
                                            <option value="177">Romania</option>
                                            <option value="178">Russian Federation</option>
                                            <option value="179">Rwanda</option>
                                            <option value="180">Saint Kitts and Nevis</option>
                                            <option value="181">Saint Lucia</option>
                                            <option value="182">Saint Vincent and the Grenadines</option>
                                            <option value="183">Samoa</option>
                                            <option value="184">San Marino</option>
                                            <option value="185">Sao Tome and Principe</option>
                                            <option value="186">Saudi Arabia</option>
                                            <option value="187">Senegal</option>
                                            <option value="188">Seychelles</option>
                                            <option value="189">Sierra Leone</option>
                                            <option value="190">Singapore</option>
                                            <option value="191">Slovakia (Slovak Republic)</option>
                                            <option value="192">Slovenia</option>
                                            <option value="193">Solomon Islands</option>
                                            <option value="194">Somalia</option>
                                            <option value="195">South Africa</option>
                                            <option value="196">South Georgia and the South Sandwich Islands</option>
                                            <option value="197">Spain</option>
                                            <option value="198">Sri Lanka</option>
                                            <option value="199">State of Palestine</option>
                                            <option value="200">St. Helena</option>
                                            <option value="201">St. Pierre and Miquelon</option>
                                            <option value="202">Sudan</option>
                                            <option value="203">Suriname</option>
                                            <option value="204">Svalbard and Jan Mayen Islands</option>
                                            <option value="205">Swaziland</option>
                                            <option value="206">Sweden</option>
                                            <option value="207">Switzerland</option>
                                            <option value="208">Syrian Arab Republic</option>
                                            <option value="209">Taiwan</option>
                                            <option value="210">Tajikistan</option>
                                            <option value="211">Tanzania, United Republic of</option>
                                            <option value="212">Thailand</option>
                                            <option value="213">Togo</option>
                                            <option value="214">Tokelau</option>
                                            <option value="215">Tonga</option>
                                            <option value="216">Trinidad and Tobago</option>
                                            <option value="217">Tunisia</option>
                                            <option value="218">Turkey</option>
                                            <option value="219">Turkmenistan</option>
                                            <option value="220">Turks and Caicos Islands</option>
                                            <option value="221">Tuvalu</option>
                                            <option value="222">Uganda</option>
                                            <option value="223">Ukraine</option>
                                            <option value="224">United Arab Emirates</option>
                                            <option value="225">United Kingdom</option>
                                            <option value="226">United States</option>
                                            <option value="227">United States Minor Outlying Islands</option>
                                            <option value="228">Uruguay</option>
                                            <option value="229">Uzbekistan</option>
                                            <option value="230">Vanuatu</option>
                                            <option value="231">Venezuela</option>
                                            <option value="232">Vietnam</option>
                                            <option value="233">Virgin Islands (British)</option>
                                            <option value="234">Virgin Islands (U.S.)</option>
                                            <option value="235">Wallis and Futuna Islands</option>
                                            <option value="236">Western Sahara</option>
                                            <option value="237">Yemen</option>
                                            <option value="238">Yugoslavia</option>
                                            <option value="239">Zambia</option>
                                            <option value="240">Zimbabwe</option>
                                            <option value="241">Serbia</option>
                                            <option value="242">Republic of Kosovo</option>
                                        </select>
                                        <div class="error" id="country_error"></div>
                                    </div>

                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-6 left15">
                                        <input name="organization" id="organization" class="set157"
                                            placeholder="Organization" type="text" value="" required />
                                        <div class="error" id="organization_error"></div>
                                    </div>
                                    <div class="col-md-6 left16">

                                        <select name="intrested" class="set156" id="intrested" required>
                                            <option value="" selected="selected">Interested In</option>
                                            <option value="Oral Presentation (In-Person)">Oral Presentation (In-Person)
                                            </option>
                                            <option value="Oral Presentation (Virtual)">Oral Presentation (Virtual)</option>
                                            <option value="Poster Presentation (In-Person)">Poster Presentation (In-Person)
                                            </option>
                                            <option value="Poster Presentation (Virtual)">Poster Presentation (Virtual)
                                            </option>
                                        </select>
                                        <div class="error" id="intrested_error"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-12">
                                        <input name="abstract_title" id="abstract_title" class="set157"
                                            placeholder="Abstract Title" type="text" value="" required />
                                        <div class="error" id="abstract_title_error"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-12 set_lab575">
                                        <textarea name="message" id="message" class="set158" placeholder="Message" cols=""
                                            rows="" value=""></textarea>
                                        <div class="error" id="message_error"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-12 mar_lk55">
                                        <div class="upload_wrap15 col-lg-6 pd0">
                                            <div class="upload_wrat55 d-flex">Upload Your Abstract File*:
                                                <span>
                                                    <a href="#" class="ab-dbtn">Download Sample Abstract File</a>
                                                </span>
                                            </div>
                                            <span class="back_wrapblue" style={{ width: "59%" }}><input name="upload_abstract_file" class="abck155"
                                                type="file" required id="upload_abstract_file" value="" /><b>Choose
                                                    file</b> <span id="selected_file">No File
                                                        Chosen</span>
                                            </span>
                                            <div class="error pt-30" id="upload_abstract_file_error"></div>
                                            <span class="selct_wrap_pdf">Select PDF, DOC, DOCX or rtf File</span>
                                        </div>

                                        <div class="col-md-6 pd0">
                                            <div class="g-recaptcha margin-top-30"
                                                data-sitekey="6Lfk8wAqAAAAAPbKxIjt1Ady_rZoXHPc5R0qFZvX" data-action="LOGIN">
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <hr />
                                <div class="row">

                                    <div class="col-lg-6">
                                        <button type="button" name="submit" class="bt_nmk5"
                                            onclick="submitAbstract();">Submit
                                            Abstract</button>
                                    </div>
                                </div>
                                /
                            </div>

                        </form>

                        <div class="col-md-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div class="sq_abmainbox">
                                <div class="sq_abbox1"></div>
                                <div class="sq_abbox2"></div>
                                <span class="nur_wrap11">Nursing</span>
                                <span class="nur_wrap22">CONFERENCE</span>
                                <span class="nur_wrap33">June 20-23, 2025</span>
                                <span class="nur_wrap44">Francisco Airport, CA, USA</span>
                                <span class="map_l55 sq_map"><img src="images/map.png" alt="Nursing Global Conference" />
                                    Double Tree by Hilton Hotel SanFrancisco Airport, CA, USA</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SubmitAbstract