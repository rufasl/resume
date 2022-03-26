import aboutStyles from '../components/About/About.module.scss'

export default function About() {
    return (
        <div>
            <title>Who is this guy? - Resume</title>
            <div>
                <div className={aboutStyles.center}>
                    <h2>Hey, you clicked, I should get some analytics traffic.</h2>
                </div>
                <p>I am Rufas Legeckas, currently from Panevėžys city, Lithuania.</p>
                <h3>Skill tree:</h3>
                <ul>
                    <li>Team Lead for a development team of 10 and the monthly personal and team goals and results, invoices</li>
                    <li>Project manager developing Magento 2 webshops and WordPress websites - <strong>5 years at Creation Labs (UAB Elsoft)</strong></li>
                    <li><i>Obviously</i> insane programming skills as you can see from this website - <i>website is built on <strong>Next.js/Node.js</strong> frameworks</i> <strong>bachelors in Computer Science 2017, Panevėžys</strong></li>
                    <li>Wit and English skills - <strong>in communication with partners abroad</strong></li>
                    <li>I speak fluent in nerd, meaining communication with the programmers is easy</li>
                    <li>Tend to think I can do everything in life, except for maybe making this page look appealing, <i>apparently</i></li>
                </ul>
                <h3>Experience</h3>
                <ul>
                <li>Team Lead responsability - growth/competence evaluations held quarterly, discussing growth and making decisions if the developer/manager/tester is ready to level up. Daily meetings, discussing technical decisions, support for colleagues etc.</li>
                <li>Writing project documentations and making project estimations as project manager, so that the terms and agreements make sense to client and developer</li>
                <li>Monitoring team performance hours spent/billed to client, adjusting workflow and making employment decisions</li>
                <li>Working with <a href="https://juist.nl/">development partners abroad</a> and managing the team working on Magento 2 support/Wordpress/Testing</li>
                <li>Adjusting quality assurance procedures, programmers procedures and implementing change, fixing and implementing procedures, assigning responsabilities to the team</li>
                </ul>
                <h3>Projects</h3>
                <ul>
                <li><a href="https://lemodus.lt">Lemodus.lt</a> Responsible for technical decisions and management for custom design project Magento 2 webshop with integrations with clients resources, custom functionality.</li>
                <li><a href="https://www.leatherlook.nl/">Leatherlook project</a> custom desingn made on Magento 2, working with outsourced developers and assigning tasks, managing budget etc.</li>
                <li>Many other Magento 1 and 2, WordPress projects and support</li>
                </ul>
                <div>
                    <h3>Goals</h3>
                    <ul>
                        <li>Get a gym membership</li>
                        <li className={aboutStyles.level2}>Actually attend the gym</li>
                        <li>Learn more headless programming and Next.js/Node.js by developing this website</li>
                        <li className={aboutStyles.level2}>Develop a blog page and write posts</li>
                        <li className={aboutStyles.level2}>Learn more about anaytics while monitoring the blog results</li>
                        <li>Find a workplace I can vibe with and learn more geeky stuff</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}