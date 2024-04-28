import { useState, useEffect } from "react";

const Header = ({ activeTab, handleActiveTab }) => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 5);
      });
    });

    return (
        <div className={`headerContainer ${scroll ? "sticky" : ""}`}>
            {/* Tab navigation */}
            <ul className="tab-nav">
                <li 
                    className={activeTab === "JCRM" ? "active" : ""}
                    onClick={() => handleActiveTab("JCRM")}
                >
                    JCRM
                </li>
                <li 
                    className={activeTab === "Emergency Equipment" ? "active" : ""}
                    onClick={() => handleActiveTab("Emergency Equipment")}
                >
                    緊急裝備
                </li>
                <li 
                    className={activeTab === "JSEP" ? "active" : ""}
                    onClick={() => handleActiveTab("JSEP")}
                >
                    演練情境
                </li>
                {/* <li 
                    className={activeTab === "Oral Test" ? "active" : ""}
                    onClick={() => handleActiveTab("Oral Test")}
                >
                    Oral Test
                </li> */}
            </ul>
        </div>
    )
}

export default Header;