import { translationsProps } from './types'

export const enTranslation: translationsProps = {
  name: 'Vagner Nerves',
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
        date: '(July 2023 - In progress)',
        description: [
          '...Project under construction...',
          'The Marketspace project is under development using React Native and aims to create a marketplace application. In this app, users will be able to log in, list their ads for sale, or search for products to buy.',
          'One of the main features of the app is the ability to directly contact the ad owner through WhatsApp to make the purchase. This facilitates communication between buyers and sellers, making the process faster and more efficient.',
          "Users also have the ability to manage their own ads. They will be able to edit ad information if it's necessary to update details or prices. Additionally, they will have the option to deactivate ads when products are sold, keeping the platform updated and free from no longer available ads.",
          '...Project under construction...'
        ],
        technologies: ['React Native', 'Expo', 'TypeScript', 'NativeBase'],
        url: 'https://github.com/VagnerNerves/marketspace-ignitern',
        images: [
          {
            alt: 'Image of the splash screen.',
            src: '/images/project-marketspace/1-splashscreen-project-marketspace-min.png'
          }
        ]
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
        images: [
          {
            alt: 'Image of the splash screen',
            src: '/images/project-ignite-gym/1-splashscreen-project-ignit-gym-min.png'
          },
          {
            alt: 'Image of the login screen',
            src: '/images/project-ignite-gym/2-screenlogin-project-ignit-gym-min.png'
          },
          {
            alt: 'Image of the login validation.',
            src: '/images/project-ignite-gym/3-validatiologin-project-ignit-gym-min.png'
          },
          {
            alt: 'Image of the create new account screen',
            src: '/images/project-ignite-gym/4-screencreatedaccount-project-ignit-gym-min.png'
          },
          {
            alt: 'Image of the Home screen',
            src: '/images/project-ignite-gym/5-screenhome-project-ignit-gym-min.png'
          },
          {
            alt: 'Image of the navigation menu on the Home screen',
            src: '/images/project-ignite-gym/6-navigationmenuonhome-project-ignit-gym-min.png'
          },
          {
            alt: 'Image navigating through the exercises',
            src: '/images/project-ignite-gym/7-navigationexercise-project-ignit-gym-min.png'
          },
          {
            alt: 'Image navigating through the exercises',
            src: '/images/project-ignite-gym/8-navigationexercise-project-ignit-gym-min.png'
          },
          {
            alt: 'Image of the workout history screen.',
            src: '/images/project-ignite-gym/9-screenhistoryexercises-project-ignit-gym-min.png'
          },
          {
            alt: 'Image Screen Perfil',
            src: '/images/project-ignite-gym/10-screenperfil-project-ignit-gym-min.png'
          },
          {
            alt: 'Image Select Image Perfil',
            src: '/images/project-ignite-gym/11-selectimageperfil-ignit-gym-min.png'
          },
          {
            alt: 'Image Ajusted Image Perfil',
            src: '/images/project-ignite-gym/12-selectimageperfil-ignit-gym-min.png'
          },
          {
            alt: 'Image Save on Perfil',
            src: '/images/project-ignite-gym/13-imagesaveonperfil-ignit-gym-min.png'
          },
          {
            alt: 'Image Home Updated Image',
            src: '/images/project-ignite-gym/14-homeupdateimageperfil-ignit-gym-min.png'
          },
          {
            alt: 'Image Register Exercise',
            src: '/images/project-ignite-gym/15-registerexercises-ignit-gym-min.png'
          }
        ]
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
        images: [
          {
            alt: 'Image Splash Screen',
            src: '/images/project-daily-diet/1-splashscreen-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen Home',
            src: '/images/project-daily-diet/2-screenhome-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen New Meal',
            src: '/images/project-daily-diet/3-screennewmeal-project-daily-diet-min.png'
          },
          {
            alt: 'Image Select Date on New Meal',
            src: '/images/project-daily-diet/4-selectdateonnewmeal-project-daily-diet-min.png'
          },
          {
            alt: 'Image Marke is Diet on New Meal',
            src: '/images/project-daily-diet/5-markeisdietonnewmeal-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen is not Diet',
            src: '/images/project-daily-diet/6-screennotisdiet-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen Home With Meal',
            src: '/images/project-daily-diet/7-screenhomewithmeal-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen New Meal is Diet',
            src: '/images/project-daily-diet/8-screennewmealisdiet-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen is Diet',
            src: '/images/project-daily-diet/9-screenisdiet-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen Home With Meals',
            src: '/images/project-daily-diet/10-screenhomewithmeals-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen Statistics',
            src: '/images/project-daily-diet/11-screenstatistics-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen Home With Statistics Positive',
            src: '/images/project-daily-diet/12-screenhomewithstatisticspositive-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen Statistics',
            src: '/images/project-daily-diet/13-screenstatistic-project-daily-diet-min.png'
          },
          {
            alt: 'Image Screen View Meal',
            src: '/images/project-daily-diet/14-screenviewmeal-daily-diet-min.png'
          },
          {
            alt: 'Image Screen Delete Meal',
            src: '/images/project-daily-diet/15-screendeletemeal-daily-diet-min.png'
          },
          {
            alt: 'Image Screen View Meal Positive',
            src: '/images/project-daily-diet/16-screenviewmealpositive-daily-diet-min.png'
          }
        ]
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
        images: [
          {
            alt: 'Image Splash Screen',
            src: '/images/project-ignite-teams/1-splashscreen-project-ignit-teams-min.png'
          },
          {
            alt: 'Image Screen Home',
            src: '/images/project-ignite-teams/2-screenhome-project-ignit-teams-min.png'
          },
          {
            alt: 'Image Register Group',
            src: '/images/project-ignite-teams/3-registergroup-project-ignit-teams-min.png'
          },
          {
            alt: 'Image Group Registered',
            src: '/images/project-ignite-teams/4-groupregistered-project-ignit-teams-min.png'
          },
          {
            alt: 'Image Register Team',
            src: '/images/project-ignite-teams/5-registerteams-project-ignit-teams-min.png'
          },
          {
            alt: 'Image Write Team',
            src: '/images/project-ignite-teams/6-writeteams-project-ignit-teams-min.png'
          },
          {
            alt: 'Image Team Registered',
            src: '/images/project-ignite-teams/7-teamsregistered-project-ignit-teams-min.png'
          },
          {
            alt: 'Image Other Team Registered',
            src: '/images/project-ignite-teams/8-otherteamsregistered-project-ignit-teams-min.png'
          },
          {
            alt: 'Image Add Person on the Team',
            src: '/images/project-ignite-teams/9-addpersononteam-project-ignit-teams-min.png'
          },
          {
            alt: 'Image Screen Team',
            src: '/images/project-ignite-teams/10-screenteam-project-ignit-teams-min.png'
          },
          {
            alt: 'Image Screen Home With Groups',
            src: '/images/project-ignite-teams/11-screenhomewithgroups-project-ignit-teams-min.png'
          }
        ]
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
        images: [
          {
            alt: 'Image Splash Screen',
            src: '/images/project-calculator/1-splashscreen-project-calculator-min.png'
          },
          {
            alt: 'Image Screen Inicial',
            src: '/images/project-calculator/2-screeninicial-project-calculator-min.png'
          },
          {
            alt: 'Image Writer Number',
            src: '/images/project-calculator/3-writenumber-project-calculator-min.png'
          },
          {
            alt: 'Image Sum Number',
            src: '/images/project-calculator/4-sumnumber-project-calculator-min.png'
          },
          {
            alt: 'Image Result Sum Number',
            src: '/images/project-calculator/5-resultsumnumber-project-calculator-min.png'
          },
          {
            alt: 'Image Hitoric Calculated',
            src: '/images/project-calculator/6-historicthecalculate-project-calculator-min.png'
          },
          {
            alt: 'Image Number With Dot',
            src: '/images/project-calculator/7-numberwithdot-project-calculator-min.png'
          },
          {
            alt: 'Image Sum Number With Dot',
            src: '/images/project-calculator/8-sumnumberwithdot-project-calculator-min.png'
          },
          {
            alt: 'Image Result Sum Number With Dot',
            src: '/images/project-calculator/9-resultsumnumberwithdot-project-calculator-min.png'
          }
        ]
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
