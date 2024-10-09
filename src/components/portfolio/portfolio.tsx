import React from 'react'
import Title from '../../shared/title/title';
import { myPortfolio } from '../../constants/portfolio';
import style from './style.module.scss';

const Portfolio = () => {
  return (
    <div>
      <Title type={'h1'} text={'Portfolio'} />
      {myPortfolio.map((portfolio, index) => {
          return (
            <div>
              
              <img className={style.image} src={portfolio.image} alt="" />
              <h2 className={style.title}>{portfolio.name}</h2>
            </div>
          );
        })}
    </div>
  )
}

export default Portfolio
