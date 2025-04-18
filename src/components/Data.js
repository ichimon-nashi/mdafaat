export const jcrmData = [
    {
        id: "jcrm01",
        title: "Scenario 1: Decompression",
        description: "(TPE-NRT) The A/C is climbing through FL290 and the crew are preparing meal delivery service. Suddenly a loud bang is heard and some indications appeared in the cabin...",
        action: [
            "前艙下達:『EMERGENCY DESCENT, EMERGENCY DESECENT』。",
            "立即就近找座位坐或蹲下，拉下面罩，繫緊安全帶。",
            "喊:『拉下面罩，罩住口鼻，繫好安全帶 PLACE MASK ON NOSE AND MOUTH, FASTEN THE SEATBELT』，",
            "口令喊兩次預錄系統會自動播放，但如還有旅客無配合佩戴面罩，就得必須持續廣播。",
            "抵達安全高度『CABIN CREW 10,000』。",
            "攜帶POB巡艙及廁所，向座艙長/前艙回報: 1️⃣ 飛機狀況 2️⃣ 旅客狀況 3️⃣ 組員狀況。",
            "爲避免阻礙緊急出口通道，時間許可時應將使用過的面罩移除或放置適當位置。",
        ]
    }, {
        id: "jcrm02",
        title: "Scenario 2: Cabin Fire",
        description: "A/C is at cruising altitude. Suddenly heard a bang, and there is a burning smell. The from passenger luggage in front of their seat. The fire is suspected to be caused by a short-circuiting power bank.",
        action: [
            "立即回報前艙。",
            "CC1執行滅火，CC2準備備份滅火裝備，座艙長負責廣播及跟前艙聯繫，其他組員調整座位/發濕紙巾給旅客遮著口鼻。",
            "裝置若只冒煙使用水/非酒精性飲料;起火使用海龍滅火器滅火。",
            "冷卻10~15 分鐘。",
            "將裝置放在裝水的容器內，確保有維持浸泡。",
            "放在廁所/廚房垃圾桶內，遠離駕駛艙。",
            "持續監控。",
        ]
    }, {
        id: "jcrm03",
        title: "Scenario 3: Cabin Evacuation",
        description: 'A hydraulic failure issue before landing. Flight crew conducts "GO AROUND". Start CPP and have: 10 mins to prepare; forced landing; no need to reseat PAX.',
        action: [
            "前艙下達:『PURSER INTO COCKPIT』。",
            "接獲N.T.R資訊並複誦。",
            "CPP至少示範: 1️⃣ Safety Position 2️⃣ 安全帶 3️⃣ 緊急出口。",
            "回座跟前艙報完：『CABIN READY』後，可繼續用PA/Megaphone把未完成CPP項目唸完。",
            "(迫降前2分鐘/2000呎，前艙有可能會下達:『ATTENTION CREW ON STATION』)",
            "前艙下達:『SAFETY POSITION, SAFETY POSITION』。",
            "組員喊:『彎腰，低頭 BEND FORWARD，KEEP HEAD DOWN』。",
            "(迫降前50呎，前艙有可能會下達:『BRACE FOR IMPACT』)",
            "迫降，『PASSENGER EVACUATION, PASSENGER EVACUATION』。",
            "開啟緊急燈光，執行CEP程序。",
        ]
    },
]

import jsep1 from "../assets/images/jsep1.jpg";
import jsep2 from "../assets/images/jsep2.jpg";
import jsep3 from "../assets/images/jsep3.jpg";
import jsep4 from "../assets/images/jsep4.jpg";
import jsep5 from "../assets/images/jsep5.jpg";
import jsep6 from "../assets/images/jsep6.jpg";

