import React from 'react';
import style from "./Contact.module.css"
import Map from "../Map/Map.jsx"

const Contact = () => {
    return (
        <section className={style.contact}>
            <article className={style.left}>
                <form action="">
                    <h2>Contact Me</h2>
                    <input placeholder='Name' type="text" />
                    <input placeholder='Email' type="text" />
                    <textarea placeholder='Write your message' name="" id="" rows={10}></textarea>
                    <button>Send</button>
                </form>
            </article>
            <article className={style.right}>
                <Map />
            </article>
        </section>
    );
}

export default Contact;