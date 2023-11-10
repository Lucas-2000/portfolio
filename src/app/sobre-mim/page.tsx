import Image from "next/image";
import Header from "../components/header/header";

export default function SobreMim() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-8">
      <div>
        <Header />
        <hr />
      </div>
      <section id="about" className="mt-4 sm:mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Sobre mim
        </h1>
      </section>
      <section
        id="information"
        className="mt-4 flex justify-between gap-16 text-justify"
      >
        <Image
          className="max-w-full max-h-full rounded"
          src="/images/lucas_perfil.jpg"
          alt="perfil"
          width="400"
          height="400"
        />
        <div>
          <p className="leading-8 antialiased text-base">
            Meu nome é Lucas Marchesoni, tenho 23 anos, técnico em informática
            pela ETEC Lauro Gomes e graduando no bacharel em Ciências da
            Computação pela Universidade São Judas Tadeu.
          </p>
          <p className="leading-8 antialiased text-base">
            Possuo 4 anos de experiência dentro da área de TI percorrendo por
            suporte técnico, desenvolvedor e analista de negócios, conseguindo
            assim construir uma vasta gama de hard e soft skills.
          </p>
          <p className="leading-8 antialiased text-base">
            Tendo conhecimento e atuado com banco de dados, infraestrutura,
            programação, testes, deploys, produção de
            documentações/especificações, implantação/manutenção/atualização de
            sistemas, contato com a área de negócios, contato com fornecedores,
            solução de chamados e participação de projetos. Em hard skills sou
            uma pessoa de ótimo relacionamento interpessoal, sou dedicado,
            autoditada, aprendo com facilidade e estou sempre estudando para
            poder aprender cada vez mais e desenvolver novas skills.
          </p>
        </div>
      </section>
    </main>
  );
}
