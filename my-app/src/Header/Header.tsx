import React, {useEffect, useState} from 'react';
import style from '../common.module.css'
import s from './Header.module.css'
import hero from '../Hero/Hero.module.css'
import services from '../Service/Service.module.css'
import projects from '../Projects/Projects.module.css'
import about from '../About/About.module.css'
import contact from '../Contact/Contact.module.css'


function Header(props: any) {

    const [windowScroll, setWindowScroll] = useState(window.scrollY)

    const scrollDown = () => {
        setWindowScroll(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollDown)

        return () => {
            window.removeEventListener('scroll', scrollDown)
        }
    }, [])

    const [hamburger, setHamburger] = useState(false)


    const getBurger = ()=>{

        setHamburger(!hamburger);

    }

    return <>

        <section id={s.header} className={windowScroll > 250 ? s.headerScrolled : ''}>
            <div className={`${style.container} ${s.header}`}>
                <div className={s.navBar}>
                    <div className={style.brand}>
                        <a href={hero.hero}>
                            <h1><span>A</span>lexander <span>K</span>alinskiy</h1>
                        </a>
                    </div>
                    <div className={s.navList}>
                        <div className={hamburger? s.hamburger + ' ' + s.active: s.hamburger} onClick={getBurger}>
                            <div className={s.bar}></div>
                        </div>
                        <ul onClick={getBurger} className={hamburger? s.active: ''} >
                            <li><a href='#hero' data-after="Home">Home</a></li>
                            <li><a href='#services' data-after="Services">Services</a></li>
                            <li><a href='#projects' data-after="Projects">Projects</a></li>
                            <li><a href='#about' data-after="About">About</a></li>
                            <li><a href='#contact' data-after="Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>

}

export default Header;