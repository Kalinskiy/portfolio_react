import React from 'react';
import style from '../common.module.css'
import s from './Contact.module.css'
import ContactItem from "./ContactItem/ContactItem";

function Contact(props:any) {

    return <>
        <section id='contact'>

                <div className={`${style.container} ${s.contact}`}>
                <div><h1 className={style.sectionTitle}>Contact <span>info</span></h1></div>
                <div className={s.contactItems}>

                    <ContactItem communications={'Phone'} firstWay={'+38 050 810 80 19'} secondWay={'+38 050 810 80 19'}/>
                    <ContactItem communications={'Email'} firstWay={'kalinskiy.sasha@gmail.com'} secondWay={'sasha.kalinskiy@yandex.ru'}/>
                    <ContactItem communications={'Address'} firstWay={'Ukraine, Luhansk'}/>

                </div>

            </div>
        </section>
    </>

}

export default Contact;