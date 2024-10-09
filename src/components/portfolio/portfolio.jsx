import Title from '../../shared/title/title';
import { myPortfolio } from '../../constants/portfolio';
import style from './style.module.scss';

const Portfolio = () => {
  return (
    <div>
      <div className="title">
        <Title type={'h1'} text={'Portfolio'} />
      </div>
      <div className={style.list}>
        {myPortfolio.map((portfolio, index) => {
          return (
            <div key={index}>
              <img className={style.image} src={portfolio.image} alt="" />
              <h2 className={style.title}>{portfolio.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
