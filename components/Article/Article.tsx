import articleStyles from './article.module.css'

export const Article = (
  {
    className,
    children
  }: {
    className?: string,
    children?: React.ReactNode
  }) => {
  return (
    <article className={`${articleStyles.article} ${className && className}`}>
      {children}
    </article>
  )
}