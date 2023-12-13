import articleStyles from './article.module.css'
export const Section = (
  {
    id,
    title,
    children,
  }: {
    id: string,
    title: string,
    children?: React.ReactNode,
  }) => {
  return (
    <section id={id} className={articleStyles.section}>
      <h2 className={articleStyles.title}>{title}</h2>
      {children}
    </section>
  )
}