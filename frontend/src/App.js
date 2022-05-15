//import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import FooterComponent from './component/FooterComponent';
//import HeaderComponent from './component/HeaderComponent';
import HomeComponent from './component/HomeComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeComponent/>} />
      </Routes>
      {/*<Routes>
        <Route path='/register' element={<RegisterComponent />} />
      </Routes>*/}
    </div>
  );
}

export default App;
