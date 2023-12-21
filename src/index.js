import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/index.scss';
import reportWebVitals from './reportWebVitals';
import KasaRoutes from './components/KasaRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Apropos' element={<Apropos />}></Route>
        <Route path='/Logement' element={<Logement/>}></Route>
        {annonces.map(annonce =>
          <Route
            key={annonce.id}
            path={'/Logement/'+annonce.id}
            element={<Logement/>}>
          </Route>)}

        <Route path='/*' element={<Page404 />}></Route>
      </Routes> */}
     <KasaRoutes></KasaRoutes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();