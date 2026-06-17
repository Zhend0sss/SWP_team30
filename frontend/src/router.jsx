import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import GamesPage from "./pages/GamesPage";
import GamePage from "./pages/GamePage";
import CreateGamePage from "./pages/CreateGamePage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/games" replace />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/games/create" element={<CreateGamePage />} />
      <Route path="/games/:id" element={<GamePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
