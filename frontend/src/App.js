import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashboard';
import Home from './page/Home';
import ListUserComponent from './component/ListUserComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/dashboard/users' element={<ListUserComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
