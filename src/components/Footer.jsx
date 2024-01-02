import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../images/20231230_183001.png";


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                Revolutionizing Healthcare with Exceptional Medical Services
                <br />
                Empowering Lives Through Comprehensive and Compassionate Medical Solutions
                </p>
                <div className="footer__socials">
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener">
                        <FaFacebook/>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
                        <FaTwitter/>
                    </a>
                    <a href="https://www.instagram.com/paradise_medicall/" target="_blank" rel="noreferrer noopener">
                        <RiInstagramFill/>
                    </a>
                    <a href="https://wa.me/916291181081" target="_blank" rel="noreferrer noopener">
                        <IoLogoWhatsapp/>
                    </a>
                    <a href="tel:+916291181081" target='_blank' rel='noreferrer noopener'><PiPhoneCallFill/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/contact">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>
                2024 PARADISE MEDICALL &copy; All Rights Reserved
            </small>
        </div>
    </footer>
  )
}

export default Footer