import { ButtonLink } from "./ButtonLink";
import { Project } from "./Project";
import { SubTitle } from "./SubTitle";

export function SectionProjects() {
  return (
    <section
      id="projects"
      className="w-full py-48 min-h-screen flex justify-center"
    >
      <div className="max-w-7xl flex flex-col flex-1 justify-center items-center px-6 gap-2 ">
        <SubTitle title="Projetos" />
        <div className="w-full flex flex-1">
          <div className="border-l border-blue-800 pl-10 flex flex-1 flex-col">
            <Project
              title="Ignite Gym"
              data="(Junho 2023 - Agosto 2023)"
              description={[
                "O projeto Ignite Gim foi desenvolvido em React Native e é um aplicativo voltado para fitness que oferece recursos de registro de usuários, rastreamento de  exercícios e histórico de execução.",
                "Nele foi criado as seguintes telas: Tela de Login, Tela de Registro, Tela Principal, Histórico de Treino, Tela de  Edição Perfil.",
                "Essas telas proporcionam uma experiência abrangente para os usuários do aplicativo Ignite Gim, permitindo que eles façam login, se registrem, realizem exercícios, acompanhem seu progresso e gerenciem suas informações pessoais.",
              ]}
              technologies={[
                "React Native",
                "Expo",
                "TypeScript",
                "NativeBase",
                "React Navigation",
                "Axios",
                "Expo ImagePicker",
                "Expo FileSystem",
                "React Hook Form",
                "Yup",
                "AsyncStorage",
              ]}
              url="https://github.com/VagnerNerves/ignitegym-rn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
