import JCRM from "./JCRM";
import EmergencyEquipment from "./EmergencyEquipment";
import JSEP from "./JSEP";
import OralTest from "./OralTest";

const ContentPanel = ({ activeTab }) => {
    return (
        <>
            <div className="contentPanel">
                {activeTab === "JCRM" && <JCRM />}
                {activeTab === "Emergency Equipment" && <EmergencyEquipment />}
                {activeTab === "JSEP" && <JSEP />}
                {activeTab === "Oral Test" && <OralTest />}
            </div>
        </>
    )
}

export default ContentPanel;