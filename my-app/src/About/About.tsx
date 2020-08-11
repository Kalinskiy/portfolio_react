import React from 'react';
import style from '../common.module.css'
import s from './About.module.css'
import man from '../img/img-2.png'
function About(props: any) {

    return <div>
        <section id='about'>

                <div className={`${style.container} ${s.about}`}>
                <div className={s.colLeft}>
                    <div className={s.aboutImg}>
                        <img src={man} alt=""/>
                    </div>
                </div>
                <div className={s.colRight}>
                    <h1 className={style.sectionTitle}>About <span>Me</span></h1>
                    <h2>Front-End Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, blanditiis deleniti dicta ea eius,
                        expedita
                        facere illum maxime neque non, optio saepe tempore temporibus ullam voluptas voluptates
                        voluptatibus!
                        Asperiores aspernatur eligendi eveniet id mollitia perferendis ratione, repudiandae sapiente
                        tempora
                        voluptatem. Aperiam commodi earum enim ipsa iusto, nihil possimus qui quidem.</p>
                    <a href="#" className={`${style.cta} ${s.blackText}` }>Download Resume</a>
                </div>
            </div>
        </section>
    </div>

}

export default About;