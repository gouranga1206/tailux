
import Step1 from './StudioPage/Step1';
import Step2 from './StudioPage/Step2';
import Step3 from './StudioPage/Step3';
import Step4a from './StudioPage/Step4a';
import Step4b from './StudioPage/Step4b';
import Step5 from './StudioPage/Step5';
import Mens from './StudioPage/Mens';
import {Routes, Route } from 'react-router-dom';

function App(){
  return(
   <>
    <Routes>
      <Route path="/" element={<Step1/>}/>
      <Route path="/step2" element={<Step2/>}/>
      <Route path="/step3" element={<Step3/>}/>
      <Route path="/step4a" element={<Step4a/>}/>
      <Route path="/step4b" element={<Step4b/>}/>
      <Route path="/step5" element={<Step5/>}/>
      <Route path="/mens" element={<Mens/>}/>
    </Routes>
   </>
  )
}

export default App;
