import React from 'react';
import style from '../common.module.css'
import s from './Hero.module.css'

function Hero(props: any) {

    return <>
        <section id='hero'>
                <div className={`${style.container} ${s.hero}`}>
                <div className={s.containerText}>
                    <h1>Hello, <span></span></h1>
                    <h1>My name is <span></span></h1>
                    <h1>Alexander <span></span></h1>
                    <a href="#projects" type="button" className={style.cta}> Portfolio</a>
                </div>
            </div>
        </section>
    </>

}

export default Hero;