import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import articleStyles from './article.module.css'

import CodeIgniterIcon from '@/public/icons/technologies/codeigniter.svg'
import CSSIcon from '@/public/icons/technologies/css.svg'
import DockerIcon from '@/public/icons/technologies/docker.svg'
import GitlabIcon from '@/public/icons/technologies/gitlab.svg'
import GraphQLIcon from '@/public/icons/technologies/graphql.svg'
import HTMLIcon from '@/public/icons/technologies/html.svg'
import JavaIcon from '@/public/icons/technologies/java.svg'
import JavascriptIcon from '@/public/icons/technologies/javascript.svg'
import JestIcon from '@/public/icons/technologies/jest.svg'
import KotlinIcon from '@/public/icons/technologies/kotlin.svg'
import MariaDBIcon from '@/public/icons/technologies/mariadb.svg'
import MongoIcon from '@/public/icons/technologies/mongo.svg'
import NextIcon from '@/public/icons/technologies/next.svg'
import PHPIcon from '@/public/icons/technologies/php.svg'
import PostCSSIcon from '@/public/icons/technologies/postcss.svg'
import PostgreSQLIcon from "@/public/icons/technologies/postgresql.svg"
import PrismaIcon from '@/public/icons/technologies/prisma.svg'
import ReactIcon from '@/public/icons/technologies/reactjs.svg'
import SymfonyIcon from '@/public/icons/technologies/symfony.svg'
import TypescriptIcon from '@/public/icons/technologies/typescript.svg'
import ViteIcon from '@/public/icons/technologies/vite.svg'
import VueIcon from '@/public/icons/technologies/vue.svg'
import WebpackIcon from '@/public/icons/technologies/webpack.svg'
import DefaultIcon from "@/public/icons/technologies/default_file.svg"
import React, {ReactElement} from "react";

export const ProjectCard = (
  {
    src,
    alt,
    title,
    link,
    description,
    technologies
  }: {
    src: StaticImageData,
    alt: string,
    title: string,
    link: string,
    description: string,
    technologies?: Technologies[]
  }) => {
  return (
    <div className={articleStyles.card}>
      <div
        className={articleStyles.cardImageContainer}
      >
        <Image
          sizes="(max-width: 768px) 640px, 300px "
          src={src}
          alt={alt}
          fill={true}
          style={{objectFit: "cover"}}
          className={articleStyles.cardImage}
        />
      </div>
      <div className={articleStyles.cardContent}>
        <h3 className={`${articleStyles.cardTitle}`}>{title}</h3>
        {technologies && <TechnologiesContainer technologies={technologies}/>}
        <p>{description}</p>
        <Link href={link} className={articleStyles.link}>
          Lien
        </Link>
      </div>
    </div>
  )
}

//

const TechnologiesContainer = ({technologies}: {
  technologies: Technologies[]
}) => {
  return (
    <fieldset className={articleStyles.techContainer}>
      <legend>Stack</legend>
      {technologies.map((techString) => {
        return getIconFromName(techString)
      })}
    </fieldset>
  )
}

const getIconFromName = (name: Technologies): ReactElement => {
  const selector = () => {
    switch (name) {
      case "codeigniter":
        return <CodeIgniterIcon/>
      case "css":
        return <CSSIcon/>
      case "docker":
        return <DockerIcon/>
      case "gitlab":
        return <GitlabIcon/>
      case "graphql":
        return <GraphQLIcon/>
      case "html":
        return <HTMLIcon/>
      case "java":
        return <JavaIcon/>
      case "javascript":
        return <JavascriptIcon/>
      case "jest":
        return <JestIcon/>
      case "kotlin":
        return <KotlinIcon/>
      case "mariadb":
        return <MariaDBIcon/>
      case "mongo":
        return <MongoIcon/>
      case "next":
        return <NextIcon/>
      case "php":
        return <PHPIcon/>
      case "postcss":
        return <PostCSSIcon/>
      case "postgresql":
        return <PostgreSQLIcon/>
      case "prisma":
        return <PrismaIcon/>
      case "reactjs":
        return <ReactIcon/>
      case "symfony":
        return <SymfonyIcon/>
      case "typescript":
        return <TypescriptIcon/>
      case "vite":
        return <ViteIcon/>
      case "vue":
        return <VueIcon/>
      case "webpack":
        return <WebpackIcon/>
      default:
        return <DefaultIcon/>
    }
  }
  return React.cloneElement(selector(), {
    className: articleStyles.icon,
    key: name
  })
}