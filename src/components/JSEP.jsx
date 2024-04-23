import { useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { jsepData } from "./Data";

const JSEP = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const jsepList = jsepData.map((item, index) => {
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
                    {item.description.split("\n").map(description => {
                        return (
                            <p className="description-content">{description}</p>
                        )
                    })}
                    <img className="scenarioImg" src={item.imgSrc}/>
                    <ul className="listItem">
                        {item.action.map((subitem, subitemIndex) => {
                            return (
                                <li key={subitemIndex}>{subitem}</li>
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