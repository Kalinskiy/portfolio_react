import React from 'react';
import s from './ContactItem.module.css'


type propsType ={
    communications:string
    firstWay:string
    secondWay?:string
}

function ContactItem(props: propsType) {

    return <>

        <div className={s.contactItem}>
            <div className={s.icon}><img src="https://img.icons8.com/bubbles/50/000000/phone.png"/></div>
            <div className={s.contactInfo}>
                <h3>{props.communications}</h3>
                <h4>{props.firstWay}</h4>
                <h4>{props.secondWay}</h4>

            </div>
        </div>
    </>

}

export default ContactItem;