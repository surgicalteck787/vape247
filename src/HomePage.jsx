import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShoppingBag, ShieldCheck, Truck, BadgeCheck, Star, PackageCheck } from 'lucide-react';
import { catalogueProducts } from './catalogueData.js';

const phone='+923204855261';

const pick=(query)=>catalogueProducts.find(p=>p.name.toLowerCase().includes(query.toLowerCase())&&p.image);
const featured=[
  pick('Geek Bar Pulse X'),
  pick('OXVA NeXlim 2 Pod Kit 40W'),
  pick('Vaporesso XRos 6 Pod Kit'),
  pick('VOOPOO VMATE MAX 2')
].filter(Boolean);
const liquids=[
  pick('LYON Dualicious E-Liquid – Mango Peach Ice'),
  pick('Dinner Lady Lemon Tart'),
  pick('DRIP DOWN EDITION PASSION LYCHEE ICE')
].filter(Boolean);
const categories=[
  {title:'Devices',to:'/vape-devices/',image:pick('OXVA NeXlim 2 Pod Kit 40W')?.image||pick('Geek Bar Pulse X')?.image},
  {title:'E-Juices',to:'/e-liquids/',image:pick('LYON Dualicious E-Liquid – Mango Peach Ice')?.image},
  {title:'Disposable PODs',to:'/products/',image:pick('Elf Bar Ice King Pro')?.image||pick('Geek Bar Pulse X')?.image},
  {title:'Accessories',to:'/vape-accessories/',image:pick('Vaporesso XRos 6 Pod Kit')?.image}
];

function SeoHome(){useEffect(()=>{document.title='Vape247 | Online Vape Products in Lahore, Pakistan';let m=document.querySelector('meta[name="description"]');if(!m){m=document.createElement('meta');m.name='description';document.head.appendChild(m)}m.content='Explore Vape247 in Lahore for vape devices, e-liquids, disposable products, coils and accessories. Browse the product catalogue and contact us for current availability.';let c=document.querySelector('link[rel="canonical"]');if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c)}c.href='https://vape247.pk/'},[]);return null}
function ProductCard({product,badge='NEW'}){if(!product)return null;return <article className="v247-product-card"><div className="v247-product-image">{badge&&<span className="v247-badge">{badge}</span>}{product.image?<img src={product.image} alt={product.alt||product.name}/>:<div className="v247-no-image">PRODUCT IMAGE</div>}</div><div className="v247-product-info"><small>{product.category}</small><h3>{product.name}</h3><b>Price: {product.referencePrice||'Contact for price'}</b><Link to="/products/" className="v247-add">VIEW PRODUCT <ArrowRight size={15}/></Link></div></article>}
function SectionTitle({eyebrow,title,to='/products/'}){return <div className="v247-section-title"><div><span>{eyebrow}</span><h2>{title}</h2></div><Link to={to}>VIEW ALL <ArrowRight size={16}/></Link></div>}

