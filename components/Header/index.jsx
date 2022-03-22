import headerStyles from './Header.module.scss'
import BtnStyles from "../Button/button.module.css";

export default function Header() {
    return (
        <div className={headerStyles.fontName}>
          <title>Welcome - Home</title>
            <meta name='keywords' content='web development, programming, e-commerce'></meta>
            <div>
                <div className={headerStyles.image}>
                    <a href="/about"><img src='https://media-exp1.licdn.com/dms/image/C4D03AQGMxkjXHcUITA/profile-displayphoto-shrink_800_800/0/1630486542215?e=1652918400&v=beta&t=iAKhGvnKydInRUtVp3XBjQivI_NkQ-65aVfZGPUR-cw'/></a>
                </div>
                <p className={headerStyles.heading}>Rufas Legeckas,</p>
                <p className={headerStyles.heading2}>Project manager / Team Lead</p>
                <p className={headerStyles.descriptionText}>This website is done on Next.js from scratch by me, <i>sorry had to flex</i></p>
                <form action='/about'>
                    <button type="submit" className={BtnStyles.button}><span>Resume</span></button>
                </form>
            </div>
        </div>
    )
}