import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { experiencesList } from "./experiences-list/experiencesList";

export default function Experiencias() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-8">
        <div>
          <Header />
          <hr />
        </div>
        <section className="mt-4 sm:mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-purple-700 font-bold">
            Minhas experiências
          </h1>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 h-auto sm:h-56 bg-dark text-white">
          {experiencesList.map((experiences) => (
            <div
              key={experiences.id}
              className="p-4 border border-gray-700 rounded-md"
            >
              <h2 className="text-xl font-bold mb-2 text-white">
                {experiences.title}
              </h2>
              <p className="mb-2">
                {experiences.company} - {experiences.localization}
              </p>
              <p className="mb-2">
                {experiences.startDate} - {experiences.finalDate}
              </p>
              <p className="mb-2 text-justify">{experiences.summary}</p>
              <ul className="flex flex-wrap">
                {experiences.skills.map((skill) => (
                  <li
                    key={skill}
                    className="mb-2 mr-2 px-3 py-1 bg-gray-700 text-white rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
