import articleStyles from './article.module.css'

export const Article = (
  {
    children
  }: {
    className?: string,
    id?: string,
    children?: React.ReactNode
  }) => {
  return (
    <article className={articleStyles.article}>
      {children}
    </article>
  )
}