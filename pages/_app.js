import Layout from "../components/Layout/Layout";
import '../styles/globals.css'
import '../public/fonts/fonts.module.css'
import styleCSS from '../components/Button/button.module.css'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />

      </Layout>
  )

}

export default MyApp
