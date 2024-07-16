import styles from "./page.module.css";

export default function ContactPage() {
    return <div className="page">
        <h2>Contact me</h2>
        <div className="content">
            <p>
                Instagram: <a target="_blank" href="https://www.instagram.com/doraymee/?hl=en">@doraymee</a>
            </p>
            <p>
                LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/dorathiendo/">Dora Do</a>
            </p>
            <p>
                Email: <a href="mailto:doradocodes@gmail.com">doradocodes@gmail.com</a>
            </p>
        </div>

        {/*<form className={styles.form} netlify>*/}
        {/*    <label>*/}
        {/*        Name*/}
        {/*        <input type="text" name="name" required/>*/}
        {/*    </label>*/}
        {/*    <label>*/}
        {/*        Email*/}
        {/*        <input type="email" name="email" required/>*/}
        {/*    </label>*/}
        {/*    <label>*/}
        {/*        Message*/}
        {/*        <textarea name="message" required/>*/}
        {/*    </label>*/}
        {/*    <button type="submit">Send</button>*/}
        {/*</form>*/}
    </div>
}
