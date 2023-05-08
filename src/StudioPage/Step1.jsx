import Header from '../Components/Header'
import Banner from '../Components/Banner';
import Tag from '../Components/Tag';
import Content from '../Components/Content';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import './Studio.css';


function Step1(){
  const navigate = useNavigate();
  return(
    <div id='Step-All-StudioPage'>
      <Header/>
      <Banner/>
      <Tag/>
      <div id="StudioPage-Step-1"></div>
      <Content/>
      <div className="Buttons">
      <button id="next" onClick={
        () => navigate('/step2')
      }>Next</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Step1;