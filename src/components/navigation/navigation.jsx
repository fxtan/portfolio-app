
import style from './style.module.scss';
import { navItems } from '../../constants/nav';

const Navigation = () => {
  return (
    <nav className={''}>
      <ul className={style.navList}>
        {navItems.map((elem, index) => { 
            return(<li key={index} className={style.item}>
                <a>
                    {elem.name}
                </a>
            </li>)
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
