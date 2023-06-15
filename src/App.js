import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from './register/Register'
import {Get} from './views/Get'
import logo from './logo.svg';
import './App.css';
import { View } from './views/View';

const Login = lazy(() => import('./login/Login'))
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<> Loading..... </> }>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route  path='/get' element={<Get/>}/>
          <Route  path='/view' element={<View/>}/>
          <Route  path='/view/:id' element={<View/>}/>
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
