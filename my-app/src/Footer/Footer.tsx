import React from "react";
import style from '../common.module.css'
import s from './Footer.module.css'


function Footer() {
    return <div>
        <section id={s.footer}>

                <div className={`${style.container} ${s.footer}`}>
                <div className={style.brand}>
                    <h1><span>K</span>alinskiy <span>A</span>lex</h1>
                    <h2>Your Complete Web Solution</h2>
                    <div className={s.socialIcon}>
                        <div className={s.socialItem}>
                            <a href="#"></a>
                        </div>
                        <div className={s.socialItem}>
                            <a href="#"></a>
                        </div>
                        <div className={s.socialItem}>
                            <a href="#"></a>
                        </div>
                        <div className={s.socialItem}>
                            <a href="#"></a>
                        </div>
                    </div>
                    <p>Copyright © 2020 Alexander. All rights reserved</p>
                </div>
            </div>
        </section>
    </div>
}

export default Footer