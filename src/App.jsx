import React, { useState } from 'react';
import { Shuffle, RotateCcw } from 'lucide-react';
import deckBack from "./assets/deckback.png";

const CabinCrewTrainer = () => {
  const cardData = {
    emergency: [
      {
        id: 1,
        title: "客艙火災",
        description: "置物櫃旅客行李起火！",
        code: "E-01",
        conflicts: [2, 6]
      },
      {
        id: 2,
        title: "客艙失壓",
        description: "客艙破洞造成快速失壓！",
        code: "E-02",
        conflicts: [1, 4, 6, 8]
      },
      {
        id: 3,
        title: "亂流受傷",
        description: "旅客因通過無預警亂流受傷！",
        code: "E-03",
        conflicts: []
      },
      {
        id: 4,
        title: "PED電子用品起火",
        description: "手機電池發熱冒煙！",
        code: "E-04",
        conflicts: [2]
      },
      {
        id: 5,
        title: "醫療事件",
        description: "旅客昏倒，無心跳！",
        code: "E-05",
        conflicts: []
      },
      {
        id: 6,
        title: "客艙冒煙",
        description: "隱藏性火災，客艙冒煙！",
        code: "E-06",
        conflicts: [2]
      },
      {
        id: 7,
        title: "組員失能",
        description: "前艙組員失能！",
        code: "E-07",
        conflicts: []
      },
      {
        id: 8,
        title: "CPP",
        description: "雙引擎失效，準備迫降！",
        code: "E-08",
        conflicts: [1, 2, 6]
      },
      {
        id: 9,
        title: "滑出跑道",
        description: "飛機滑出跑道！",
        code: "E-09",
        conflicts: [1, 2, 6]
      }
    ],
    passenger: [
      {
        id: 1,
        title: "酒醉鬧事",
        description: "醉酒旅客開始鬧事！",
        code: "P-01",
        conflicts: [5]
      },
      {
        id: 2,
        title: "恐慌症發作",
        description: "旅客過度換氣！",
        code: "P-02",
        conflicts: []
      },
      {
        id: 3,
        title: "語言障礙",
        description: "外籍旅客聽不懂中英文！",
        code: "P-03",
        conflicts: []
      },
      {
        id: 4,
        title: "頑皮兒童",
        description: "小孩在走道奔跑！",
        code: "P-04",
        conflicts: []
      },
      {
        id: 5,
        title: "劫機威脅",
        description: "旅客發出威脅！",
        code: "P-05",
        conflicts: [1]
      },
      {
        id: 6,
        title: "密閉恐懼症",
        description: "要開啟逃生窗！",
        code: "P-06",
        conflicts: []
      },
      {
        id: 7,
        title: "身心障礙旅客",
        description: "有身心障礙旅客搭乘！",
        code: "P-07",
        conflicts: []
      },
    ],
    equipment: [
      {
        id: 1,
        title: "PA/INT系統故障",
        description: "無法正常廣播或與前艙通話！",
        code: "Q-01",
        conflicts: []
      },
      {
        id: 3,
        title: "電力系統故障",
        description: "客艙陷入黑暗！",
        code: "Q-03",
        conflicts: []
      },
      {
        id: 4,
        title: "廁所門卡死",
        description: "旅客被困在裡面！",
        code: "Q-04",
        conflicts: []
      },
      {
        id: 5,
        title: "氧氣系統故障",
        description: "面罩無法正常釋放！",
        code: "Q-05",
        conflicts: []
      },
      {
        id: 6,
        title: "艙門異常",
        description: "緊急出口無法開啟！",
        code: "Q-06",
        conflicts: []
      },
    ]
  };

  const [allDrawnCards, setAllDrawnCards] = useState([]);
  const [availableCards, setAvailableCards] = useState(cardData);
  const [dealingAnimation, setDealingAnimation] = useState(false);
  const [shufflingCards, setShufflingCards] = useState([]);
  const [cardBeingDealt, setCardBeingDealt] = useState(null);

  const canDrawCard = (newCard, existingCards, cardType) => {
    const existingIds = existingCards
      .filter(card => card.type === cardType)
      .map(card => card.originalId);

    if (existingIds.includes(newCard.id)) {
      return false;
    }

    for (const existingCard of existingCards) {
      if (existingCard.conflicts && existingCard.conflicts.includes(newCard.id)) {
        return false;
      }
      if (newCard.conflicts && newCard.conflicts.includes(existingCard.originalId)) {
        return false;
      }
    }

    return true;
  };

  const getAvailableCardsForType = (cardType) => {
    return availableCards[cardType].filter(card =>
      canDrawCard(card, allDrawnCards, cardType)
    );
  };

  const drawRandomCard = (cardType) => {
    const availableForType = getAvailableCardsForType(cardType);

    if (availableForType.length === 0) {
      return;
    }

    const randomCard = availableForType[Math.floor(Math.random() * availableForType.length)];

    const newCard = {
      ...randomCard,
      type: cardType,
      originalId: randomCard.id,
      timestamp: Date.now(),
      id: `${cardType}-${randomCard.id}-${Date.now()}`
    };

    setCardBeingDealt(newCard);
    setTimeout(() => {
      setAllDrawnCards(prev => [...prev, newCard]);
      setCardBeingDealt(null);
    }, 600);
  };

  const createShuffleAnimation = () => {
    const cards = [];
    for (let i = 0; i < 8; i++) {
      cards.push({
        id: i,
        x: Math.random() * 400 - 200,
        y: Math.random() * 200 - 100,
        rotation: Math.random() * 360,
        delay: i * 100
      });
    }
    return cards;
  };

  const dealDefaultScenario = async () => {
    const shuffleCards = createShuffleAnimation();
    setShufflingCards(shuffleCards);

    await new Promise(resolve => setTimeout(resolve, 2000));
    setShufflingCards([]);

    setDealingAnimation(true);

    const cardTypes = ['emergency', 'passenger', 'equipment'];
    let dealDelay = 500;

    for (const cardType of cardTypes) {
      const availableForType = getAvailableCardsForType(cardType);

      if (availableForType.length > 0) {
        const randomCard = availableForType[Math.floor(Math.random() * availableForType.length)];
        const newCard = {
          ...randomCard,
          type: cardType,
          originalId: randomCard.id,
          timestamp: Date.now() + dealDelay,
          id: `${cardType}-${randomCard.id}-${Date.now()}-${dealDelay}`
        };

        setTimeout(() => {
          setCardBeingDealt(newCard);
          setTimeout(() => {
            setAllDrawnCards(prev => [...prev, newCard]);
            setCardBeingDealt(null);
          }, 400);
        }, dealDelay);

        dealDelay += 600;
      }
    }

    setTimeout(() => {
      setDealingAnimation(false);
    }, dealDelay + 500);
  };

  const resetAll = () => {
    setAllDrawnCards([]);
    setAvailableCards(cardData);
    setDealingAnimation(false);
    setShufflingCards([]);
    setCardBeingDealt(null);
  };

  const removeCard = (cardId) => {
    setAllDrawnCards(prev => prev.filter(card => card.id !== cardId));
  };

  const PlayingCard = ({ card, onRemove = null, isBeingDealt = false, isInDeck = false, shuffleStyle = null }) => {
    const getCardClassName = () => {
      if (isInDeck) {
        return `card deck-card`;
      }

      const baseClass = `card playing-card`;

      switch (card.type) {
        case 'emergency':
          return `${baseClass} emergency-card`;
        case 'passenger':
          return `${baseClass} passenger-card`;
        case 'equipment':
          return `${baseClass} equipment-card`;
        default:
          return baseClass;
      }
    };

    const getCardSymbol = () => {
      if (isInDeck) return '🎴';
      switch (card.type) {
        case 'emergency': return '♦';
        case 'passenger': return '♠';
        case 'equipment': return '♣';
        default: return '♥';
      }
    };

    const getAnimationStyle = () => {
      if (shuffleStyle) {
        return {
          transform: `translate(${shuffleStyle.x}px, ${shuffleStyle.y}px) rotate(${shuffleStyle.rotation}deg)`,
          transition: `all 0.8s ease-in-out ${shuffleStyle.delay}ms`,
          zIndex: 60
        };
      }
      if (isBeingDealt) {
        return {
          transform: 'translate(200px, 100px) rotate(15deg) scale(1.1)',
          transition: 'all 0.8s ease-out',
          zIndex: 70
        };
      }
      return {};
    };

    return (
      <div
        className={`${getCardClassName()} ${isBeingDealt ? 'being-dealt' : ''}`}
        style={getAnimationStyle()}
      >
        {isInDeck ? (
          <div className="deck-content">
            <img src={deckBack} alt="Deck Back" className="deck-image" />
          </div>
        ) : (
          <>
            <div className="card-header">
              <div className="card-symbol">{getCardSymbol()}</div>
              <div className="card-code">{card.code}</div>
            </div>

            <div className="card-symbol-top-right">
              {getCardSymbol()}
            </div>

            <div className="card-content">
              <h3 className="card-title">
                {card.title}
              </h3>
              <p className="card-description">
                {card.description}
              </p>
            </div>

            <div className="card-symbol-bottom-left">
              {getCardSymbol()}
            </div>

            <div className="card-footer">
              <div className="card-symbol-footer">{getCardSymbol()}</div>
              <div className="card-code-footer">{card.code}</div>
            </div>

            {onRemove && !isBeingDealt && (
              <button
                onClick={() => onRemove(card.id)}
                className="remove-button"
              >
                ×
              </button>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="background"></div>

      <div className="main-content">
        <header className="header">
          <h1 className="title">
            <span className="title-accent">♠</span>
            客艙組員情境演練卡牌
            <span className="title-accent">♠</span>
          </h1>
          <p className="subtitle">🎰 組員緊急應變訓練 • 撲克牌風格 🎰</p>
        </header>

        <div className="control-panel">
          <div className="controls-row">
            <button
              onClick={dealDefaultScenario}
              disabled={dealingAnimation || shufflingCards.length > 0}
              className={`button deal-button ${(dealingAnimation || shufflingCards.length > 0) ? 'disabled' : ''}`}
            >
              <Shuffle className="button-icon" />
              發牌
            </button>

            <button
              onClick={resetAll}
              className="button reset-button"
            >
              <RotateCcw className="button-icon" />
              重置
            </button>

            <div className="button-divider"></div>

            <button
              onClick={() => drawRandomCard('emergency')}
              disabled={getAvailableCardsForType('emergency').length === 0}
              className={`button emergency-button ${getAvailableCardsForType('emergency').length === 0 ? 'disabled' : ''}`}
            >
              ♦ 緊急 ({getAvailableCardsForType('emergency').length})
            </button>

            <button
              onClick={() => drawRandomCard('passenger')}
              disabled={getAvailableCardsForType('passenger').length === 0}
              className={`button passenger-button ${getAvailableCardsForType('passenger').length === 0 ? 'disabled' : ''}`}
            >
              ♠ 旅客 ({getAvailableCardsForType('passenger').length})
            </button>

            <button
              onClick={() => drawRandomCard('equipment')}
              disabled={getAvailableCardsForType('equipment').length === 0}
              className={`button equipment-button ${getAvailableCardsForType('equipment').length === 0 ? 'disabled' : ''}`}
            >
              ♣ 設備 ({getAvailableCardsForType('equipment').length})
            </button>

            {allDrawnCards.length > 0 && (
              <div className="stats-inline">
                <span className="stat-emergency">♦{allDrawnCards.filter(card => card.type === 'emergency').length}</span>
                <span className="stat-passenger">♠{allDrawnCards.filter(card => card.type === 'passenger').length}</span>
                <span className="stat-equipment">♣{allDrawnCards.filter(card => card.type === 'equipment').length}</span>
              </div>
            )}
          </div>
        </div>

        <div className="game-area">
          <div className="cards-container">
            {allDrawnCards.map((card) => (
              <PlayingCard
                key={card.id}
                card={card}
                onRemove={removeCard}
              />
            ))}

            {allDrawnCards.length === 0 && (
              <div className="deck-display">
                <PlayingCard card={{}} isInDeck={true} />

                {shufflingCards.map((shuffleCard) => (
                  <div key={shuffleCard.id} className="shuffling-card">
                    <PlayingCard
                      card={{}}
                      isInDeck={true}
                      shuffleStyle={shuffleCard}
                    />
                  </div>
                ))}

                {shufflingCards.length > 0 && (
                  <div className="status-message">
                    🔀 洗牌中...
                  </div>
                )}

                {dealingAnimation && (
                  <div className="status-message">
                    🃏 發牌中...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {cardBeingDealt && (
          <div className="card-overlay">
            <PlayingCard card={cardBeingDealt} isBeingDealt={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CabinCrewTrainer;