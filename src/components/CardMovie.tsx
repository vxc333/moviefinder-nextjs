interface CardMovieProps {
  title: string;
  poster: string;
  year: number;
}

export default function CardMovie({ title, poster, year }: CardMovieProps) {
  return (
    <div className="p-4  bg-slate-100 w-80 flex flex-col tex items-center rounded-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <img
        src={
          poster === "N/A"
            ? "https://placehold.it/198x264&text=Image+Not+Found"
            : poster
        }
        alt={poster}
        className="w-48 mb-4"
      />
      <p>
        <strong>Ano de Lançamento:</strong> {year}
      </p>
    </div>
  );
}
