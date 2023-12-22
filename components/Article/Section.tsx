import articleStyles from './article.module.css'
import {Josefin_Sans} from "next/font/google";
const josefinSans = Josefin_Sans({subsets: ['latin']})
export const Section = (
  {
    id,
    title,
    description,
    children,
  }: {
    id: string,
    title: string,
    description?: string,
    children?: React.ReactNode,
  }) => {
  return (
    <section id={id} className={articleStyles.section}>
      <div className={articleStyles.descriptionContainer}>
      <h2 className={`${articleStyles.title} ${josefinSans.className}`}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  )
}