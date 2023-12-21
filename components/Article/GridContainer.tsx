import articleStyles from './article.module.css'
export const GridContainer = ({children}: {children: React.ReactNode }) => {
  return <div className={articleStyles.cardContainer}>
    {children}
  </div>
}