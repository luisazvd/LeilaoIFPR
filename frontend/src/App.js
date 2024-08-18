import './App.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import Recover from './pages/recover/Recover';
import Register from './pages/register/Register';
import AlterPassword from './pages/alterpassword/AlterPassword';

function App() {
  return (
   <>
    {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>}/>
          <Route path='/recover' element={<SimpleLayout><Recover/></SimpleLayout>} />
          <Route path='/register' element={<SimpleLayout><Register/></SimpleLayout>} />
          <Route path='/alterpassword' element={<SimpleLayout><AlterPassword /></SimpleLayout>} />


        </Routes>
      </BrowserRouter>
    {/* <Footer/> */}
   </>
  );
}

export default App;
