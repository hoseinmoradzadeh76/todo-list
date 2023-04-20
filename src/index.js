import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Persen from './pages/Persen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/About' element={<About />} >
          
            <Route index element={
              <main>
               <p> کاربر مورد نظر را انتخاب کنید</p>
              </main>
            }
            />
          </Route>
          <Route path='/persens/:persenId' element={<Persen />} />
          
          <Route path='*' element={
          <main>
            <h4>چیزی پیدا نشد</h4>
          </main>
        }
        />
        </Route>
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
