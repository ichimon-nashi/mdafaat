import { fireExtinguisherData } from "./Data";

const EmergencyEquipment = () => {
    
    const fireExtinguisherTable = fireExtinguisherData.map((item, index) => {
        return (
            <table>
                <tr key={item.index}>
                    <td>{item.criteria}</td>
                    <td>{item.ATR}</td>
                    <td>{item.B738}</td>
                </tr>
            </table>
        )
    })
    
    return (
        <div>
            {fireExtinguisherTable}
        </div>
    )
}

export default EmergencyEquipment;