import { FaCaretRight } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import { programs } from "../data";
import SectionHead from "./SectionHead";


const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaDiamond/>} title="Our Services"/>
        <div className="programs__wrapper">
            {
                programs.map(({id, icon, image, title, info, path})=> {
                    return (
                        <Card className="programs__program" key={id}>
                            {/* <span>{icon}</span> */}
                            <img className="programs__image" src={image} alt={icon} />
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to="/contact" className="btn sm">Learn More <FaCaretRight/></Link>
                        </Card>
                    )
                })
            }
            </div>
        </div>
    </section>
  )
} 

export default Programs