import Header from "../components/Header";
import styles from '../public/fonts/fonts.module.css'
//import ArticleList from '../components/Articles/ArticleList'

export default function Home({ articles }) {

  return (
      <div>
          <title>Welcome</title>
          <Header />



      </div>

      )
}
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit_=6')
    const articles = await res.json()
    return {
        props: {
            articles
        }
    }
}


