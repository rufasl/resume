import headerStyles from './Header.module.scss'
import BtnStyles from "../Button/button.module.css";

export default function Header() {
    return (
        <div className={headerStyles.fontName}>
            <title>Blog</title>
            <meta name='keywords' content='web development, programming, e-commerce'></meta>
            <div>
                <p className={headerStyles.heading}>Rufas Legeckas,</p>
                <p className={headerStyles.heading2}>Project manager / Team Lead</p>
                <p className={headerStyles.descriptionText}>This website is done on Next.js from scratch by me</p>
                <form action='/about'>
                    <button type="submit" className={BtnStyles.button}><span>Resume</span></button>
                </form>
            </div>
        </div>
    )
}