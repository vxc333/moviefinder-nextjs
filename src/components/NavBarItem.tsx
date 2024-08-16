"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface NavBarItemProps {
  title: string;
  param: string;
}
export default function NavBarItem({ title, param }: NavBarItemProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-slate-500 font-semibold ${
          genre == param ? "underline underline-offset-8 decoration-4 rounded-sm decoration-slate-500" : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
