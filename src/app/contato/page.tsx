"use client";
import Link from "next/link";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function Contato() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-8">
        <div>
          <Header />
          <hr />
        </div>
        <section className="mt-4 sm:mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-purple-700 font-bold">
            Contato
          </h1>
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
      <Footer />
    </div>
  );
}
