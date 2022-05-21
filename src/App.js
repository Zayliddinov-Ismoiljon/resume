
import './App.css';
import ResumeAbout from './Component/ResumeAbout/ResumeAbout';
import ResumeAdress from './Component/ResumeAdress/ResumeAdress';

function App() {
  return (
    <div className='resume'>
      <ResumeAdress/>
      <ResumeAbout/>
    </div>
  );
}

export default App;
