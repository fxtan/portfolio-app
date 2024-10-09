import style from './style.module.scss';
import Title from '../../shared/title/title';

const AboutMe = () => {
  return (
    <div className={style.item}>
      <div className="title">
        <Title type={'h1'} text={'About me'} />
      </div>
      <div className={style.inner}>
        <p>
          {
            "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it."
          }
        </p>
        <p>{"I'm studying at courses 'Web and mobile design interfaces' in IT-Academy."}</p>
        <p className={style.last}>{"Ready to implement excellent projects with wonderful people"}</p>
      </div>
    </div>
  );
};

export default AboutMe;
