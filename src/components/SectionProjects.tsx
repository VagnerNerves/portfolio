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
              title="Marketspace"
              date="(Julho 2023 - Em andamento)"
              description={[
                "...Projeto em construção...",
                "O projeto Markespace está em desenvolvimento utilizando React Native e tem como objetivo criar um aplicativo de marketplace. Neste aplicativo, os usuários poderão realizar login e cadastrar seus anúncios para venda ou procurar por produtos para comprar.",
                "Uma das principais funcionalidades do aplicativo é a possibilidade de entrar em contato com o proprietário do anúncio diretamente pelo WhatsApp para efetuar a compra. Isso facilita a comunicação entre compradores e vendedores, tornando o processo mais rápido e eficiente.",
                "Os usuários também têm a capacidade de gerenciar seus próprios anúncios. Eles poderão editar as informações dos anúncios, caso seja necessário atualizar detalhes ou preços. Além disso, terão a opção de desativar anúncios quando os produtos forem vendidos, mantendo a plataforma atualizada e livre de anúncios não mais disponíveis.",
                "...Projeto em construção...",
              ]}
              technologies={[
                "React Native",
                "Expo",
                "TypeScript",
                "NativeBase",
              ]}
              url="https://github.com/VagnerNerves/marketspace-ignitern"
              images={[
                {
                  alt: "Image Splash Screen",
                  src: "/images/project-marketspace/1-splashscreen-project-marketspace-min.png",
                },
              ]}
            />

            <Project
              title="Ignite Gym"
              date="(Junho 2023 - Junho 2023)"
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
              images={[
                {
                  alt: "Image Splash Screen",
                  src: "/images/project-ignite-gym/1-splashscreen-project-ignit-gym-min.png",
                },
                {
                  alt: "Image Screen Login",
                  src: "/images/project-ignite-gym/2-screenlogin-project-ignit-gym-min.png",
                },
                {
                  alt: "Image Validation Login",
                  src: "/images/project-ignite-gym/3-validatiologin-project-ignit-gym-min.png",
                },
                {
                  alt: "Image Screen Created Account",
                  src: "/images/project-ignite-gym/4-screencreatedaccount-project-ignit-gym-min.png",
                },
                {
                  alt: "Image Screen Home",
                  src: "/images/project-ignite-gym/5-screenhome-project-ignit-gym-min.png",
                },
                {
                  alt: "Image Navigation Menu Home",
                  src: "/images/project-ignite-gym/6-navigationmenuonhome-project-ignit-gym-min.png",
                },
                {
                  alt: "Image Navigation Exercise",
                  src: "/images/project-ignite-gym/7-navigationexercise-project-ignit-gym-min.png",
                },
                {
                  alt: "Image Navigation Exercise",
                  src: "/images/project-ignite-gym/8-navigationexercise-project-ignit-gym-min.png",
                },
                {
                  alt: "Image Screen History exercises",
                  src: "/images/project-ignite-gym/9-screenhistoryexercises-project-ignit-gym-min.png",
                },
                {
                  alt: "Image Screen Perfil",
                  src: "/images/project-ignite-gym/10-screenperfil-project-ignit-gym-min.png",
                },
                {
                  alt: "Image Select Image Perfil",
                  src: "/images/project-ignite-gym/11-selectimageperfil-ignit-gym-min.png",
                },
                {
                  alt: "Image Ajusted Image Perfil",
                  src: "/images/project-ignite-gym/12-selectimageperfil-ignit-gym-min.png",
                },
                {
                  alt: "Image Save on Perfil",
                  src: "/images/project-ignite-gym/13-imagesaveonperfil-ignit-gym-min.png",
                },
                {
                  alt: "Image Home Updated Image",
                  src: "/images/project-ignite-gym/14-homeupdateimageperfil-ignit-gym-min.png",
                },
                {
                  alt: "Image Register Exercise",
                  src: "/images/project-ignite-gym/15-registerexercises-ignit-gym-min.png",
                },
              ]}
            />

            <Project
              title="Daily Diet"
              date="(Fevereiro 2023 - Maio 2023)"
              description={[
                "O projeto Daily Diet é um aplicativo desenvolvido em React Native com o objetivo de ajudar os usuários a registrarem suas refeições diárias. Com uma interface amigável, o aplicativo permite que os usuários insiram a data e hora de cada refeição e indiquem se ela faz parte de sua dieta ou não.",
                "Uma das principais funcionalidades do aplicativo é o cálculo automático do percentual de adesão à dieta. Com base nas refeições registradas como parte da dieta, o sistema calcula o quanto o usuário está seguindo o plano alimentar proposto.",
                "Além disso, o aplicativo oferece recursos para gerenciamento das refeições registradas. Os usuários podem editar informações sobre as refeições, caso seja necessário corrigir alguma informação. Também é possível excluir refeições que tenham sido registradas erroneamente ou que não sejam mais relevantes.",
                "É indicado para pessoas que buscam uma melhor compreensão de seus hábitos alimentares e desejam alcançar seus objetivos de saúde de maneira mais consciente e informada.",
              ]}
              technologies={[
                "React Native",
                "Expo",
                "TypeScript",
                "Styled Components",
                "Phosphor Icons",
                "React Navigation",
                "React Navitive SVG",
                "React Navitive SVG Transformer",
                "React Navitive UUID",
                "React Navitive Modal Datetime Picker",
                "React Navitive Modal Datetime Picker",
                "AsyncStorage",
                "date-fns",
              ]}
              url="https://github.com/VagnerNerves/dailydiet-ignitern"
              images={[
                {
                  alt: "Image Splash Screen",
                  src: "/images/project-daily-diet/1-splashscreen-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen Home",
                  src: "/images/project-daily-diet/2-screenhome-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen New Meal",
                  src: "/images/project-daily-diet/3-screennewmeal-project-daily-diet-min.png",
                },
                {
                  alt: "Image Select Date on New Meal",
                  src: "/images/project-daily-diet/4-selectdateonnewmeal-project-daily-diet-min.png",
                },
                {
                  alt: "Image Marke is Diet on New Meal",
                  src: "/images/project-daily-diet/5-markeisdietonnewmeal-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen is not Diet",
                  src: "/images/project-daily-diet/6-screennotisdiet-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen Home With Meal",
                  src: "/images/project-daily-diet/7-screenhomewithmeal-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen New Meal is Diet",
                  src: "/images/project-daily-diet/8-screennewmealisdiet-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen is Diet",
                  src: "/images/project-daily-diet/9-screenisdiet-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen Home With Meals",
                  src: "/images/project-daily-diet/10-screenhomewithmeals-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen Statistics",
                  src: "/images/project-daily-diet/11-screenstatistics-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen Home With Statistics Positive",
                  src: "/images/project-daily-diet/12-screenhomewithstatisticspositive-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen Statistics",
                  src: "/images/project-daily-diet/13-screenstatistic-project-daily-diet-min.png",
                },
                {
                  alt: "Image Screen View Meal",
                  src: "/images/project-daily-diet/14-screenviewmeal-daily-diet-min.png",
                },
                {
                  alt: "Image Screen Delete Meal",
                  src: "/images/project-daily-diet/15-screendeletemeal-daily-diet-min.png",
                },
                {
                  alt: "Image Screen View Meal Positive",
                  src: "/images/project-daily-diet/16-screenviewmealpositive-daily-diet-min.png",
                },
              ]}
            />

            <Project
              title="Ignite Teams"
              date="(Janeiro 2023 - Fevereiro 2023)"
              description={[
                "O projeto Ignite Teams é um aplicativo desenvolvido em React Native que tem como objetivo facilitar o gerenciamento de turmas, times e pessoas. Com uma interface amigável e intuitiva, o aplicativo permite o cadastro de turmas, dentro das quais é possível criar e gerenciar times compostos por membros.",
                "O aplicativo possui validações inteligentes para evitar duplicações, garantindo uma organização eficiente.",
                "É ideal para educadores, líderes de equipe ou qualquer pessoa que precise gerenciar grupos e membros de forma prática e segura.",
              ]}
              technologies={[
                "React Native",
                "Expo",
                "TypeScript",
                "PhosPhor Icons",
                "Styled Components",
                "SafeAreaContext",
                "React Navigation",
                "AsyncStorage",
              ]}
              url="https://github.com/VagnerNerves/igniteteams"
              images={[
                {
                  alt: "Image Splash Screen",
                  src: "/images/project-ignite-teams/1-splashscreen-project-ignit-teams-min.png",
                },
                {
                  alt: "Image Screen Home",
                  src: "/images/project-ignite-teams/2-screenhome-project-ignit-teams-min.png",
                },
                {
                  alt: "Image Register Group",
                  src: "/images/project-ignite-teams/3-registergroup-project-ignit-teams-min.png",
                },
                {
                  alt: "Image Group Registered",
                  src: "/images/project-ignite-teams/4-groupregistered-project-ignit-teams-min.png",
                },
                {
                  alt: "Image Register Team",
                  src: "/images/project-ignite-teams/5-registerteams-project-ignit-teams-min.png",
                },
                {
                  alt: "Image Write Team",
                  src: "/images/project-ignite-teams/6-writeteams-project-ignit-teams-min.png",
                },
                {
                  alt: "Image Team Registered",
                  src: "/images/project-ignite-teams/7-teamsregistered-project-ignit-teams-min.png",
                },
                {
                  alt: "Image Other Team Registered",
                  src: "/images/project-ignite-teams/8-otherteamsregistered-project-ignit-teams-min.png",
                },
                {
                  alt: "Image Add Person on the Team",
                  src: "/images/project-ignite-teams/9-addpersononteam-project-ignit-teams-min.png",
                },
                {
                  alt: "Image Screen Team",
                  src: "/images/project-ignite-teams/10-screenteam-project-ignit-teams-min.png",
                },
                {
                  alt: "Image Screen Home With Groups",
                  src: "/images/project-ignite-teams/11-screenhomewithgroups-project-ignit-teams-min.png",
                },
              ]}
            />

            <Project
              title="Calculadora"
              date="(Fevereirio 2023 - Fevereiro 2023)"
              description={[
                "O projeto Calculadora foi desenvolvido em React Native com Expo e é uma aplicação móvel que oferece uma calculadora completa com uma variedade de funções de cálculos e mantém um histórico das operações realizadas.",
                "É uma ferramenta útil para cálculos matemáticos rápidos e convenientes.",
              ]}
              technologies={[
                "React Native",
                "Expo",
                "TypeScript",
                "Styled Components",
                "React Native SVG",
                "React Native SVG Transformer",
                "PhosPhor Icons",
              ]}
              url="https://github.com/VagnerNerves/calculator-boracodar"
              images={[
                {
                  alt: "Image Splash Screen",
                  src: "/images/project-calculator/1-splashscreen-project-calculator-min.png",
                },
                {
                  alt: "Image Screen Inicial",
                  src: "/images/project-calculator/2-screeninicial-project-calculator-min.png",
                },
                {
                  alt: "Image Writer Number",
                  src: "/images/project-calculator/3-writenumber-project-calculator-min.png",
                },
                {
                  alt: "Image Sum Number",
                  src: "/images/project-calculator/4-sumnumber-project-calculator-min.png",
                },
                {
                  alt: "Image Result Sum Number",
                  src: "/images/project-calculator/5-resultsumnumber-project-calculator-min.png",
                },
                {
                  alt: "Image Hitoric Calculated",
                  src: "/images/project-calculator/6-historicthecalculate-project-calculator-min.png",
                },
                {
                  alt: "Image Number With Dot",
                  src: "/images/project-calculator/7-numberwithdot-project-calculator-min.png",
                },
                {
                  alt: "Image Sum Number With Dot",
                  src: "/images/project-calculator/8-sumnumberwithdot-project-calculator-min.png",
                },
                {
                  alt: "Image Result Sum Number With Dot",
                  src: "/images/project-calculator/9-resultsumnumberwithdot-project-calculator-min.png",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
