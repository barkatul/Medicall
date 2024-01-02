import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import Header from "../../components/Header";
import HeaderImage from "../../images/Diagnostic Tests_hero-itok=kCnf8PFA.jpg";
import './contact.css';


const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    For Test Booking, General Enquiry & Other information, Kindly E-Mail us at <b>paradisemedicall6291@gmail.com</b>
    <br />
    You may also call us at <b>+91 6291 181 081</b>
    </Header>
    <section className='contact'>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <a href="mailto:paradisemedicall6291@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="https://www.instagram.com/paradise_medicall/" target='_blank' rel='noreferrer noopener'><RiInstagramFill/></a>
          <a href="https://wa.me/916291181081" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          <a href="tel:+916291181081" target='_blank' rel='noreferrer noopener'><PiPhoneCallFill/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact