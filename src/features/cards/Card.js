import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllCards } from "./cardsSlice";

export default function Card({ id }) {
  const cards = useSelector(selectAllCards); // a call to the selector to get all the cards in state
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
