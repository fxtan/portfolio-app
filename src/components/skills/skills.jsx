import Title from '../../shared/title/title';
import style from './style.module.scss';
import { mySkills } from '../../constants/skills';
import Star from '../../shared/star/star';

const Skills = () => {
  return (
    <div className={style.wrapper}>
      <div className="title">
        <Title type={'h1'} text={'Skills'} />
      </div>
      <h4 className={style.title}>I work in such programs as</h4>
      <div className={style.content}>
        {mySkills.map((skill, index) => {
          return (
            <div key={index} className={style.inner}>
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
