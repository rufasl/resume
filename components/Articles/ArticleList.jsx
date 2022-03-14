import articleStyles from './Article.module.scss'
const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map(articles => <h3>{articles.title}</h3>)}
        </div>
    )
}