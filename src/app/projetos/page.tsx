"use client";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  created_at: string;
  pushed_at: string;
  license: {
    name: string;
  } | null;
}

export default function Projetos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let page = 1;
        let allRepos: Repo[] = [];

        while (true) {
          const response: AxiosResponse<Repo[]> = await axios.get(
            `https://api.github.com/users/lucas-2000/repos?page=${page}&per_page=100`
          );

          if (response.data.length === 0) {
            break;
          }

          allRepos = [...allRepos, ...response.data];
          page++;
        }
        console.log(allRepos);

        setRepos(allRepos);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar repositórios da API do GitHub:", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-8">
        <div>
          <Header />
          <hr />
        </div>
        <section className="mt-4 sm:mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-purple-700 font-bold">
            Projetos
          </h1>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mt-8 bg-dark text-white">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg h-full animate-pulse"
                >
                  <div className="mb-4 h-8 bg-gray-700 rounded"></div>
                  <div className="flex flex-col items-start">
                    <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-2/3 mb-2"></div>
                  </div>
                </div>
              ))
            : repos.map((repo) => (
                <div
                  key={repo.id}
                  className="bg-gray-800 p-6 rounded-lg h-full transition-transform transform hover:scale-105"
                >
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-purple-500 break-words max-h-[6rem] whitespace-normal">
                      {repo.name}
                    </h2>
                    <p className="text-gray-400">{repo.description}</p>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-gray-400">
                      Estrelas: {repo.stargazers_count}
                    </p>
                    <p className="text-gray-400">Forks: {repo.forks_count}</p>
                    <p className="text-gray-400">Linguagem: {repo.language}</p>
                    <p className="text-gray-400">
                      Criado em:{" "}
                      {new Date(repo.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-gray-400">
                      Atualizado em:{" "}
                      {new Date(repo.pushed_at).toLocaleDateString()}
                    </p>
                    {repo.license && (
                      <p className="text-gray-400">
                        Licença: {repo.license.name}
                      </p>
                    )}
                    <Link
                      href={repo.html_url}
                      className="text-purple-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub
                    </Link>
                  </div>
                </div>
              ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
