const API_URL = import.meta.env.VITE_API_URL || "/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, options);

  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");

  let data = null;

  if (response.status !== 204) {
    data = isJson ? await response.json() : await response.text();
  }

  if (!response.ok) {
    const errorMessage =
      typeof data === "object" && data !== null && data.message
        ? data.message
        : `Request failed with status ${response.status}`;

    throw new Error(errorMessage);
  }

  return data;
}

export function getGames() {
  return request("/games");
}

export function getGameById(id) {
  return request(`/games/${id}`);
}

export function createGame(formData) {
  return request("/games", {
    method: "POST",
    body: formData,
  });
}

export function updateGame(id, formData) {
  return request(`/games/${id}`, {
    method: "PATCH",
    body: formData,
  });
}

export function deleteGame(id) {
  return request(`/games/${id}`, {
    method: "DELETE",
  });
}

export function loginUser(credentials) {
  return request("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
}

export function registerUser(userData) {
  return request("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}

export function getCurrentUser() {
  return request("/auth/me");
}
