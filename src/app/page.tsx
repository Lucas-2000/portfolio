"use client";
import Header from "./components/header/header";
import Link from "next/link";
import {
  Lightbulb,
  Notebook,
  PaperPlaneTilt,
  Stack,
} from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-8">
      <div>
        <Header />
        <hr />
      </div>
      <section id="presentation" className="mt-4 sm:mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-[40ch]">
          Olá, meu nome é Lucas Marchesoni e sou um{" "}
          <span className="text-purple-500">Desenvolvedor Full Stack</span>.
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Desenvolvimento Full-Stack: Transformando Ideias em Realidade.
        </p>
      </section>
      <section
        id="options"
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-2 h-auto sm:h-56 mt-16 mb-16"
      >
        <Link
          href="/stacks"
          className="w-full h-full flex flex-col items-center justify-center text-white bg-purple-600 hover:bg-purple-800 hover:scale-105 hover:opacity-80 border border-gray-300 rounded-md transition-transform duration-300 mt-4 sm:mt-0"
        >
          <div className="w-16 h-16 flex items-center justify-center">
            <Stack size={32} />
          </div>
          <p className="text-center text-sm sm:text-base">
            Clique aqui para ver as stacks que utilizo
          </p>
          <p className="mt-2 font-bold text-center">Stacks</p>
        </Link>

        <Link
          href="/projetos-pessoais"
          className="w-full h-full flex flex-col items-center justify-center text-white bg-purple-600 hover:bg-purple-800 hover:scale-105 hover:opacity-80 border border-gray-300 rounded-md transition-transform duration-300 mt-4 sm:mt-0"
        >
          <div className="w-16 h-16 flex items-center justify-center">
            <Notebook size={32} />
          </div>
          <p className="text-center text-sm sm:text-base">
            Clique aqui para ver os projetos que realizei
          </p>
          <p className="mt-2 font-bold text-center">Projetos</p>
        </Link>

        <Link
          href="/experiencias"
          className="w-full h-full flex flex-col items-center justify-center text-white bg-purple-600 hover:bg-purple-800 hover:scale-105 hover:opacity-80 border border-gray-300 rounded-md transition-transform duration-300 mt-4 sm:mt-0"
        >
          <div className="w-16 h-16 flex items-center justify-center">
            <Lightbulb size={32} />
          </div>
          <p className="text-center text-sm sm:text-base">
            Clique aqui para ver as minhas experiencias profissionais
          </p>
          <p className="mt-2 font-bold text-center">Experiencias</p>
        </Link>
      </section>
      <section
        id="contact"
        className="mt-4 sm:mt-8 p-4 rounded-md border border-gray-300"
      >
        <h2 className="text-xl sm:text-2xl text-white font-bold mb-2">
          Entre em contato comigo
        </h2>
        <p className="text-white text-sm sm:text-base mb-4">
          Caso tenha interesse em construir algo ou tenha alguma oportunidade,
          me envie uma mensagem.
        </p>
        <Link
          href="#tally-open=3xJxao&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=2000"
          className="flex items-center max-w-fit bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 rounded-lg hover:shadow-md transition-opacity duration-300"
        >
          Enviar mensagem <PaperPlaneTilt size={16} className="ml-2" />
        </Link>
      </section>
    </main>
  );
}
