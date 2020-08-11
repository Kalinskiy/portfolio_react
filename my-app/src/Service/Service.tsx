import React from 'react';
import style from '../common.module.css'
import s from './Service.module.css'
import ServiceItem from "./ServiceItem/ServiceItem";

function Service() {

    return <div>
        <section id='services'>

                <div className={`${style.container} ${s.services}`}>
                <div className={s.serviceTop}>
                    <h1 className={style.sectionTitle}>Serv<span>i</span>ces</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam asperiores, dicta eligendi
                        esse
                        excepturi facilis illo ipsum iusto laborum nihil quisquam repudiandae saepe similique soluta,
                        unde
                        veritatis! Cumque dolor laboriosam minus, non numquam officia omnisor sit amet, consectetur
                        adipisicing
                        elit. A aperiam asperiores, dicta eligendi esse
                        excepturi facilis illo ipsum iusto laborum nihil quisquam repudiandae saepe similique soluta,
                        unde
                        veritatis! Cumque dolor laboriosam minus, non nprovident</p>
                </div>
                    <div className={s.serviceBottom}>
                     <ServiceItem paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, neque.'} titleName={'Web Design'}/>
                     <ServiceItem paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, neque.'} titleName={'Web Design'}/>
                     <ServiceItem paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, neque.'} titleName={'Web Design'}/>
                     <ServiceItem paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, neque.'} titleName={'Web Design'}/>

                </div>
            </div>
        </section>
    </div>

}

export default Service;