import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import articleStyles from './article.module.css'

export const ProjectCard = (
  {
    src,
    alt,
    title,
    link,
    children
  }: {
    src: StaticImageData,
    alt: string,
    title: string,
    link: string,
    children: React.ReactNode
  }) => {
  return (
    <div className={articleStyles.card}>
      <div
        className={articleStyles.cardImageContainer}
      >
        <Image
          src={src}
          alt={alt}
          fill={true}
          style={{objectFit: "cover"}}
          className={articleStyles.cardImage}
        />
      </div>
      <section>
        <h2>{title}</h2>
        {children}
        <Link href={link}>
          Lien
        </Link>
      </section>
    </div>
  )
}