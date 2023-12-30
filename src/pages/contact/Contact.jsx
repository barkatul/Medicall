import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Header from "../../components/Header";
import HeaderImage from "../../images/Diagnostic Tests_hero-itok=kCnf8PFA.jpg";
import './contact.css';


const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    For Test Booking, General Enquiry & Other information, Kindly E-Mail us at ()
    <br />
    You may also call us at ()
    </Header>
    <section className='contact'>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <a href="mailto:barkatul.20@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><FaInstagramSquare/></a>
          <a href="https://whatsapp.com" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact