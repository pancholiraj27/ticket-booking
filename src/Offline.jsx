import React, { useState, useEffect } from "react";
import "./offline.css";

const emojis = ["😀", "😂", "😍", "😎", "😢", "😡", "🥳", "🤔", "😴", "🤩"];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Offline() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [disableAll, setDisableAll] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const doubledEmojis = [...emojis, ...emojis];
    const shuffledEmojis = shuffleArray(doubledEmojis);
    setCards(shuffledEmojis);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  const handleCardClick = (index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index) ||
      disableAll
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }

      setDisableAll(true);
      setTimeout(() => {
        setFlippedCards([]);
        setDisableAll(false);
      }, 1000);
    }
  };

  return (
    <div className="game-container">
      <h1>Since you are offline lets play a Game</h1>
      <div className="cards-grid">
        {cards.map((emoji, index) => (
          <div
            key={index}
            className={`card ${
              flippedCards.includes(index) || matchedCards.includes(index)
                ? "flipped"
                : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{emoji}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="new-game-button" onClick={initializeGame}>
        Start New Game
      </button>
    </div>
  );
}

export default Offline;
