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
          description={'Continuation de ma veille technologique, et divers projets personnels. Découverte de Rust, plusieurs petits projets avec NextJS.'}
          technologies={["typescript", "next", "postgresql", "prisma", "rust"]}
        />
        <CursusLine
          year={'Juil. 2023'}
          name={'Obtention du titre Développeur Web/Web mobile'}
          description={`Titre RNCP de niveau V obtenu après ma préparation à l'école ENI Nantes.`}
        />
        <CursusLine
          year={'Mai 2023'}
          name={'stage - Le temple du Jeu'}
          description={`Refonte d'un portail d'achat, vente et échange de cartes à collectionner d'occasion pour le Temple du Jeu - Nantes.`}
          technologies={["typescript", "vue", "php", "codeigniter", "mariadb", "apache"]}
        />
        <CursusLine
          year={'Nov. 2022'}
          name={'Ecole ENI'}
          description={`Formation de préparation au titre de Développeur web/web mobile. Initiation à la majorité des éléments du développement FullStack et réalisation de petits projets de groupe.`}
          technologies={["javascript", "php", "css", "html", "java", "kotlin", "symfony",]}
        />
        <CursusLine
          year={'Mar. 2022'}
          name={'Fullstack Open'}
          description={'Cursus complet sur le développement web, de frameworks backend/frontend aux principes du test, en passant par une découverte des pipelines de CI/CD.'}
          technologies={["javascript", "typescript", "reactjs", "postgresql", "mongo", "graphql", "docker"]}
        />
        <CursusLine
          year={'Dec. 2021'}
          name={'Java Programming I & II'}
          description={`Initiation à la programmation, d'un niveau débutant à la réalisation d'une application client lourd en JavaFX.`}
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