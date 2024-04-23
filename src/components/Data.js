export const jcrmData = [
    {
        id: "jcrm01",
        title: "Scenario 1: Decompression",
        description: "(TPE-NRT) The A/C is climbing through FL290 and the crew are preparing meal delivery service. Suddenly a loud bang is heard and some indications appeared in the cabin...",
        action: [
            "crew decompression procedure 1",
            "crew decompression procedure 2",
            "crew decompression procedure 3",
        ]
    }, {
        id: "jcrm02",
        title: "Scenario 2: Cabin Fire",
        description: "A/C is at cruising altitude. Suddenly heard a bang, and there is a burning smell. The from passenger luggage in front of their seat. The fire is suspected to be caused by a short-circuiting power bank.",
        action: [
            "crew firefighting procedure 1",
            "crew firefighting procedure 2",
        ]
    }, {
        id: "jcrm03",
        title: "Scenario 3: Cabin Evacuation",
        description: 'A hydraulic failure issue before landing. Flight crew conducts "GO AROUND". Start CPP and have: 10 mins to prepare; forced landing; no need to reseat PAX.',
        action: [
            "crew evacuation procedure 1",
            "crew evacuation procedure 2",
        ]
    },
]

import jsep1 from "../assets/images/jsep1.jpg";
import jsep2 from "../assets/images/jsep2.png";
import jsep3 from "../assets/images/jsep3.jpg";
import jsep4 from "../assets/images/jsep4.jpg";
import jsep5 from "../assets/images/jsep5.png";
import jsep6 from "../assets/images/jsep6.jpg";

export const jsepData = [
    {
        id: "jsep01",
        title: "Scenario 1",
        description: "AE9898北/金航班，航程中客艙中段窗戶及部份機身突然脫離機身，造成客艙失壓，航機實施緊急下降。",
        imgSrc: jsep1,
        action: [
            "前艙下達：『EMERGENCY DESCENT, EMERGENCY DESECENT』",
            "立即就近找座位坐或蹲下，繫緊安全帶，（B738：拉下面罩）",
            "ATR喊：『彎腰、低頭 BEND FORWARD, KEEP HEAD DOWN』，B738喊：『拉下面罩，罩住口鼻，繫好安全帶 PLACE MASK ON NOSE AND MOUTH, FASTEN THE SEATBELT』",
            "抵達安全高度『CABIN CREW 10,000』",
            "攜帶POB巡艙，向座艙長/前艙回報：1️⃣ 飛機狀況 2️⃣ 旅客狀況 3️⃣ 組員狀況",
            "...."
        ]
    }, {
        id: "jsep02",
        title: "Scenario 2",
        description: "AE8888台北/南竿航班，航班降落後，因天氣不佳(風切)致班機(左起落架撞擊損壞)衝出跑道。\n情境1:左翼折斷起火\n情境2:不安全情境撤離\n情境3:航機衝入側邊排水道，機尾翹起，逃生窗懸空於排水道之上」。",
        imgSrc: jsep2,
        action: [
            "crew firefighting procedure 1",
            "crew firefighting procedure 2",
        ]
    }, {
        id: "jsep03",
        title: "Scenario 3",
        description: "AE9999 武漢/台北航班，降落前因起落架失效無法放下，機長指示15分鐘後將迫降松山機場，落地撞擊後航機斷電，燈光與駕客艙通聯系統全面失效。",
        imgSrc: jsep3,
        action: [
            "crew evacuation procedure 1",
            "crew evacuation procedure 2",
        ]
    }, {
        id: "jsep04",
        title: "Scenario 4",
        description: "AE8899北/金航班，前艙I-PAD起火燃燒，駕艙內佈滿煙霧。",
        imgSrc: jsep4,
        action: [
            "crew decompression procedure 1",
            "crew decompression procedure 2",
            "crew decompression procedure 3",
        ]
    }, {
        id: "jsep05",
        title: "Scenario 5",
        description: "AE8989 澎/北航班，航機因雙發動機失效， 機長指示10分鐘後海上迫降。\nAE8989 澎/北航班，旅客人數50人含三名嬰兒，發生無預警水上撤離。(嬰兒旅客作業) ",
        imgSrc: jsep5,
        action: [
            "crew firefighting procedure 1",
            "crew firefighting procedure 2",
        ]
    }, {
        id: "jsep06",
        title: "Scenario 6",
        description: "AE9988 中/胡航班，航程中遭遇強烈無預警晴空亂流，客艙二名組員受傷， 一名慣用手骨折無法正常執行任務， 一名失去生命徵象。",
        imgSrc: jsep6,
        action: [
            "crew evacuation procedure 1",
            "crew evacuation procedure 2",
        ]
    },
]

export const emergencyEquipmentData = [
    {
        "項目": "CCOM對應章節",
        "ATR": "10.2.3",
        "B738": "11.2.7"
    },
    {
        "項目": "規格",
        "ATR": "Halon 1211\nHAFEX(57~61機)",
        "B738": "BCF"
    },
    {
        "項目": "數量位置",
        "ATR": "駕駛艙 x 1\n2LDH x 1\n2RDH x 1",
        "B738": "駕駛艙 x 1\n1LS x 2\n3L 座位上方 x 1"
    },
    {
        "項目": "檢查方式",
        "ATR": "數量、位置正確\n固定妥當\n插銷叉妥\n壓力指針（綠色範圍）\n有效期內",
        "B738": "數量、位置正確\n固定妥當\n插銷叉妥\n壓力指針（綠色範圍）\n有效期內"
    },
    {
        "項目": "可用時間",
        "ATR": "Halon:約10秒\nHAFEX:約8秒",
        "B738": "約8-10秒"
    },
    {
        "項目": "噴灑距離",
        "ATR": "5~7呎(1.5~2m)",
        "B738": "1~1.5m"
    }
]