import Header from '../Components/Header'
import Banner from '../Components/Banner';
import Tag from '../Components/Tag';
import Content from '../Components/Content';
import Footer from '../Components/Footer';
// import Carousel from '../Components/Carousel';
import { useNavigate } from 'react-router-dom';

function Step1(){
  const navigate = useNavigate();
  return(
    <>
      <Header/>
      <Banner/>
      <Tag/>
      <div id="Step"></div>
      <Content/>
      <button id="next" onClick={
        () => navigate('/step2')
      } style={{transform:'translate(310%)'}}>Next</button>
      <Footer/>
    </>
  )
}

export default Step1;