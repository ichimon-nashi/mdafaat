import { useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { jcrmData } from "./Data";

const JCRM = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const jcrmList = jcrmData.map((item, index) => {
        return (
            <div className="contentWrapper" key={item.id}>
                <button
                    className={`accordion ${activeIndex === index ? "active" : ""}`}
                    onClick={() => handleItemClick(index)}
                >
                    <p className="title-content">{item.title}</p>
                    <RiArrowDropDownLine className={`arrow ${activeIndex === index ? "active" : ""}`} />
                </button>
                <div
                    className={`description-container ${activeIndex === index ? "active" : ""}`}
                >
                    <p className="description-content">{item.description}</p>
                    <ul className="crewAction">
                        {item.action.map((subitem, index) => {
                            return (
                                <li key={index}>{subitem}</li>
                            )

                        })}
                    </ul>
                </div>
            </div>
        )
    })

    return (
        <>
            {jcrmList}
        </>
    )
}

export default JCRM;