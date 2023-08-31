import './App.css';
import './Root.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeroSection from './components/HeroSection';
import Featured from './components/Featured';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Integer from './components/Integer';
import AllVipeStudio from './components/AllVipeStudio';
function App() {
  return (
   <div>
    <HeroSection/>   
    <Featured/> 
    <Integer/>
    <AllVipeStudio/>
   </div>
  );
}

export default App;
