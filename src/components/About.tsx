import { SubTitle } from "./SubTitle";

export function About() {
  return (
    <section
      id="about"
      className="w-full pt-48 pb-48 min-h-screen flex justify-center bg-zinc-900 relative overflow-hidden"
    >
      <div className="mx-6 max-w-3xl flex flex-col flex-1 justify-center items-center gap-2 z-10">
        <SubTitle title="Sobre" />
        <div className="font-medium text-base text-zinc-300 leading-8 space-y-5">
          <p>
            Olá!{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
              Sou Vagner Nerves, um apaixonado desenvolvedor de sistemas com uma
              paixão inabalável pela criação de soluções digitais inovadoras.
            </span>{" "}
            Minha jornada no mundo da programação começou quando eu tinha 16
            anos quando desenvolvi meus primeiros sites, e desde então, não
            parei de me encantar com a capacidade de transformar linhas de
            código em projetos que impulsionam a experiência do usuário e trazem
            impacto real para as pessoas.
          </p>
          <p>
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
              Estou me especialidade no momento no desenvolvimento mobile, e
              minhas habilidades inclui HTML, CSS, JavaScript, React Native e
              diversas bibliotecas e frameworks.
            </span>{" "}
            Adoro transformar designs em interfaces interativas e envolventes,
            focadas na usabilidade e acessibilidade. Acredito que a experiência
            do usuário é um pilar fundamental para o sucesso de qualquer
            projeto, e estou sempre em busca de aprimorar essa habilidade.
          </p>
          <p>
            Além disso, também{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
              tenho experiência em desenvolvimento web, desktop e back-end,
              trabalhando com React, Delphi, Node.js, e sou entusiasta de bancos
              de dados relacionais e não relacionais como Oracle e SQL Server.
            </span>{" "}
            Estou constantemente buscando aprender novas tecnologias e práticas
            para expandir meu conjunto de habilidades.
          </p>
          <p>
            Minha jornada profissional inclui trabalhar em projetos
            desafiadores,{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
              onde desenvolvi telas em sistemas de ERP, integrações financeiras,
              análise de requisitos de clientes para desenvolvimento e novas
              implementações no sistemas.
            </span>
          </p>
          <p>
            Meu objetivo é sempre superar desafios e desenvolver soluções
            inovadoras.{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
              Estou aberto a novas oportunidades e colaborações
            </span>
            , e adoraria ouvir sobre projetos empolgantes onde eu possa
            contribuir com minhas habilidades e paixão pela tecnologia.
          </p>
          <p>
            Seja bem-vindo ao meu portfólio, onde compartilho alguns dos meus
            projetos e experiências.{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
              Sinta-se à vontade para explorar e entrar em contato comigo se
              tiver alguma dúvida, ideia ou oportunidade de trabalho.
            </span>{" "}
            Vamos criar algo incrível juntos!
          </p>
        </div>
      </div>

      <div className="w-72 h-72 rounded-full bg-blue-900 blur-3xl absolute top-60 -left-[122px]" />
      <div className="w-72 h-72 rounded-full bg-blue-900 blur-3xl absolute bottom-60 -right-[122px]" />
    </section>
  );
}
