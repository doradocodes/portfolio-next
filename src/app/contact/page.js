'use client'

import styles from "./page.module.css";
import {useState} from "react";

export default function ContactPage() {
    const [formMessage, setFormMessage] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        await fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        });
        // Success and error handling ...
        setFormMessage('Message sent');
    };

    return <div className="page">
        <h2>Contact me</h2>
        <div className={styles.content}>
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

        <form className={styles.form} onSubmit={handleFormSubmit} name="contact">
            <div className={styles.formRow}>
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
            </div>
            <div className={styles.formRow}v>
                <label>
                    Email
                </label>
                <input type="email" name="email" placeholder="Enter your email address" required/>
            </div>
            <div className={styles.formRow}>
                <label>
                    Message
                </label>
                <textarea rows={10} name="message" placeholder="Enter your message" required/>
            </div>
            <p>{formMessage}</p>
            <button type="submit">Send</button>
        </form>
    </div>
}
