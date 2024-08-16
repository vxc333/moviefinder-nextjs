import React from "react";
import { Movie } from "@/model/Movie";

export default async function Details({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${searchTerm}`
  );

  const movie: Movie = await res.json();

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
      <img
        src={
          movie.Poster === "N/A"
            ? "https://placehold.it/198x264&text=Image+Not+Found"
            : movie.Poster
        }
        alt={movie.Title}
        className="w-48 mb-4"
      />
      <p>
        <strong>Ano:</strong> {movie.Year}
      </p>
      <p>
        <strong>Classificação:</strong> {movie.Rated}
      </p>
      <p>
        <strong>Lançamento:</strong> {movie.Released}
      </p>
      <p>
        <strong>Duração:</strong> {movie.Runtime}
      </p>
      <p>
        <strong>Gênero:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Diretor:</strong> {movie.Director}
      </p>
      <p>
        <strong>Roteirista:</strong> {movie.Writer}
      </p>
      <p>
        <strong>Atores:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Sinopse:</strong> {movie.Plot}
      </p>
      <p>
        <strong>Idioma:</strong> {movie.Language}
      </p>
      <p>
        <strong>País:</strong> {movie.Country}
      </p>
      <p>
        <strong>Prêmios:</strong> {movie.Awards}
      </p>
      <p>
        <strong>Bilheteria:</strong> {movie.BoxOffice}
      </p>
      <p>
        <strong>Produção:</strong> {movie.Production}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={movie.Website} target="_blank" rel="noopener noreferrer">
          {movie.Website}
        </a>
      </p>
    </div>
  );
}
