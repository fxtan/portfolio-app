import style from './style.module.scss';

const Profile = () => {
  return (
    <div className={style.item}>
      <div className={style.top}>
        <h1 className={style.title}>
          Denis <br /> Novik
        </h1>
        <h2 className={style.info}>
          UX | UI designer <br /> 24 years old, Minsk
        </h2>
        <div className={style.languages}>

        <p className={`${style.language} ${style.active}`}>RU</p>
        <span>|</span>
        <p className={style.language}>ENG</p>

        </div>

      </div>
      <div className={style.image}>
        <img src="src\assets\portfolio1.jpg" alt="Denis Novik" />
      </div>
    </div>
  );
};

export default Profile;
