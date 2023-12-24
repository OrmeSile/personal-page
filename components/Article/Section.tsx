import articleStyles from './article.module.css'
import {Josefin_Sans} from "next/font/google";
export const Section = (
  {
    id,
    title,
    description,
    children,
  }: {
    id: string,
    title?: string,
    description?: string,
    children?: React.ReactNode,
  }) => {
  return (
    <section  className={articleStyles.section}>
      <div id={id} style={{position: 'relative', top: '-150px'}}></div>
      <div className={articleStyles.descriptionContainer}>
        {title && <h2 className={articleStyles.title}>{title}</h2>}
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  )
}