export default function HomePage(){
 const brandNames=['Geekvape','Innokin','IVG','Lost Mary','OXVA','SMOK','Vaporesso','Uwell','VOOPOO','Geek Bar'];
 return <div className="v247-home"><SeoHome/>
  <a className="v247-skip" href="#main-content">Skip to content</a>
  <div className="v247-announcement"><span>Product catalogue available for Lahore customers</span><span>Call or WhatsApp to confirm availability</span><span>Adults only • 18+</span></div>
  <header className="v247-header">
   <Link className="v247-logo" to="/"><b>VAPE<span>247</span></b><small>LAHORE · PAKISTAN</small></Link>
   <nav><Link to="/products/">Shop</Link><Link to="/vape-devices/">Devices</Link><Link to="/e-liquids/">E-Juices</Link><Link to="/products/">Disposable</Link><Link to="/vape-accessories/">Accessories</Link><Link to="/products/">New Arrivals</Link></nav>
   <div className="v247-header-actions"><a href={'tel:'+phone}><Phone size={17}/><span>0320 4855261</span></a><Link to="/products/"><ShoppingBag size={18}/></Link></div>
  </header>
  <main id="main-content">
   <section className="v247-hero">
    <div className="v247-hero-copy"><span className="v247-kicker">VAPE247.PK</span><h1>Explore Our Latest <em>Vape Collection.</em></h1><p>Discover vape devices, e-liquids, disposables, coils and accessories in one modern Lahore-focused catalogue.</p><div className="v247-hero-buttons"><Link to="/products/">SHOP PRODUCTS <ArrowRight size={17}/></Link><a href={'tel:'+phone}>CONTACT US <Phone size={16}/></a></div></div>
    <div className="v247-hero-image">{featured[0]?.image&&<img src={featured[0].image} alt={featured[0].alt||featured[0].name}/>}<div className="v247-hero-orb"></div><span className="v247-hero-label">NEW ARRIVALS<br/><b>VAPE247</b></span></div>
   </section>

   <section className="v247-categories"><div className="v247-category-grid">{categories.map(c=><Link to={c.to} className="v247-category" key={c.title}><div>{c.image&&<img src={c.image} alt={c.title}/>}</div><h3>{c.title}</h3><span>Shop Now <ArrowRight size={15}/></span></Link>)}</div></section>

   <section className="v247-welcome"><div><span>WELCOME TO VAPE247</span><h2>Your Vape Product Catalogue in Pakistan</h2><p>Discover products across popular categories and check the model details before you buy. Contact Vape247 to confirm current stock, price and delivery availability.</p><Link to="/products/">SHOP NOW <ArrowRight size={16}/></Link></div><div className="v247-welcome-image">{featured[1]?.image&&<img src={featured[1].image} alt="Featured vape device"/>}</div></section>

   <section className="v247-products-section"><SectionTitle eyebrow="NEW ARRIVALS" title="VIEW OUR LATEST PRODUCTS"/><div className="v247-tabs"><span>All</span><span>Devices</span><span>E-Juice</span><span>Accessories</span><span>Disposables</span></div><div className="v247-products-grid">{featured.map((p,i)=><ProductCard key={p.name} product={p} badge={i===0?'NEW':'BEST SELLER'}/>)}</div></section>

   <section className="v247-products-section v247-liquid-section"><SectionTitle eyebrow="PREMIUM LIQUIDS" title="BOLD FLAVOURS, BETTER PICKS" to="/e-liquids/"/><div className="v247-products-grid v247-three">{liquids.map(p=><ProductCard key={p.name} product={p} badge="POPULAR"/>)}</div></section>

   <section className="v247-products-section"><SectionTitle eyebrow="DISPOSABLES" title="READY WHEN YOU ARE"/><div className="v247-products-grid">{catalogueProducts.filter(p=>/disposable/i.test(p.name)&&p.image).slice(0,4).map(p=><ProductCard key={p.name} product={p} badge="NEW"/>)}</div></section>

   <section className="v247-products-section"><SectionTitle eyebrow="ACCESSORIES" title="EVERYTHING YOU NEED" to="/vape-accessories/"/><div className="v247-products-grid">{catalogueProducts.filter(p=>/cartridge|replacement pod/i.test(p.name)&&p.image).slice(0,4).map(p=><ProductCard key={p.name} product={p} badge="ACCESSORY"/>)}</div></section>

   <section className="v247-testimonials"><SectionTitle eyebrow="CUSTOMER LOVE" title="WHAT VAPORS ARE SAYING"/><div className="v247-rating"><b>4.8</b><div><div>{[1,2,3,4,5].map(i=><Star key={i} size={16} fill="currentColor"/>)}</div><span>Product catalogue experience and customer feedback</span></div></div><div className="v247-review-grid"><blockquote>“Helpful product information and an easy way to compare device models before contacting the store.”<b>Vape247 Customer</b></blockquote><blockquote>“The categories made it easier to find the type of device and replacement item I was looking for.”<b>Vape247 Customer</b></blockquote><blockquote>“Clear product names and model details make the catalogue much easier to browse.”<b>Vape247 Customer</b></blockquote></div></section>

   <section className="v247-brands"><span>VAPE BRANDS WE STOCK</span><h2>Popular vape brands and product lines</h2><div>{brandNames.map((b,i)=><b key={b}>{String(i+1).padStart(2,'0')} <em>{b}</em></b>)}</div></section>

   <section className="v247-benefits"><div><BadgeCheck/><b>Genuine product checks</b><p>Review model and product identity before listing.</p></div><div><PackageCheck/><b>Availability confirmation</b><p>Contact us to confirm current product availability.</p></div><div><ShieldCheck/><b>Adults-only access</b><p>Regulated products are not intended for minors.</p></div><div><Truck/><b>Delivery information</b><p>Confirm delivery coverage and charges before ordering.</p></div></section>
  </main>
  <footer className="v247-footer"><div className="v247-footer-main"><div><Link className="v247-logo" to="/"><b>VAPE<span>247</span></b><small>LAHORE · PAKISTAN</small></Link><p>Timing and delivery availability should be confirmed before visiting or ordering.</p><a href={'tel:'+phone}>{phone.replace('+92','0')}</a></div><div><b>CUSTOMER SERVICE</b><Link to="/products/">My Account</Link><Link to="/returns-refunds/">Return and Exchange Policy</Link><Link to="/faq/">FAQs</Link><Link to="/terms-and-conditions/">Terms of Service</Link></div><div><b>STORE LINKS</b><Link to="/about-us/">About Us</Link><Link to="/blog/">Blogs</Link><Link to="/privacy-policy/">Privacy Policy</Link><Link to="/shipping-policy/">Shipping Policy</Link></div><div><b>NEWSLETTER SIGN UP</b><p>Sign up for product updates and new arrivals.</p><div className="v247-newsletter"><input placeholder="enter your email address"/><button>SUBMIT</button></div></div></div><div className="v247-footer-bottom">© 2026 Vape247. All Rights Reserved.<span>Adults only · Follow applicable local requirements</span></div></footer>
 </div>
}