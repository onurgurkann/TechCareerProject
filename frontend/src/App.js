//import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      {/*<Routes>
        <Route path='/register' element={<RegisterComponent />} />
      </Routes>*/}
      <FooterComponent />
    </div>
  );
}

export default App;
