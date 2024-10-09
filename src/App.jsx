import AboutMe from './components/aboutMe/aboutMe';
import Contacts from './components/contacts/contacts';
import Header from './components/header/header';
import Portfolio from './components/portfolio/portfolio';
import Profile from './components/profile/profile';
import Skills from './components/skills/skills';
import './global.scss';
import Button from './shared/button/button';
import Container from './shared/container/container';
import Title from './shared/title/title';

function App() {
  return (
    <>
 

      <Container>

{/* 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iste recusandae eaque quis? Odio cupiditate nisi itaque sequi illum deserunt minima, autem aperiam, aspernatur, iusto fugiat ad rem quia repellendus!asdasdas

        <Button text={'Text'}/>
        <Title type={'h1'} text={'поешь говна'} /> */}

        <Header/>
        <Profile/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <Contacts/>
      </Container>
    </>
  );
}

export default App;
