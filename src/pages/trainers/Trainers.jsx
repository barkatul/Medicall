import Header from '../../components/Header'
import Trainer from '../../components/Trainer'
import { trainers } from '../../data'
import HeaderImage from '../../images/pexels-pixabay-208512.jpg'
import './trainers.css'

const Trainers = () => {
  return (
    <>
    <Header title="Our Doctors" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque accusamus asperiores nisi odit impedit quam optio excepturi nam mollitia.
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