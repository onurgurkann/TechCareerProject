import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashboard';
import Home from './page/Home';
import ListUserComponent from './component/ListUserComponent';
import AddUserComponent from './component/AddUserComponent';
import ViewUserComponent from './component/ViewUserComponent';
import UpdateUserComponent from './component/UpdateUserComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/dashboard/users' element={<ListUserComponent/>}/>
        <Route path='/dashboard/users/add-user' element={<AddUserComponent/>}/>
        <Route path='/dashboard/users/view-user/:id' element={<ViewUserComponent/>}/>
        <Route path='/dashboard/users/update-user/:id' element={<UpdateUserComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
