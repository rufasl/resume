import contactStyles from './Contacts.module.scss'
import BtnStyles from '../Button/button.module.css'
const Contacts = () => {
    return (
        <div>
            <title>Contacts</title>
            <h1>Let me know what you think</h1>
            <div>
                {/*start of the contacts form*/}
                <form action="api/form" method="post" >
                    <input
                        type="text"
                        id="first"
                        name="first"
                        required
                        minLength="3"
                        maxLength="10"
                        placeholder="First name"
                        placeholder="First name"
                    />
                    <br />
                    <input
                        type="text"
                        id="last"
                        name="last"
                        required
                        minLength="3"
                        maxLength="20"
                        placeholder="Last name"
                    />
                    <br />
                    <textarea name="message" placeholder="Enter your message..." className={contactStyles.textarea} required></textarea>
                    <br/>
                    <button type="submit" className={BtnStyles.button}><span>Mail it</span></button>
                </form>
            </div>
            <div>
                <p>You can also contact me through my <a href="mailto:legeckasrufas@gmail.com" className={contactStyles.a}>email</a> or by <a href="phone:+37068974721" className={contactStyles.a}>phone</a></p>
            </div>
        </div>
        )
}
export default Contacts;