import Image from "next/image";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function SobreMim() {
  return (
    <div>
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
          className="mt-4 flex flex-col md:flex-row justify-between gap-6 text-justify"
        >
          <Image
            className="max-w-full max-h-full md:max-w-96 rounded md:order-1"
            src="/images/lucas_perfil.jpg"
            alt="perfil"
            width="400"
            height="400"
          />
          <div className="md:order-2 flex-1">
            <p className="leading-8 antialiased text-base">
              Meu nome é Lucas Marchesoni, tenho 23 anos, técnico em informática
              pela ETEC Lauro Gomes e graduando no bacharel em Ciências da
              Computação pela Universidade São Judas Tadeu.
            </p>
            <p className="leading-8 antialiased text-base">
              Possuo 4 anos de experiência dentro da área de TI, passando por
              suporte técnico, desenvolvimento e análise de negócios, permitindo
              a construção de uma ampla gama de habilidades técnicas e
              interpessoais.
            </p>
            <p className="leading-8 antialiased text-base">
              Tenho conhecimento e atuação em banco de dados, infraestrutura,
              programação, testes, deploys, produção de
              documentações/especificações, implantação/manutenção/atualização
              de sistemas, contato com a área de negócios, fornecedores, solução
              de chamados e participação em projetos. Em habilidades técnicas,
              sou uma pessoa com ótimo relacionamento interpessoal, dedicado,
              autodidata, aprendo com facilidade e estou sempre estudando para
              aprender cada vez mais e desenvolver novas habilidades.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
