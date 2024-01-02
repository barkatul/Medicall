import Header from '../../components/Header'
import Trainer from '../../components/Trainer'
import { trainers } from '../../data'
import HeaderImage from '../../images/pexels-pixabay-40568.jpg'
import './trainers.css'

const Trainers = () => {
  return (
    <>
    <Header title="Our Doctors" image={HeaderImage}>
    Discover a team of dedicated and experienced doctors at paradise medicall. Our skilled healthcare professionals are committed to providing personalized care, ensuring your well-being is in expert hands.
    </Header>
    <section className='trainers'>
      <div className='container trainers__container'>
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Trainer key={id} image={image} name={name} job={job}/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers