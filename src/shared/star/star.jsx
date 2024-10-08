import star from '../../assets/Star.svg';
import style from './style.module.scss';

const Star = ({ allStars, starCount }) => {
  return (
    <div className={style.starsContainer}>
      {new Array(allStars).fill(star).map((starImage, index) => {
        console.log(index, 'INDEX');
        return (
          <img
            key={index}
            src={starImage}
            alt="star"
            className={`${index >= starCount ? style.grey : ''} `}
          />
        );
      })}
    </div>
  );
};

export default Star;
