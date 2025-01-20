import React from 'react'
import style from "../css/OutCome.module.css";

const Accordion = () => {
    return (
        <div className={style.AccordionMain}>
            <h2 className={style.AccordionHead}>WE HAVE ALL THE ANSWERS</h2>
            <div className={style.AccordionData}>
                <div className="collapse collapse-plus  bg-white  border-b-2 ">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is The PR TREE?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">What is Digital PR?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Why is it important for you?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Why is it important for you?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>

            <div className={style.helpMain}>
                <div className={style.needHelp}>
                    <p>Need Help? Our specialist is one click away</p>
                    <button className={style.bookBtn}>Book Free Consultation</button>
                </div>
            </div>

        </div>
    )
}

export default Accordion