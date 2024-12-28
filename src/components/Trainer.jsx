import Card from '../UI/Card'

const Trainer = ({image, name, job, des, socials}) => {
  return (
    <Card className="trainer">
        <div className='trainer__img'>
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <h2>{des}</h2>
        <p>{job}</p>
    </Card>
  )
}

export default Trainer