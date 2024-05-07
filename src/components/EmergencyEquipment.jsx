import { useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { emergencyEquipmentData } from "./Data";

const EmergencyEquipment = () => {
    
    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const emergencyEquipmentList = emergencyEquipmentData.map((item, index) => {
            
        return (
            <div className="contentWrapper" key={item.id}>
                <button
                    className={`accordionButton ${activeIndex === index ? "active" : ""}`}
                    onClick={() => handleItemClick(index)}
                >
                    <p className="accordionTitle">{item.equipmentType}</p>
                    <RiArrowDropDownLine className={`arrow ${activeIndex === index ? "active" : ""}`} />
                </button>
                <div
                    className={`scenario-container ${activeIndex === index ? "active" : ""}`}
                >
                    {item.itemCriteria.map((subitem, subitemIndex) => {

                        return (
                            <div className="gridRow" key={subitemIndex}>
                                <div className="grid-col">
                                    {subitem.criteria}
                                </div>
                                <div className="grid-col">
                                    <div>{subitem.ATR}</div>
                                </div>
                                <div className="grid-col">
                                    {subitem.B738}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    })

    return (
        <div className="gridTable">
            {emergencyEquipmentList}
        </div>
    )
}

export default EmergencyEquipment;