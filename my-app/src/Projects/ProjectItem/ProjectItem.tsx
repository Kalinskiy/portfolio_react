import React from 'react';
import s from './ProjectItem.module.css'
import projectImage from "../../img/img-1.png";


type propsType = {
    projectTitle: string
    projectSubtitle: string
    paragraph: string
}

function ProjectItem(props: propsType) {

    return <>
        <div className={s.projectItem}>
            <div className={s.projectInfo}>
                <h3>{props.projectTitle}</h3>
                <h4>{props.projectSubtitle}</h4>
                <p>{props.paragraph}</p>
            </div>
            <div className={s.projectImg}>
                <img src={projectImage} alt="img"/>
            </div>
        </div>
    </>

}

export default ProjectItem;