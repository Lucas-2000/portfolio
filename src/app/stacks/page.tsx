"use client";
import { useState } from "react";
import Image from "next/image";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { stacksList } from "./stacks-list/stacksList";

export default function Stacks() {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Função para marcar que as imagens foram carregadas
  const handleImageLoaded = () => {
    setImagesLoaded(imagesLoaded + 1);
  };

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-8">
        <div>
          <Header />
          <hr />
        </div>
        <section className="mt-4 sm:mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-purple-700 font-bold">
            Stacks
          </h1>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mt-8 bg-dark text-white">
          {stacksList.map((stack) => (
            <div
              key={stack.id}
              className="p-4 border border-gray-700 rounded-md bg-gray-800 h-full flex flex-col justify-between transition-transform transform hover:scale-105"
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{stack.stack}</h2>
                <p className="mb-2">Nível: {stack.level}</p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt={stack.stack}
                  src={stack.image}
                  width={150}
                  height={150}
                  className="rounded-md"
                  onLoad={handleImageLoaded}
                />
                {!imagesLoaded && (
                  <div className="animate-pulse bg-gray-700 w-32 h-32 rounded-md"></div>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
