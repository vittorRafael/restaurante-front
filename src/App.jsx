import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/partials/Header';
import Footer from './Components/partials/Footer';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Profile from './Components/Pages/Profile';
import { UserStorage } from './Context/UserContext';
import './App.css';
import Requests from './Components/Pages/Requests';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/pedidos/*" element={<Requests />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
