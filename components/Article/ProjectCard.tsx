import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import articleStyles from './article.module.css'

import React from "react";
import {
  TechnologiesContainer
} from "@/components/Article/TechnologiesContainer";

export const ProjectCard = (
  {
    src,
    alt,
    title,
    link,
    description,
    technologies
  }: {
    src?: StaticImageData,
    alt?: string,
    title: string,
    link?: string,
    description: string,
    technologies?: Technologies[]
  }) => {
  return (
    <div className={articleStyles.card}>
      <div className={articleStyles.cardImageContainer}
      >
        {src &&
          <Image
            sizes="(max-width: 768px) 100vw, 25vw"
            src={src}
            alt={alt!}
            fill={true}
            style={{objectFit: "cover"}}
            className={articleStyles.cardImage}
          />}
      </div>
      <div className={articleStyles.cardContent}>
        <h3
          className={articleStyles.cardTitle}>{title}</h3>
        {technologies && <TechnologiesContainer technologies={technologies}/>}
        <p className={articleStyles.description}>{description}</p>
      </div>
      {link && <div className={articleStyles.linkContainer}>
      <a href={link} target={"_blank"} className={articleStyles.link}>
          Sources
        </a>
      </div>}
    </div>
  )
}
