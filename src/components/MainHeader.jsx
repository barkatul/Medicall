import { Link } from "react-router-dom";
import Image from '../images/6512251.png';

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          
          <h4>Call Us For Any Medical Needs</h4>
          <h1>Revolutionizing Healthcare with Exceptional Medical Services</h1>
          <p>
          Empowering Lives Through Comprehensive and Compassionate Medical Solutions
          </p>
          <Link to="/contact" className='btn lg'> Book My Appointment</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader