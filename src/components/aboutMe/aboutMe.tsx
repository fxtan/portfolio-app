import React from 'react'
import style from './style.module.scss';
import Title from '../../shared/title/title';


const AboutMe = () => {
  return (
    <div className={style.item}>
    <div className={style.title}>
    <Title type={'h1'} text={'About me'} />
     <div className={style.inner}>Hi, I'm Denis – UX/UI designer from Minsk. <br /> I'm interested in design and everything connected with it. <br /> <br/> I'm studying at courses "Web and mobile design 
     <br /> interfaces" in IT-Academy. <br /> <br /> Ready to implement excellent projects
    <br /> with wonderful people.</div>
    </div>
   </div>
  )
}

export default AboutMe
