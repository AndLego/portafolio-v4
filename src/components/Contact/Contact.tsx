import React, { FormEvent } from 'react';
import style from "./Contact.module.css"
import Map from "../Map/Map.jsx"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [success, setSuccess] = React.useState(false)
    const ref = React.useRef<HTMLFormElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (ref.current) {
            emailjs.sendForm('service_mbuj46q', 'template_9dpo8sa', ref.current, '5hrYs6EDaOtWnu2XP')
                .then((result) => {
                    console.log(result.text);
                    setSuccess(true)
                }, (error) => {
                    console.log(error.text);
                    setSuccess(false)
                });
        }
    }

    return (
        <section className={style.contact}>
            <article className={style.left}>
                <form ref={ref} onSubmit={handleSubmit}>
                    <h2>Contact Me</h2>
                    <input placeholder='Name' type="text" name="name" />
                    <input placeholder='Email' type="text" name="email" />
                    <textarea placeholder='Write your message' name="message" id="" rows={10}></textarea>
                    <button type='submit'>Send</button>
                    {success &&
                        "Your message has been sent. I'll get back to you soon :)"
                    }
                </form>
            </article>
            <article className={style.right}>
                <Map />
            </article>
        </section>
    );
}

export default Contact;