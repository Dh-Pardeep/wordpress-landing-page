import './App.css';
import './Root.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeroSection from './components/HeroSection';
import Featured from './components/Featured';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Integer from './components/Integer';
import AllVipeStudio from './components/AllVipeStudio';
import LongTerm from './components/LongTerm';
import AgileWordPress from './components/AgileWordPress';
import TeamStar from './components/TeamStar';
import SuccessGuide from './components/SuccessGuide';
import MyFooter from './components/common/MyFooter';
import BackToTop from './components/common/BackToTop';
import LoaderHome from './components/common/LoaderHome';
function App() {
  return (
   <div>
    <BackToTop/>
    <LoaderHome/>
    <HeroSection/>   
    <Featured/> 
    <Integer/>
    <AllVipeStudio/>
    <LongTerm/>
    <AgileWordPress/>
    <TeamStar/>
    <SuccessGuide/>
    <MyFooter/>
   </div>
  );
}

export default App;
