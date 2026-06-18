import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGames } from "../api/api";
import GameCard from "../components/GameCard";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";

function GamesPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGames() {
      try {
        setLoading(true);
        setError("");

        const data = await getGames();
        setGames(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message || "Не удалось загрузить игры");
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  if (loading) {
    return <Loader text="Загрузка игр..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (games.length === 0) {
    return (
      <section className="section-lg">
        <div className="page-header">
          <div className="section">
            <h1 className="page-title">Каталог</h1>
            <p className="page-subtitle">
              Здесь будут отображаться игры вашего сообщества
            </p>
          </div>

          <Link to="/games/create" className="button button-secondary">
            Создать игру
          </Link>
        </div>

        <EmptyState message="Пока нет ни одной игры." />
      </section>
    );
  }

  return (
    <section className="section-lg">
      <div className="page-header">
        <div className="section">
          <h1 className="page-title">Каталог</h1>
        </div>

        <Link to="/games/create" className="button button-secondary">
          Создать игру
        </Link>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default GamesPage;
