import { CSSProperties } from 'react';
import style from "./Works.module.css"

const data = [
    "Web Development",
    "Technologies",
    "Logic Code",
    "Hobbies",
    "My Links"
]

const Works = () => {
    return (
        <section className={style.works}>
            <article className={style.left}>
                <ul>
                    {data.map(item =>
                        <li key={item} style={{ '--item-content': `"${item}"` } as CSSProperties}>{item}</li>
                    )}
                </ul>
            </article>
            <article className={style.right}></article>
        </section>
    );
}

export default Works;