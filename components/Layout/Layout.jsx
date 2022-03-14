import Nav from '../Navigation/Nav'
import styles from './Layout.module.scss'
const Layout = ({children}) => {
    return (
        <>
            <Nav/>
        <div className={styles.container}>
            <main className={styles.main}>

                {children}</main>
        </div>
        </>
    )
}
export default Layout