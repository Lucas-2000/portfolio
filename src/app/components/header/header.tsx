import Image from "next/image";
import Dropdown from "../dropdown/dropdown";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mb-2 lg:items-start lg:mb-0 flex-wrap">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width="200"
          height="200"
          className="max-w-[200px] mx-auto lg:mx-0"
        />
      </Link>
      <nav className="mt-4 lg:mt-0">
        <ul className="flex justify-center items-center gap-8">
          <li>
            <Dropdown
              title="Sobre"
              options={[
                { href: "sobre-mim", title: "Sobre mim" },
                { href: "experiencias", title: "Experiências" },
                { href: "stacks", title: "Stacks" },
              ]}
            />
          </li>
          <li>
            <Dropdown
              title="Projetos"
              options={[
                { href: "projetos-academicos", title: "Projetos acadêmicos" },
                { href: "projetos-pessoais", title: "Projetos pessoais" },
              ]}
            />
          </li>
          <li>
            <Link className="p-2" href="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
