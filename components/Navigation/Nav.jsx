import Link from "next/link";
import navStyles from './nav.module.css'
import Navlinks from "./navLinks";

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <Navlinks />
        </nav>
    )
}
export default Nav