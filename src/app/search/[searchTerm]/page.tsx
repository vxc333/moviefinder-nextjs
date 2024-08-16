"use client";

import CardMovie from "@/components/CardMovie";
import SearchBox from "@/components/SearchBox";
import { useEffect, useState } from "react";
import { Movie } from "@/model/Movie";

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
    <>
      <SearchBox />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 max-w-6xl mx-auto">
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
    </>
  );
}
