import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
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
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener">
                        <FaLinkedin/>
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener">
                        <FaFacebook/>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
                        <FaTwitter/>
                    </a>
                    <a href="https://Instagram.com/" target="_blank" rel="noreferrer noopener">
                        <FaInstagram/>
                    </a>
                    <a href="https://whatsapp.com/" target="_blank" rel="noreferrer noopener">
                        <FaWhatsapp/>
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/doctors">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
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