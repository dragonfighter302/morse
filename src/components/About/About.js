import React from 'react';
import s from "./About.module.css";

const About = () => {
    return (
        <div className={s['card']}>
            <h1 className={s['card-title']}>
                <a href="https://en.wikipedia.org/wiki/Morse_code"> .-- . .-.. -.-. --- -- .</a></h1>
        </div>
    )
}

export default About;