import articleStyles from './article.module.css'
export const GridContainer = ({rows, children}: { rows: number, children: React.ReactNode }) => {
  return <div className={articleStyles.cardContainer}>
    {children}
  </div>
}