import React from 'react';
import Title from '../../shared/title/title';
import style from './style.module.scss';
import { mySkills } from '../../constants/skills';
import Star from '../../shared/star/star';

const Skills = () => {
  return (
    <div className={style.wrapper}>
      <Title type={'h1'} text={'Skills'} />
      <h4 className={style.title}>I work in such programs as</h4>
      <div className={style.content}>
        {mySkills.map((skill, index) => {
          return (
            <div className={style.inner}>
              <img src={skill.imageUrl} alt="Figma" />
              <p className={style.skillName}>{skill.name}</p>
              <Star allStars={5} starCount={skill.stars} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
