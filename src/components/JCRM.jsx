import { useState } from "react";
import { RiArrowDropDownLine, RiCornerDownRightFill } from 'react-icons/ri';
import { jcrmData } from "./Data";

const JCRM = () => {
    const regex = /^(CCOM)|^[(-]/;

    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const jcrmList = jcrmData.map((item, index) => {
        return (
            <div className="contentWrapper" key={item.id}>
                <button
                    className={`accordionButton ${activeIndex === index ? "active" : ""}`}
                    onClick={() => handleItemClick(index)}
                >
                    <p className="accordionTitle">{item.title}</p>
                    <RiArrowDropDownLine className={`arrow ${activeIndex === index ? "active" : ""}`} />
                </button>
                <div
                    className={`scenario-container ${activeIndex === index ? "active" : ""}`}
                >
                    {item.description.split("\n").map(description => {
                        return (
                            <p className="scenarioDescription" key={description}>{description}</p>
                        )
                    })}
                    <ul className="crewAction">
                        {item.action.map((subitem, subitemIndex) => {
                            return (
                                <li key={subitemIndex} className="listItem"
                                    ><RiCornerDownRightFill className={`listIcon ${regex.test(subitem) ? "hide" : ""}`}/> {subitem}
                                </li>
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