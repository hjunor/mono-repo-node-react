import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ProtectedRouter from './components/routes/ProtectedRouter';
import ProtectedRouterAdm from './components/routes/ProtectedRouterAdm';
import LoginRouter from './components/routes/LoginRouter';
import { Account } from './pages/Account';
import Arts from './pages/Arts';
import Biography from './pages/Biography';
import CreateArt from './pages/CreateArt';
import { Dash } from './pages/Dash';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

import { UserStorage } from './store/userContext';
import GlobalStyle from './styles/global';
import ArtsAdm from './pages/ArtsAdm';
import BiographyEdit from './pages/Biography/BiographyEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <UserStorage>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <ProtectedRouterAdm path="/dash" element={<Dash />} />
            <ProtectedRouterAdm path="/dash/artes" element={<ArtsAdm />} />
            <Route path="/conta/*" element={<Login />} />

            <LoginRouter path="/account" element={<Account />} />
            <ProtectedRouter path="/conta/criar" element={<CreateArt />} />
            <ProtectedRouter path="/conta/artes" element={<Arts />} />
            <ProtectedRouter path="/conta/biografia" element={<Biography />} />
            <ProtectedRouter
              path="/conta/biografia/editar"
              element={<BiographyEdit />}
            />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
