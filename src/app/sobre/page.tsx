import React from "react";
import aboutImg from "/public/about.svg";
import Image from "next/image";
import "./style.css";
export default function About() {
  return (
    <div className="p-3 max-w-6xl mx-auto flex flex-col gap-4 text-md">
      <Image
        className="h-48 md:h-52 w-auto flex text-center"
        src={aboutImg}
        alt={""}
      />
      <div>
        <h1>Sobre o MovieFinder</h1>
        <p>
          Bem-vindo ao MovieFinder, sua ferramenta definitiva para descobrir e
          explorar filmes de todos os gêneros e épocas.
          <br /> Desenvolvida com a mais recente tecnologia web, nossa aplicação
          permite que você busque por filmes e visualize detalhes completos.
        </p>
      </div>
      <div>
        <h2>Nossa Missão</h2>
        <p>
          Nossa missão é proporcionar aos amantes do cinema uma experiência de
          busca intuitiva e enriquecedora. Com o MovieFinder, você pode
          encontrar rapidamente informações sobre os filmes que ama, desde
          clássicos atemporais até os últimos lançamentos. Queremos ajudar você
          a encontrar o próximo filme para assistir e a criar uma lista dos seus
          favoritos de forma simples e rápida.
        </p>
      </div>
      <div>
        <h2>Funcionalidades</h2>
        <ul>
          <li>
            <p>Busca de Filmes: </p>
            Encontre filmes pelo título e explore uma vasta coleção de obras
            cinematográficas.
          </li>
          <li>
            <p>Detalhes Completo dos Filmes: </p>
            Veja informações detalhadas sobre cada filme, incluindo sinopse,
            elenco, diretor, ano de lançamento e muito mais.
          </li>
          
        </ul>
      </div>
      <div>
        <h2>Sobre a API OMDb</h2>
        <p>
          O MovieFinder é alimentado pela API do OMDb (Open Movie Database), uma
          base de dados aberta que fornece informações detalhadas sobre filmes e
          séries de TV. Através dessa integração, conseguimos oferecer a você
          uma ampla gama de informações precisas e atualizadas.
        </p>
      </div>
      <div>
        <h2>Tecnologia</h2>
        <p>
          O MovieFinder foi desenvolvido utilizando Next.js, um framework React
          que permite criar aplicações web rápidas e escaláveis. Além disso,
          utilizamos o TypeScript para garantir um código robusto e de fácil
          manutenção.
        </p>
      </div>
    </div>
  );
}
