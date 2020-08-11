import React from 'react';
import style from '../common.module.css'
import s from './Projects.module.css'
import ProjectItem from "./ProjectItem/ProjectItem";

function Projects(props: any) {

    return <div>
        <section id='projects'>

            <div className={`${style.container} ${s.projects}`}>
                <div className={s.projectHeader}>
                    <h1 className={style.sectionTitle}>Recent <span>Projects</span></h1>
                </div>
                <div className={s.allProjects}>
                    <ProjectItem projectTitle={'Project 1'} projectSubtitle={'Coding is Love'}
                                 paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                                 'Animi asperiores, cum cumque debitis eligendi, esse expedita in laudantium ' +
                                 'magni, mollitia provident quam rerum tempora. Consequaturearum non veniam voluptas voluptate'}/>
                    <ProjectItem projectTitle={'Project 1'} projectSubtitle={'Coding is Love'}
                                 paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                                 'Animi asperiores, cum cumque debitis eligendi, esse expedita in laudantium ' +
                                 'magni, mollitia provident quam rerum tempora. Consequaturearum non veniam voluptas voluptate'}/>
                    <ProjectItem projectTitle={'Project 1'} projectSubtitle={'Coding is Love'}
                                 paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                                 'Animi asperiores, cum cumque debitis eligendi, esse expedita in laudantium ' +
                                 'magni, mollitia provident quam rerum tempora. Consequaturearum non veniam voluptas voluptate'}/>
                    <ProjectItem projectTitle={'Project 1'} projectSubtitle={'Coding is Love'}
                                 paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                                 'Animi asperiores, cum cumque debitis eligendi, esse expedita in laudantium ' +
                                 'magni, mollitia provident quam rerum tempora. Consequaturearum non veniam voluptas voluptate'}/>
                </div>
            </div>
        </section>
    </div>

}

export default Projects;