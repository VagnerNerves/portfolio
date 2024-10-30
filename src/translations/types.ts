export type languageTypes = 'en' | 'pt-br'
export const languagesSupported: languageTypes[] = ['en', 'pt-br']

export type translationsProps = {
  name: string
  titlePage: string
  descriptionPage: string
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
      url?: string
      urlWebsite?: string
      urlVideo?: string
      titleButtonProject?: string
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
