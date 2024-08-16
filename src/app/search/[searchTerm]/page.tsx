"use client";

import CardMovie from "@/components/CardMovie";
import { useEffect, useState } from "react";

interface Movie {
  Title: string;
  Year: number; // Alterei para string para corresponder ao formato típico da API OMDb
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Rating: Array<{ Source: string; Value: string }>;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

export default function SearchPage({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=af93aee7&s=${searchTerm}`
        );
        const result = await res.json();
        setData(result.Search || []); // Ajuste para lidar com uma lista de filmes
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        data.map((movie) => (
          <CardMovie
            key={movie.imdbID}
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
          />
        ))
      ) : (
        <p>Filme não encontrado...</p>
      )}
    </div>
  );
}
