import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import NavBar from './components/NavBar'
import Register from './components/Registration'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import MyInventory from './components/MyInventory';
import AllInventory from './components/AllInventory';
import AddNewItem from './components/AddNewItem';
import SelectedItem from './components/SelectedItem';
import { AuthProvider } from './components/LoginContext';

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/MyInventory" element={<MyInventory />} />
        <Route path="/AllInventory" element={<AllInventory />} />
        <Route path="/AddNewItem" element={<AddNewItem />} />
        <Route path="/SelectedItem/:id" element={<SelectedItem />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
