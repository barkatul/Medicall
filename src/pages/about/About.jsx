import Header from '../../components/Header'
import MissionImage from "../../images/R (1).jpeg"
import { default as HeaderImage, default as VisionImage } from "../../images/onpage_online-diagnostic-tests.jpeg"
import StoryImage from "../../images/pexels-edward-jenner-4033148.jpg"
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    At paradise medcall, we blend compassion and innovation to redefine healthcare, prioritizing personalized patient care and cutting-edge solutions.
    </Header>
    <section className='about__story'>
      <div className="container about__story-container">
        <div className='about__section-image'>
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className='about__section-content'>
          <h1>Our Story</h1>
          <p>At paradise medicall, our story is woven with a passion for revolutionizing healthcare.</p>
          <p> Founded on the principles of compassion and innovation, we embarked on a journey to redefine the patient experience.</p>
          <p>From humble beginnings to becoming a beacon of excellence, our commitment to providing personalized, accessible, and technology-driven healthcare remains unwavering.</p>
        </div>
      </div>
    </section>

    <section className='about__Vision'>
      <div className="container about__Vision-container">
        <div className='about__section-content'>
          <h1>Our Vision</h1>
          <p>Our vision is to empower lives through holistic healthcare, transcending traditional boundaries to create a healthier and more connected world.</p>
          <p>We aspire to be the catalyst for positive change in the healthcare landscape, where every individual experiences the transformative power of compassionate and innovative medical solutions.</p>
        </div>
        <div className='about__section-image'>
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>


    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className='about__section-image'>
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className='about__section-content'>
          <h1>Our Mission</h1>
          <p>Driven by a mission to provide exceptional and accessible healthcare, we integrate cutting-edge technology with a human touch.</p>
          <p>Our dedicated team strives to enhance the well-being of individuals and communities alike, making quality healthcare an inclusive and empowering journey for all.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About