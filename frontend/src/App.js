import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashboard';
import Home from './page/Home';
import AddUserComponent from './component/AddUserComponent';
import ViewUserComponent from './component/ViewUserComponent';
import UpdateUserComponent from './component/UpdateUserComponent';
import NotFound from './component/NotFound';
import Login from './page/Login';
import Register from './page/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Navigate replace to="/404" />} />
        <Route path='/404' element={<NotFound />} />

        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/add-user/_add' element={<AddUserComponent />} />
        <Route path='/dashboard/view-user/:id' element={<ViewUserComponent />} />
        <Route path='/dashboard/update-user/:id' element={<UpdateUserComponent />} />
      </Routes>
    </div>
  );
}

export default App;
