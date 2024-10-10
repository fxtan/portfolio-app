
import Button from '../../shared/button/button';
import Title from '../../shared/title/title';
import style from './style.module.scss'
const Contacts = () => {
  return (
   
    <div className={style.wrapper}>
            <div className='title'>
            <Title type={'h1'} text={'Contacts'} />
            <div className={style.content}>
            <p className={style.paragraph}>Want to know more or just chat? You are welcome!</p>
            <Button text={'Send message'}/>
            </div>
            </div>
            
   
    </div>
  )
}

export default Contacts
