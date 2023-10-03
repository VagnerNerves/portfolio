import { translationsProps } from './types'

export const ptBRTranslation: translationsProps = {
  name: 'Vagner Nerves',
  titlePage: 'Vagner Nerves - Portifólio',
  descriptionPage:
    'Portifólio de Vagner Nerves contendo seus projetos na are de desenvolvimento de sistemas.',
  urlLinks: {
    linkedin: 'https://www.linkedin.com/in/vagnernervessantos/',
    github: 'https://github.com/VagnerNerves',
    email: 'vagnernervessantos@gmail.com'
  },
  header: {
    home: 'Home',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato'
  },
  floatingButtons: {
    buttonOptions: 'Opções',
    buttonTranslate: 'Traduzir para o Inglês.',
    altImageTranslate: 'Bandeira dos Estados Unidos'
  },
  sectionHome: {
    text1: 'Oi!',
    text2: 'Eu sou o',
    text3: 'desenvolvedor',
    skills: ['mobile', 'fullstack'],
    altPhoto: 'Foto de Vagner Nerves'
  },
  sectionAbout: {
    title: 'Sobre',
    paragraph: [
      {
        beforeSpan: 'Olá!',
        span: 'Sou Vagner Nerves, um apaixonado desenvolvedor de sistemas com uma paixão inabalável pela criação de soluções digitais inovadoras.',
        afterSpan:
          'Minha jornada no mundo da programação começou quando eu tinha 16 anos quando desenvolvi meus primeiros sites, e desde então, não parei de me encantar com a capacidade de transformar linhas de código em projetos.',
        typeSpan: '1'
      },
      {
        beforeSpan: '',
        span: 'Estou me especializando no momento no desenvolvimento mobile, e minhas habilidades inclui HTML, CSS, JavaScript, React Native e diversas bibliotecas e frameworks.',
        afterSpan:
          'Adoro transformar designs em interfaces interativas e envolventes, focadas na usabilidade e acessibilidade. Acredito que a experiência do usuário é um pilar fundamental para o sucesso de qualquer projeto, e estou sempre em busca de aprimorar essa habilidade.',
        typeSpan: '1'
      },
      {
        beforeSpan: 'Além disso, também',
        span: 'tenho experiência em desenvolvimento web, desktop e back-end, trabalhando com React, Delphi, Node.js, e sou entusiasta de bancos de dados relacionais e não relacionais como Oracle e SQL Server.',
        afterSpan:
          'Estou constantemente buscando aprender novas tecnologias e práticas para expandir meu conjunto de habilidades.',
        typeSpan: '1'
      },
      {
        beforeSpan:
          'Minha jornada profissional inclui trabalhar em projetos desafiadores,',
        span: 'onde desenvolvi telas em sistemas de ERP, integrações financeiras, análise de requisitos de clientes para desenvolvimento e novas implementações no sistemas.',
        afterSpan: '',
        typeSpan: '2'
      },
      {
        beforeSpan:
          'Meu objetivo é sempre superar desafios e desenvolver soluções inovadoras.',
        span: 'Estou aberto a novas oportunidades e colaborações,',
        afterSpan:
          'e adoraria ouvir sobre projetos empolgantes onde eu possa contribuir com minhas habilidades e paixão pela tecnologia.',
        typeSpan: '2'
      },
      {
        beforeSpan:
          'Seja bem-vindo ao meu portfólio, onde compartilho alguns dos meus projetos e experiências.',
        span: 'Sinta-se à vontade para explorar e entrar em contato comigo se tiver alguma dúvida, ideia ou oportunidade de trabalho.',
        afterSpan: 'Vamos criar algo incrível juntos!',
        typeSpan: '2'
      }
    ]
  },
  sectionProjects: {
    title: 'Projetos',
    titleTechnologies: 'Tecnologias Utilizadas:',
    titleButtonProject: 'Acesse o Projeto',
    projects: [
      {
        title: 'Marketspace',
        date: '(Julho 2023 - Outubro 2023)',
        description: [
          'O projeto Marketspace foi desenvolvido em React Native, é um aplicativo de marketplace que permite aos usuários realizar login e cadastrar seus anúncios para venda ou procurar por produtos para comprar.',
          'Uma das principais funcionalidades do aplicativo é a possibilidade de entrar em contato com o proprietário do anúncio diretamente pelo WhatsApp para efetuar a compra. Isso facilita a comunicação entre compradores e vendedores, tornando o processo mais rápido e eficiente.',
          'Os usuários também têm a capacidade de gerenciar seus próprios anúncios. Eles poderão editar as informações dos anúncios, caso seja necessário atualizar detalhes ou preços. Além disso, terão a opção de desativar anúncios quando os produtos forem vendidos, mantendo a plataforma atualizada e livre de anúncios não mais disponíveis.'
        ],
        technologies: [
          'React Native',
          'Expo',
          'TypeScript',
          'NativeBase',
          'React Navigation',
          'Axios',
          'expo ImagePicker',
          'React Hook Form',
          'Yup',
          'AsyncStorage',
          'Phosphor Icons',
          'React Native Modalize',
          'React Native Portalize',
          'React Native Reanimated Carousel'
        ],
        url: 'https://github.com/VagnerNerves/marketspace-ignitern',
        urlVideo: 'https://www.youtube.com/watch?v=_sWtr9fkO0s'
      },

      {
        title: 'Ignite Gym',
        date: '(Junho 2023 - Junho 2023)',
        description: [
          'O projeto Ignite Gim foi desenvolvido em React Native e é um aplicativo voltado para fitness que oferece recursos de registro de usuários, rastreamento de  exercícios e histórico de execução.',
          'Nele foi criado as seguintes telas: Tela de Login, Tela de Registro, Tela Principal, Histórico de Treino, Tela de  Edição Perfil.',
          'Essas telas proporcionam uma experiência abrangente para os usuários do aplicativo Ignite Gim, permitindo que eles façam login, se registrem, realizem exercícios, acompanhem seu progresso e gerenciem suas informações pessoais.'
        ],
        technologies: [
          'React Native',
          'Expo',
          'TypeScript',
          'NativeBase',
          'React Navigation',
          'Axios',
          'Expo ImagePicker',
          'Expo FileSystem',
          'React Hook Form',
          'Yup',
          'AsyncStorage'
        ],
        url: 'https://github.com/VagnerNerves/ignitegym-rn',
        urlVideo: 'https://www.youtube.com/watch?v=kQPBkW7C-Ik'
      },

      {
        title: 'Daily Diet',
        date: '(Fevereiro 2023 - Maio 2023)',
        description: [
          'O projeto Daily Diet é um aplicativo desenvolvido em React Native com o objetivo de ajudar os usuários a registrarem suas refeições diárias. Com uma interface amigável, o aplicativo permite que os usuários insiram a data e hora de cada refeição e indiquem se ela faz parte de sua dieta ou não.',
          'Uma das principais funcionalidades do aplicativo é o cálculo automático do percentual de adesão à dieta. Com base nas refeições registradas como parte da dieta, o sistema calcula o quanto o usuário está seguindo o plano alimentar proposto.',
          'Além disso, o aplicativo oferece recursos para gerenciamento das refeições registradas. Os usuários podem editar informações sobre as refeições, caso seja necessário corrigir alguma informação. Também é possível excluir refeições que tenham sido registradas erroneamente ou que não sejam mais relevantes.',
          'É indicado para pessoas que buscam uma melhor compreensão de seus hábitos alimentares e desejam alcançar seus objetivos de saúde de maneira mais consciente e informada.'
        ],
        technologies: [
          'React Native',
          'Expo',
          'TypeScript',
          'Styled Components',
          'Phosphor Icons',
          'React Navigation',
          'React Navitive SVG',
          'React Navitive SVG Transformer',
          'React Navitive UUID',
          'React Navitive Modal Datetime Picker',
          'React Navitive Modal Datetime Picker',
          'AsyncStorage',
          'date-fns'
        ],
        url: 'https://github.com/VagnerNerves/dailydiet-ignitern',
        urlVideo: 'https://www.youtube.com/watch?v=1mUJAjoLm2I'
      },

      {
        title: 'Ignite Teams',
        date: '(Janeiro 2023 - Fevereiro 2023)',
        description: [
          'O projeto Ignite Teams é um aplicativo desenvolvido em React Native que tem como objetivo facilitar o gerenciamento de turmas, times e pessoas. Com uma interface amigável e intuitiva, o aplicativo permite o cadastro de turmas, dentro das quais é possível criar e gerenciar times compostos por membros.',
          'O aplicativo possui validações inteligentes para evitar duplicações, garantindo uma organização eficiente.',
          'É ideal para educadores, líderes de equipe ou qualquer pessoa que precise gerenciar grupos e membros de forma prática e segura.'
        ],
        technologies: [
          'React Native',
          'Expo',
          'TypeScript',
          'PhosPhor Icons',
          'Styled Components',
          'SafeAreaContext',
          'React Navigation',
          'AsyncStorage'
        ],
        url: 'https://github.com/VagnerNerves/igniteteams',
        urlVideo: 'https://www.youtube.com/watch?v=VRBiB3Gx4E4'
      },

      {
        title: 'Calculator',
        date: '(Fevereirio 2023 - Fevereiro 2023)',
        description: [
          'O projeto Calculator foi desenvolvido em React Native com Expo e é uma aplicação móvel que oferece uma calculadora completa com uma variedade de funções de cálculos e mantém um histórico das operações realizadas.',
          'É uma ferramenta útil para cálculos matemáticos rápidos e convenientes.'
        ],
        technologies: [
          'React Native',
          'Expo',
          'TypeScript',
          'Styled Components',
          'React Native SVG',
          'React Native SVG Transformer',
          'PhosPhor Icons'
        ],
        url: 'https://github.com/VagnerNerves/calculator-boracodar',
        urlVideo: 'https://www.youtube.com/watch?v=fzL4oPdMjeE'
      }
    ]
  },
  sectionContact: {
    title: 'Entre em contato por:'
  },
  footer: {
    copyright: 'Direitos Autorais',
    descriptionCopyright: 'Todos os direitos reservados.'
  }
}