export const jsepData = [
    {
        id: "jsep01",
        title: "Scenario 1",
        description: "AE8989北/金航班，航程中窗型出口發出嘶嘶聲，隨即客艙失壓，航機實施緊急下降。",
        imgSrc: jsep1,
        action: [
            "CCOM對應章節: Ch.4.4/9.4",
            "前艙下達:『EMERGENCY DESCENT, EMERGENCY DESECENT』。",
            "立即就近找座位坐或蹲下，繫緊安全帶，(B738:拉下面罩)。",
            "ATR喊:『留在座位上，繫好安全帶 REMAIN SEATED，FASTEN SEAT BELT』; B738喊:『拉下面罩，罩住口鼻，繫好安全帶 PLACE MASK ON NOSE AND MOUTH, FASTEN THE SEATBELT』。",
            "抵達安全高度『CABIN CREW 10,000』。",
            "攜帶POB巡艙及廁所，向座艙長/前艙回報: 1️⃣ 飛機狀況 2️⃣ 旅客狀況 3️⃣ 組員狀況。",
            "為避免阻礙緊急出口通道，時間許可時應將使用過的面罩移除或放置適當位置。",
        ]
    }, {
        id: "jsep02",
        title: "Scenario 2",
        description: "AE8888台北/南竿，航程中接獲機長通知1號發動機失效，為確保安全降落，立即啟動緊急程序。",
        imgSrc: jsep2,
        action: [
            "CCOM對應章節: Ch.4.4 / 9.1",
            "前艙下達:『ATTENTION CREW ON STATION, ATTENTION CREW ON STATION』。",
            "組員喊:『留在座位上，保持冷靜 REMAIN SEATED, STAY CALM』。",
            "(情境1: 組員/旅客發現機翼起火):",
            "跟前艙回報，盡可能敘述火的大小、煙的顏色等...",
            "等候前艙下達:『CONTROLLED DISEMBARKATION』。",
            "(情境3: 鼻輪掉近排水道，機尾翹起):",
            "使用2L出口，雖然懸空，但旅客從階梯跳下去風險比其他出口低。",
            "因與地面有落差，提醒旅客不要攜帶行李、脫掉高跟鞋。",
        ]
    }, {
        id: "jsep03",
        title: "Scenario 3",
        description: "AE9999 台東/台北航班，降落前因起落架失效無法放下，機長指示15分鐘後將迫降松山機場，落地撞擊後航機斷電，燈光與駕客艙通聯系統全面失效。",
        imgSrc: jsep3,
        action: [
            "CCOM對應章節: Ch.4.4 / 9.1 / 9.2.1(ATR) / 9.2.3(B738) / 9.5",
            "正常情況，飛機即使斷電，有備份電池供電給駕駛艙門及PA系統。",
            "前艙下達:『PURSER INTO COCKPIT』。",
            "接獲N.T.R資訊並複誦。",
            "執行全套CPP程序，如情境預設時間不夠，至少示範(CMS故障必須示範兩次): 1️⃣ Safety Position 2️⃣ 安全帶 3️⃣ 緊急出口。",
            "回座跟前艙報完：『CABIN READY』後，可繼續用PA/Megaphone把未完成CPP項目唸完。",
            "前艙下達:『SAFETY POSITION, SAFETY POSITION』。",
            "組員喊:『彎腰，低頭 BEND FORWARD，KEEP HEAD DOWN』。",
            "迫降，『PASSENGER EVACUATION, PASSENGER EVACUATION』。",
            "開啟緊急燈光，執行CEP程序。",
        ]
    }, {
        id: "jsep04",
        title: "Scenario 4",
        description: "AE9988金/北航班，16A 旅客置於行李櫃內之IPAD起火燃燒，客艙內佈滿煙霧。",
        imgSrc: jsep4,
        action: [
            "CCOM對應章節: Ch.4.4 / 9.3",
            "前艙下達:『PURSER INTO COCKPIT』，如使用interphone直接告知狀況，可直接攜帶滅火裝備(PBE/滅火器)進入駕艙。",
            "冒煙使用水/非酒精性飲料;起火使用海龍滅火器滅火。",
            "冷卻10~15 分鐘。",
            "將裝置放在裝水的容器內，確保有維持浸泡。",
            "放在廁所/廚房垃圾桶內，遠離駕駛艙。",
            "持續監控。",
        ]
    }, {
        id: "jsep05",
        title: "Scenario 5",
        description: "AE7979 高/澎航班，旅客人數70，降落前航機因雙發動機失效， 機長指示10分鐘後海上迫降。",
        imgSrc: jsep5,
        action: [
            "CCOM對應章節: Ch.3.7 / 4.4 / 9.2.2(ATR) / 9.2.4(B738) / 9.5",
            "(如足夠時間執行CPP):",
            "前艙下達:『PURSER INTO COCKPIT』。",
            "接獲N.T.R資訊並複誦。",
            "CPP至少示範: 1️⃣ Safety Position 2️⃣ 安全帶 3️⃣ 救生衣 4️⃣ 緊急出口。",
            "回座跟前艙報完：『CABIN READY』後，可繼續用PA/Megaphone把未完成CPP項目唸完。",
            "前艙下達:『SAFETY POSITION, SAFETY POSITION』。",
            "組員喊:『彎腰，低頭 BEND FORWARD，KEEP HEAD DOWN』。",
            "水上迫降，『PASSENGER EVACUATION, PASSENGER EVACUATION』。",
            "執行CEP程序。",
            "(無預警水上迫降):",
            "水上迫降，F1跟前艙聯繫，確認要撤離/前艙有意識。",
            "開啟緊急燈光，執行CEP程序(看情況決定哪些出口可使用)。",
            "嬰兒救生衣可於緊急出口再提供，但避免阻礙出口，家長可在F2 jump seat區域或後貨艙處幫嬰兒穿上救生衣。",
        ]
    }, {
        id: "jsep06",
        title: "Scenario 6",
        description: "AE8877台中/花蓮航班，前艙組員通知飛航組員失能，請求組員前往協助 。",
        imgSrc: jsep6,
        action: [
            "CCOM對應章節: Ch.4.4 / 7.15 / 8.2 / 8.6",
            "(預設B738情境)",
            "亂流廣播，回報前艙: 1️⃣ 飛機狀況 2️⃣ 旅客狀況 3️⃣ 組員狀況。",
            "座艙長執行Paging Doctor廣播，一名組員尋找PSP協助手骨折組員(完成後，協助CPR)，一名組員開始對無生命徵象執行CPR。",
            "如有醫護人員，要先確認他們身份，並紀錄他們的資料及醫療過程。",
        ]
    },
]