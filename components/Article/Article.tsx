import articleStyles from './article.module.css'

export const Article = (
  {
    children
  }: {
    children?: React.ReactNode
  }) => {
  return (
    <article className={articleStyles.article}>
      {children}
    </article>
  )
}