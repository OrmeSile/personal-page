import cursusStyles from './cursus.module.css'
import {
  TechnologiesContainer
} from "@/components/Article/TechnologiesContainer";

export const CursusBlock = () => {
  return (
    <div className={cursusStyles.container}>
      <ul className={cursusStyles.list}>
        <CursusLine
          year={'Aujourd\'hui'}
          name={'auto-formation'}
          description={'cursus'}
          technologies={["typescript", "next", "postgresql", "prisma", "rust"]}
        />
        <CursusLine
          year={'Juil. 2023'}
          name={'Obtention du titre Développeur Web/Web mobile'}
          description={'cursus'}
        />
        <CursusLine
          year={'Mai 2023'}
          name={'stage - Le temple du Jeu'}
          description={'cursus'}
          technologies={["typescript", "vue", "php", "codeigniter", "mariadb", "apache"]}
        />
        <CursusLine
          year={'Nov. 2022'}
          name={'Ecole ENI'}
          description={'cursus'}
          technologies={["javascript", "php", "css", "html", "java", "kotlin", "symfony",]}
        />
        <CursusLine
          year={'Mar. 2022'}
          name={'Fullstack Open'}
          description={'cursus'}
          technologies={["javascript", "typescript", "reactjs", "postgresql", "mongo", "graphql", "docker"]}
        />
        <CursusLine
          year={'Dec. 2021'}
          name={'Java Programming I & II'}
          description={'cursus'}
          technologies={["java", "javafx"]}
        />
      </ul>
    </div>
  )
}

const CursusLine = (
  {
    year,
    name,
    description,
    technologies
  }: {
  year: string,
  name: string,
  description: string,
  technologies?: Technologies[]
}) => {
  return (
    <li className={cursusStyles.line}>
      <div className={cursusStyles.lineContainer}>
        <div className={cursusStyles.titleContainer}>
          <h3>{year}</h3>
        </div>
        <div className={cursusStyles.contentContainer}>
          <h3>{name}</h3>
          {technologies && <TechnologiesContainer technologies={technologies}/>}
          <p>{description}</p>
        </div>
      </div>
    </li>
)
}