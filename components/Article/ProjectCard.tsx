import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import articleStyles from './article.module.css'

export const ProjectCard = (
  {
    src,
    alt,
    title,
    link,
    description
  }: {
    src: StaticImageData,
    alt: string,
    title: string,
    link: string,
    description: string
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
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link}>
        Lien
      </Link>
      </div>
    </div>
  )
}

const technologiesContainer = ({technologies} : {technologies: string[]}) => {

}