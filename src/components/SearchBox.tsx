"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form className="p-3 max-w-6xl mx-auto flex gap-4" onSubmit={handleSubmit}>
      <Input className="rounded-xl" onChange={(e) => setSearch(e.target.value)} placeholder="Digite o nome do filme..."/>
      <Button className="rounded-xl" variant={"outline"} disabled={search === ""}>Pesquisar</Button>
    </form>
  );
}
