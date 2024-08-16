import NavBar from "@/components/NavBar";
const API_KEY = process.env.API_KEY;

export default async function Home(searchParams : string) {

  
  const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&`)

  return <div> 
    
  </div>;
}
