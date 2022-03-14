import aboutStyles from '../components/About/About.module.scss'

export default function About() {
    return (
        <div>
            <title>Who is this guy?</title>
            <div>
                <h1>Nice, you clicked, I should get some analytics traffic.</h1>
                <div>
                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQGMxkjXHcUITA/profile-displayphoto-shrink_800_800/0/1630486542215?e=1652918400&v=beta&t=iAKhGvnKydInRUtVp3XBjQivI_NkQ-65aVfZGPUR-cw'/>
                </div>
                <h2>Hi,</h2>
                <h2>My name is Rufas.</h2>
                <h3>Skill tree:</h3>
                <ul>
                    <li>Obviously insane programming skills as you can see from this website - <strong>bachelors in Computer Science</strong></li>
                    <li>Project management experience developing Magento 2 webshops and WordPress websites - <strong>5 years at Creation Labs (UAB Elsoft)</strong></li>
                    <li>Responsible as a Team Lead for a development team of 10 and their monthly personal and team goals, personal and team results, invoices</li>
                    <li>Wit and English skills - <strong>in communication with partners abroad</strong></li>
                    <li>Great looks - <strong>should probably workout though</strong></li>
                    <li>Tends to think he can do almost everything in this life, except for maybe making this page look appealing</li>
                    <li>Level 99 magic</li>
                </ul>
                <h3>Projects</h3>
                <ul>
                    <li><a href='https://lemodus.lt'>Lemodus.lt Magento 2 webshop with integrations with clients resources, custom functionality</a></li>
                    <li>Many WordPress projects</li>
                </ul>
                <div>
                    <h3>Goals</h3>
                    <p>I consider myself a goal oriented person, so I tend to make goals and work toward them.</p>
                    <p>The goals now are as follows:</p>
                    <ul>
                        <li>Make blog content and publish the page</li>
                        <li>Get a gym membership</li>
                        <li className={aboutStyles.level2}>Actually attend the gym</li>
                        <li>Learn React/Next.js by developing this website</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}