import Link from "next/link";
import navStyles from './nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>Resume</Link>
                </li>
                <li>
                    <Link href='/contacts'>Contact</Link>
                </li>
                <li>
                    <Link href='https://github.com/rufasl/resume' >GitHub</Link>
                </li>
            </ul>

        </nav>
    )
}
export default Nav