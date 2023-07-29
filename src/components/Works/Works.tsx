import React from 'react';
import { CSSProperties } from 'react';
import style from "./Works.module.css"
import Web_development from './Web_development/Web_development';
import Technologies from './Technologies/Technologies';
import Code_logic from './Code_logic/Code_logic';
import Hobbies from './Hobbies/Hobbies';
import My_links from './My_links/My_links';

const data = [
    "Web Development",
    "Technologies",
    "Code Logic",
    "Hobbies",
    "My Links"
]

interface ComponentMap {
    [key: string]: React.FC;
}

const componentMap: ComponentMap = {
    "Web Development": Web_development,
    "Technologies": Technologies,
    "Code Logic": Code_logic,
    "Hobbies": Hobbies,
    "My Links": My_links
};

const Works = () => {
    const [work, setWork] = React.useState("Web Development")
    const RenderComponent = componentMap[work];

    return (
        <section className={style.works}>
            <article className={style.left}>
                <ul>
                    {data.map(item =>
                        <li
                            key={item}
                            style={{ '--item-content': `"${item}"` } as CSSProperties}
                            onClick={() => setWork(item)}
                        >
                            {item}
                        </li>
                    )}
                </ul>
            </article>
            <article className={style.right}>
                <RenderComponent />
            </article>
        </section>
    );
}

export default Works;