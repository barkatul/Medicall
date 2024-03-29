import { FaQuestionCircle } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ";
import SectionHead from "./SectionHead";

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead icon={<FaQuestionCircle/>} title="FAQs"></SectionHead>
            <div className="faqs__wrapper">
                {
                    faqs.map(({id, question, answer}) => {
                        return <FAQ key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs