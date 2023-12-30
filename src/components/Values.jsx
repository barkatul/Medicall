import { IoDiamondSharp } from "react-icons/io5";
import Card from "../UI/Card";
import { values } from '../data';
import Image from '../images/pexels-chokniti-khongchum-2280547.jpg';
import SectionHead from './SectionHead';

const Values = () => {
  return (
    <section className='values'>
        <div className='container values__container'>
            <div className='values__left'>
                <div className='values__image'>
                    <img src={Image} alt="Values Image" />
                </div>
            </div>
            <div className='values__right'>
                <SectionHead icon={<IoDiamondSharp/>} title="Values"></SectionHead>
                <p>
                Compassionate care, innovative solutions, transparent trust—our values create a healthier community for all.
                </p>
                <div className='values__wrapper'>
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    } 
                </div>
            </div>
        </div>
    </section>
  )

}

export default Values