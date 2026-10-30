import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import SitePage from './SitePage.jsx';
import NewArrivals from './NewArrivals.jsx';
import './styles.css';
export default function App(){return <BrowserRouter><Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/new-arrivals/" element={<NewArrivals/>}/>
<Route path="/products/" element={<NewArrivals/>}/>
<Route path="/vape-devices/" element={<SitePage pageKey="devices"/>}/>
<Route path="/e-liquids/" element={<SitePage pageKey="eliquids"/>}/>
<Route path="/replacement-coils/" element={<SitePage pageKey="coils"/>}/>
<Route path="/vape-accessories/" element={<SitePage pageKey="accessories"/>}/>
<Route path="/about-us/" element={<SitePage pageKey="about"/>}/>
<Route path="/contact/" element={<SitePage pageKey="contact"/>}/>
<Route path="/shipping-policy/" element={<SitePage pageKey="shipping"/>}/>
<Route path="/returns-refunds/" element={<SitePage pageKey="returns"/>}/>
<Route path="/privacy-policy/" element={<SitePage pageKey="privacy"/>}/>
<Route path="/terms-and-conditions/" element={<SitePage pageKey="terms"/>}/>
<Route path="/faq/" element={<SitePage pageKey="faq"/>}/>
<Route path="/blog/" element={<SitePage pageKey="blog"/>}/>
<Route path="/age-verification/" element={<SitePage pageKey="age"/>}/>
<Route path="*" element={<SitePage pageKey="notfound"/>}/>
</Routes></BrowserRouter>}