export type languageTypes = 'en' | 'pt-BR'
export const languagesSupported: languageTypes[] = ['en', 'pt-BR']

export type translationsProps = {
  name: string
  urlLinks: {
    linkedin: string
    github: string
    email: string
  }
  floatingButtons: {
    buttonOptions: string
    buttonTranslate: string
    altImageTranslate: string
  }
  header: {
    home: string
    about: string
    projects: string
    contact: string
  }
  sectionHome: {
    text1: string
    text2: string
    text3: string
    skills: string[]
    altPhoto: string
  }
  sectionAbout: {
    title: string
    paragraph: {
      beforeSpan: string
      span: string
      afterSpan: string
      typeSpan: '1' | '2'
    }[]
  }
  sectionProjects: {
    title: string
    titleTechnologies: string
    titleButtonProject: string
    projects: {
      title: string
      date: string
      description: string[]
      technologies: string[]
      url: string
      images: {
        alt: string
        src: string
      }[]
    }[]
  }
  sectionContact: {
    title: string
  }
  footer: {
    copyright: string
    descriptionCopyright: string
  }
}
