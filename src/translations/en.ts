import { translationsProps } from './types'

export const enTranslation: translationsProps = {
  name: 'Vagner Nerves',
  titlePage: 'Vagner Nerves - Portfolio',
  descriptionPage:
    'Portfolio of Vagner Nerves showcasing his projects in the field of systems development.',
  urlLinks: {
    linkedin: 'https://www.linkedin.com/in/vagnernervessantos/',
    github: 'https://github.com/VagnerNerves',
    email: 'vagnernervessantos@gmail.com'
  },
  header: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact'
  },
  floatingButtons: {
    buttonOptions: 'Options',
    buttonTranslate: 'Translate to Portuguese Brazil.',
    altImageTranslate: 'Flag of Brazil'
  },
  sectionHome: {
    text1: 'Hi!',
    text2: 'I am',
    text3: 'developer',
    skills: ['mobile', 'fullstack'],
    altPhoto: 'Phot of Vagner Nerves'
  },
  sectionAbout: {
    title: 'About',
    paragraph: [
      {
        beforeSpan: 'Hello!',
        span: 'I am Vagner Nerves, a passionate systems developer with an unwavering passion for creating innovative digital solutions.',
        afterSpan:
          "My journey in the world of programming began when I was 16 years old, developing my first websites, and since then, I haven't stopped being amazed by the ability to turn lines of code into projects.",
        typeSpan: '1'
      },
      {
        beforeSpan: '',
        span: 'I am currently specializing in mobile development, and my skills include HTML, CSS, JavaScript, React Native, and various libraries and frameworks.',
        afterSpan:
          'I love turning designs into interactive and engaging interfaces, focused on usability and accessibility. I believe that user experience is a fundamental pillar for the success of any project, and I am always striving to improve this skill.',
        typeSpan: '1'
      },
      {
        beforeSpan: 'In addition, I also',
        span: 'have experience in web, desktop, and back-end development, working with React, Delphi, Node.js, and I am an enthusiast of relational and non-relational databases such as Oracle and SQL Server.',
        afterSpan:
          'I am constantly seeking to learn new technologies and practices to expand my skill set.',
        typeSpan: '1'
      },
      {
        beforeSpan:
          'My professional journey includes working on challenging projects',
        span: 'where I developed screens in ERP systems, financial integrations, analyzed customer requirements for development, and implemented new features in the systems.',
        afterSpan: '',
        typeSpan: '2'
      },
      {
        beforeSpan:
          'My goal is always to overcome challenges and develop innovative solutions.',
        span: 'I am open to new opportunities and collaborations,',
        afterSpan:
          'and would love to hear about exciting projects where I can contribute with my skills and passion for technology.',
        typeSpan: '2'
      },
      {
        beforeSpan:
          'Welcome to my portfolio, where I share some of my projects and experiences.',
        span: 'Feel free to explore and get in touch with me if you have any questions, ideas, or work opportunities.',
        afterSpan: "Let's create something amazing together!",
        typeSpan: '2'
      }
    ]
  },
  sectionProjects: {
    title: 'Projects',
    titleTechnologies: 'Technologies Used:',
    titleButtonProject: 'Access the Project',
    projects: [
      {
        title: 'Marketspace',
        date: '(July 2023 - October 2023)',
        description: [
          'The Marketspace project was developed in React Native. It is a marketplace application that allows users to log in, create their advertisements for sale, or search for products to buy.',
          'One of the main features of the application is the ability to directly contact the advertisement owner via WhatsApp to complete the purchase. This streamlines communication between buyers and sellers, making the process faster and more efficient.',
          'Users also have the ability to manage their own advertisements. They will be able to edit advertisement information if necessary to update details or prices. Additionally, they will have the option to deactivate advertisements when the products are sold, keeping the platform up-to-date and free of no longer available ads.'
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
        urlVideo: 'https://vimeo.com/873287928'
      },

      {
        title: 'Ignite Gym',
        date: '(June 2023 - June 2023)',
        description: [
          'The Ignite Gim project was developed in React Native and is a fitness-oriented application that offers user registration, exercise tracking, and performance history features.',
          'The following screens were created in it: Login Screen, Registration Screen, Main Screen, Workout History, and Profile Edit Screen.',
          'These screens provide a comprehensive experience for users of the Ignite Gim app, allowing them to log in, register, perform exercises, track their progress, and manage their personal information.'
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
        urlVideo: 'https://vimeo.com/873294621'
      },

      {
        title: 'Daily Diet',
        date: '(February 2023 - May 2023)',
        description: [
          'The Daily Diet project is an application developed in React Native with the aim of helping users record their daily meals. With a user-friendly interface, the app allows users to input the date and time of each meal and indicate whether it is part of their diet or not.',
          'One of the main features of the app is the automatic calculation of the percentage of adherence to the diet. Based on the meals recorded as part of the diet, the system calculates how much the user is following the proposed meal plan.',
          'Additionally, the app offers features for managing the recorded meals. Users can edit information about the meals if it is necessary to correct any details. It is also possible to delete meals that have been registered incorrectly or are no longer relevant.',
          'It is recommended for people who are seeking a better understanding of their eating habits and want to achieve their health goals in a more conscious and informed manner.'
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
        date: '(January 2023 - February 2023)',
        description: [
          'The Ignite Teams project is an application developed in React Native with the aim of facilitating the management of classes, teams, and individuals. With a user-friendly and intuitive interface, the app allows the registration of classes, within which it is possible to create and manage teams composed of members.',
          'The app has intelligent validations to prevent duplications, ensuring efficient organization.',
          'It is ideal for educators, team leaders, or anyone who needs to manage groups and members in a practical and secure way.'
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
        date: '(February 2023 - February 2023)',
        description: [
          'The Calculator project was developed in React Native with Expo and is a mobile application that offers a comprehensive calculator with a variety of calculation functions and keeps a history of the performed operations.',
          'It is a useful tool for quick and convenient mathematical calculations.'
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
    title: 'Contact via:'
  },
  footer: {
    copyright: 'Copyright',
    descriptionCopyright: 'All rights reserved.'
  }
}
