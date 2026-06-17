import React from "react";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <article>
      <h2>{game.title}</h2>

      {game.bannerUrl ? (
        <img
          src={game.bannerUrl}
          alt={game.title}
          style={{ width: "240px", borderRadius: "8px" }}
        />
      ) : null}

      <p>{game.description || "Описание пока отсутствует."}</p>

      <Link to={`/games/${game.id}`}>К игре</Link>
    </article>
  );
}

export default GameCard;
