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
                            <table className="equipmentTable" key={subitemIndex}>
                                <tbody>
                                    <tr>
                                        <td>{subitem.criteria}</td>
                                        <td>{subitem.ATR}</td>
                                        <td>{subitem.B738}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    })}
                </div>
            </div>
        )
    })

    return (
        <>
            {emergencyEquipmentList}
        </>
    )
}

export default EmergencyEquipment;