import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import "./styles.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                <div>
                    <h2 className="brand-footer">Kartavya Academy</h2>
                </div>

                <div className="quick-links">
                    <div className="row-heading">Quick Links</div>
                    <div className="row-links">
                        <a href="/achievement" target="_blank">
                            Achievements
                        </a>
                    </div>
                    <div className="row-links">
                        <a href="/about" target="_blank">
                            About us
                        </a>
                    </div>
                    <div className="row-links">
                        <a href="/courses" target="_blank">
                            Courses
                        </a>{" "}
                    </div>
                    <div className="row-links">
                        <a href="/contact" target="_blank">
                            Contact Us
                        </a>
                    </div>
                </div>
                <div className="icon-links">
                    <a
                        href="https://www.facebook.com/kartavyacademy"
                        target="_blank"
                    >
                        <FacebookIcon className="icons" />
                    </a>
                    <InstagramIcon className="icons" />
                    <MailIcon className="icons" />
                    <div className="freepik-mention">
                        Icons made by{" "}
                        <a href="https://www.freepik.com" title="Freepik">
                            Freepik
                        </a>{" "}
                        from{" "}
                        <a href="https://www.flaticon.com/" title="Flaticon">
                            www.flaticon.com
                        </a>
                    </div>
                    <h6 className="copyright">&#169; KARTAVYA ACADEMY LTD.</h6>
                </div>
            </div>
        </div>
    );
}
export default Footer;
