import { useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri';

const EmergencyEquipment = () => {
    
    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
        console.log(index);
    };

    return (
        <>
            {/* 滅火器 Fire Extinguisher */}
            <div className="contentWrapper">
                <button
                    className={`accordionButton ${activeIndex === "fire extinguisher" ? "active" : ""}`}
                    onClick={() => handleItemClick("fire extinguisher")}
                >
                    <p className="accordionTitle">滅火器 Fire Extinguisher</p>
                    <RiArrowDropDownLine className={`arrow ${activeIndex === "fire extinguisher" ? "active" : ""}`} />
                </button>
                <div
                    className={`scenario-container ${activeIndex === "fire extinguisher" ? "active" : ""}`}
                >
                    <div className="gridRow">
                        <div className="grid-col"></div>
                        <div className="grid-col">ATR</div>
                        <div className="grid-col">B738</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">CCOM對應章節</div>
                        <div className="grid-col">10.2.3</div>
                        <div className="grid-col">11.2.7</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">規格</div>
                        <div className="grid-col">
                            Halon 1211
                            <br />
                            HAFEX(57~61機)
                        </div>
                        <div className="grid-col">BCF</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">數量位置</div>
                        <div className="grid-col">
                            駕駛艙 x 1
                            <br />
                            2LDH x 1
                            <br />
                            2RDH x 1
                        </div>
                        <div className="grid-col">
                            駕駛艙 x 1
                            <br />
                            1LS x 2
                            <br />
                            3L座位上方 x 1
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">檢查方式</div>
                        <div className="grid-col colspan2">
                            數量、位置正確
                            <br />
                            固定妥當
                            <br />
                            插銷叉妥
                            <br />
                            壓力指針(綠色範圍)
                            <br />
                            有效期內
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">可用時間</div>
                        <div className="grid-col">
                            Halon: 約10秒
                            <br />
                            HAFEX: 約8秒
                        </div>
                        <div className="grid-col">約8~10秒</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">噴灑距離</div>
                        <div className="grid-col">
                            5-7呎 (1.5~2m)
                        </div>
                        <div className="grid-col">
                        1.5~2m
                        </div>
                    </div>
                </div>
            </div>

            {/* 水滅火器 Water Extinguisher */}
            <div className="contentWrapper">
                <button
                    className={`accordionButton ${activeIndex === "water extinguisher" ? "active" : ""}`}
                    onClick={() => handleItemClick("water extinguisher")}
                >
                    <p className="accordionTitle">水滅火器 Water Extinguisher</p>
                    <RiArrowDropDownLine className={`arrow ${activeIndex === "water extinguisher" ? "active" : ""}`} />
                </button>
                <div
                    className={`scenario-container ${activeIndex === "water extinguisher" ? "active" : ""}`}
                >
                    <div className="gridRow">
                        <div className="grid-col"></div>
                        <div className="grid-col">ATR</div>
                        <div className="grid-col">B738</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">CCOM對應章節</div>
                        <div className="grid-col">10.2.3</div>
                        <div className="grid-col">11.2.8</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">規格</div>
                        <div className="grid-col colspan2">
                            Walter Kidde
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">數量位置</div>
                        <div className="grid-col">
                            1LHS bin x 1
                        </div>
                        <div className="grid-col">
                            3R 座位上方 x 1
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">檢查方式</div>
                        <div className="grid-col colspan2">
                            數量、位置正確
                            <br />
                            固定妥當
                            <br />
                            有保險鐵絲(safety seal)
                            <br />
                            有效期內
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">可用時間</div>
                        <div className="grid-col">
                            約30~40秒
                        </div>
                        <div className="grid-col">約35秒</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">噴灑距離</div>
                        <div className="grid-col">
                            20呎 (6.1m)
                        </div>
                        <div className="grid-col">
                        1~1.5m
                        </div>
                    </div>
                </div>
            </div>

            {/* 防煙面罩 PBE */}
            <div className="contentWrapper">
                <button
                    className={`accordionButton ${activeIndex === "pbe" ? "active" : ""}`}
                    onClick={() => handleItemClick("pbe")}
                >
                    <p className="accordionTitle">防煙面罩 PBE</p>
                    <RiArrowDropDownLine className={`arrow ${activeIndex === "pbe" ? "active" : ""}`} />
                </button>
                <div
                    className={`scenario-container ${activeIndex === "pbe" ? "active" : ""}`}
                >
                    <div className="gridRow">
                        <div className="grid-col"></div>
                        <div className="grid-col">ATR</div>
                        <div className="grid-col">B738</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">CCOM對應章節</div>
                        <div className="grid-col">10.2.4</div>
                        <div className="grid-col">11.2.9</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">規格</div>
                        <div className="grid-col">
                            Puritan-Bennett
                        </div>
                        <div className="grid-col">
                            SCOTT Smoke Hood
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">數量位置</div>
                        <div className="grid-col">
                            駕駛艙 x 1
                            <br />
                            1LHS bin x 1
                            <br />
                            2LDH x 1
                            <br />
                            2RDH x1
                        </div>
                        <div className="grid-col">
                            駕駛艙 x 1
                            <br />
                            1LS x 2
                            <br />
                            3L座位下方 x 2
                            <br />
                            3R座位下方 x 2
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">檢查方式</div>
                        <div className="grid-col colspan2">
                            數量、位置正確
                            <br />
                            固定妥當
                            <br />
                            外殼無破損
                            <br />
                            有效期內
                            <br />
                            SEAL完整
                            <br />
                            真空包裝未膨脹(ATR)
                            <br />
                            視窗不是粉紅色(B738)
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">可用時間</div>
                        <div className="grid-col colspan2">
                            約15分
                        </div>
                    </div>
                </div>
            </div>

            {/* 手提式氧氣瓶 POB */}
            <div className="contentWrapper">
                <button
                    className={`accordionButton ${activeIndex === "pob" ? "active" : ""}`}
                    onClick={() => handleItemClick("pob")}
                >
                    <p className="accordionTitle">手提式氧氣瓶 POB</p>
                    <RiArrowDropDownLine className={`arrow ${activeIndex === "pob" ? "active" : ""}`} />
                </button>
                <div
                    className={`scenario-container ${activeIndex === "pob" ? "active" : ""}`}
                >
                    <div className="gridRow">
                        <div className="grid-col"></div>
                        <div className="grid-col">ATR</div>
                        <div className="grid-col">B738</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">CCOM對應章節</div>
                        <div className="grid-col">10.2.8</div>
                        <div className="grid-col">11.2.6</div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">規格</div>
                        <div className="grid-col">
                            SCOTT 5500
                        </div>
                        <div className="grid-col">
                            SCOTT
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">數量位置</div>
                        <div className="grid-col">
                            F1座位下方 x 1
                            <br />
                            F2座位下方 x1
                        </div>
                        <div className="grid-col">
                            1LS x 2
                            <div className="row">
                                <div>
                                    <span>B738*:</span>
                                    <br />
                                    31排牆 x 3
                                </div>
                                <div>
                                    <span>B738A:</span>
                                    <br />
                                    3LDH x2
                                    <br />
                                    3RDH x1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">檢查方式</div>
                        <div className="grid-col colspan2">
                            量、位置正確
                            <br />
                            固定妥當
                            <br />
                            壓力指針(紅色範圍)
                            <br />
                            面罩數量
                            <br />
                            有效期內
                            <br />
                            連接HIGH端(B738)
                        </div>
                    </div>
                    <div className="gridRow">
                        <div className="grid-col">可用時間</div>
                        <div className="grid-col">
                            約30分(13,000ft)
                        </div>
                        <div className="grid-col">
                            約60分(HIGH 4LPM)
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmergencyEquipment;