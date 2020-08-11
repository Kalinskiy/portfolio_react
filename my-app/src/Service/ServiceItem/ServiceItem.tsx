import React from 'react';
import s from './ServiceItem.module.css'


type propsType = {
    titleName:string
    paragraph:string
}
function ServiceItem(props: propsType) {

    return <div>

        <div className={s.serviceItem}>
            <div className={s.icon}><img src="https://img.icons8.com/bubbles/50/000000/services.png"/></div>
            <h2>{props.titleName}</h2>
            <p>{props.paragraph}</p>
        </div>


    </div>

}

export default ServiceItem;