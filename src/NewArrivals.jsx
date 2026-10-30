import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const products = [
  {
    name: 'VOOPOO ARGUS Z3 Pod Kit',
    category: 'Pod Device',
    price: 'Rs. 2,950',
    image: 'https://sen.voopoo.com.cn/www-voopoo/static/dist/images/product/detail/argus-z3/part2-tit.png?v=c990878474',
    alt: 'Official VOOPOO ARGUS Z3 product image',
    specs: '5–20W output · 1100mAh battery',
    source: 'https://www.voopoo.com/argus-series/argus-z3'
  },
  {
    name: 'OXVA NeXLIM 2 Pod Kit',
    category: 'Pod Device',
    price: 'Rs. 8,000',
    image: 'https://cdn.shopify.com/s/files/1/0502/8033/3505/files/Standard_Version_c96c67a1-09ef-4556-aa97-a31012b2f5bd.avif?v=1782092260',
    alt: 'Official OXVA NeXLIM 2 device and packaging',
    specs: '5–40W output · 2000mAh battery',
    source: 'https://store.oxva.com/products/oxva-nexlim-2'
  },
  {
    name: 'VOOPOO VINCI Spark220',
    category: 'Pod Mod / Kit',
    price: 'Rs. 12,500',
    image: 'https://sen.voopoo.com.cn/www-voopoo/static/dist/images/product/detail/vinci-spark220/part15-pro.png?v=ad001a2895',
    alt: 'Official VOOPOO VINCI Spark220 product image',
    specs: 'Up to 220W · Dual 18650 batteries (not included)',
    source: 'https://www.voopoo.com/vinci-series/vinci-spark220'
  }
];

function SeoNewArrivals() {
  useEffect(() => {
    document.title = 'New Arrivals | Vape247 Lahore, Pakistan';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'New arrival product catalogue at Vape247 Lahore. Review product models, reference prices and manufacturer specifications. Adult-only product information.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://vape247.pk/new-arrivals/';
  }, []);
  return null;
}

export default function NewArrivals() {
  return <div className="site-shell new-arrivals-page">
    <SeoNewArrivals />
    <div className="na-topline">VAPE247.PK <span>•</span> LAHORE, PAKISTAN <span>•</span> ADULT-ONLY PRODUCT INFORMATION</div>
    <header className="na-header">
      <Link className="na-brand" to="/"><span className="na-brand-mark">V</span><span>VAPE<span>247</span><small>LAHORE · PAKISTAN</small></span></Link>
      <nav aria-label="Main navigation">
        <Link to="/">Home</Link><Link to="/vape-devices/">Devices</Link><Link className="active" to="/new-arrivals/">New Arrivals</Link><Link to="/e-liquids/">E-Liquids</Link><Link to="/replacement-coils/">Coils</Link><Link to="/vape-accessories/">Accessories</Link>
      </nav>
    </header>
    <main>
      <section className="na-hero">
        <div><p className="na-eyebrow">VAPE247 / PRODUCT CATALOGUE</p><h1>New <em>Arrivals.</em></h1><p>Recently added models from the Vape247 product reference list. Review the model, image and manufacturer information in one place.</p></div>
        <div className="na-hero-note"><span>03</span><small>Selected product listings</small></div>
      </section>
      <section className="na-listing">
        <div className="na-listing-head"><div><span className="na-eyebrow">LATEST CATALOGUE ENTRIES</span><h2>New product listings</h2></div><span className="na-count">03 PRODUCTS</span></div>
        <div className="na-grid">
          {products.map((product, index) => <article className="na-card" key={product.name}>
            <a className="na-image-wrap" href={product.source} target="_blank" rel="noreferrer" aria-label={'View manufacturer details for '+product.name}>
              <img src={product.image} alt={product.alt} loading="lazy" />
              <span className="na-index">0{index + 1}</span><span className="na-image-arrow"><ArrowUpRight size={18}/></span>
            </a>
            <div className="na-card-body">
              <span className="na-category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="na-specs">{product.specs}</p>
              <div className="na-price-row"><span>Reference price</span><strong>{product.price}</strong></div>
              <a className="na-source-link" href={product.source} target="_blank" rel="noreferrer">Manufacturer product information <ArrowUpRight size={15}/></a>
            </div>
          </article>)}
        </div>
      </section>
      <section className="na-note">
        <ShieldCheck size={22}/>
        <div><strong>Product and price verification notice</strong><p>Prices are transcribed from the reference catalogue supplied for this project. Confirm current stock, final price, product authenticity, local legal requirements and image-reuse permission before publishing these as live sale listings. Product images link to the respective manufacturer pages and remain their property.</p></div>
      </section>
    </main>
    <footer className="na-footer"><Link to="/">VAPE247.PK</Link><span>Product information for Lahore, Pakistan</span><Link to="/contact/">Contact</Link></footer>
  </div>;
}
