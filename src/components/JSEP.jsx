import { useState } from "react";
import { RiArrowDropDownLine, RiCornerDownRightFill } from 'react-icons/ri';
import { jsepData } from "./Data";

const JSEP = () => {
    const regex = /^(CCOM)|^[(-]/;

    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const jsepList = jsepData.map((item, index) => {
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
                            <p className="scenarioDescription">{description}</p>
                        )
                    })}
                    <img className="scenarioImg" src={item.imgSrc}/>
                    <ul className="crewAction">
                        {item.action.map((subitem, subitemIndex) => {
                            return (
                                <li key={subitemIndex}
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
            {jsepList}
        </>
    )
}

export default JSEP;