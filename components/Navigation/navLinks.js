import Link from "next/link";

const Navlinks = () => {
    return (
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
        <Link href='https://github.com/rufasl/resume'>GitHub</Link>
    </li>
    </ul>
    );
}
export default Navlinks;