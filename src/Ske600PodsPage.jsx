import React,{useEffect,useMemo,useState} from 'react';
import {Link} from 'react-router-dom';
import {Search,ArrowUpRight,ChevronLeft,ChevronRight,ShieldCheck} from 'lucide-react';

const products=[
  {
    "name": "Blue Fusion",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-pods-blue-fusion_480x.webp?v=1754140726"
  },
  {
    "name": "Fresh Menthol Mojito",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-pods-fresh-menthol-mojito_480x.webp?v=1754140735"
  },
  {
    "name": "Pineapple Peach Mango",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-pods-pineapple-peach-mango_480x.webp?v=1754140741"
  },
  {
    "name": "Strawberry Blast",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-pods-strawberry-blast_480x.webp?v=1754140747"
  },
  {
    "name": "Watermelon Burst",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-pods-watermelon-burst_480x.webp?v=1754140823"
  },
  {
    "name": "Watermelon Strawberry",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-pods-watermelon-strawberry_480x.webp?v=1754140773"
  },
  {
    "name": "Strawberry Burst",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-strawberry-burst_480x.webp?v=1739372924"
  },
  {
    "name": "Kiwi Passion Guava",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-kiwi-passion-fruit-guava_480x.webp?v=1739372925"
  },
  {
    "name": "Blue Razz Lemonade",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-blue-razz-lemonade_480x.webp?v=1739372924"
  },
  {
    "name": "Berry Ice",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-berry-ice_480x.webp?v=1739372924"
  },
  {
    "name": "Cherry Ice",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-cherry-ice_480x.webp?v=1739372924"
  },
  {
    "name": "Blue Sour Raspberry",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-blueberry-sour-raspberry_480x.webp?v=1739372924"
  },
  {
    "name": "Blueberry Raspberry",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-blueberry-raspberries_480x.webp?v=1739372924"
  },
  {
    "name": "Lemon & Lime",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-lemon-lime_480x.webp?v=1739372924"
  },
  {
    "name": "Watermelon Ice",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-watermelon-ice_480x.webp?v=1739372925"
  },
  {
    "name": "Pink Lemonade",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-pink-lemonade_480x.webp?v=1739372925"
  },
  {
    "name": "VMT Ice",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-vmt-ice_480x.webp?v=1739372925"
  },
  {
    "name": "Pineapple Ice",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-pineapple-ice_480x.webp?v=1739372925"
  },
  {
    "name": "Menthol",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-menthol_480x.webp?v=1739372924"
  },
  {
    "name": "Fizzy Cherry",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-fizzy-cherry_480x.webp?v=1739372924"
  },
  {
    "name": "Cola Ice",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-replacement-pods-cola-ice_480x.webp?v=1739372925"
  },
  {
    "name": "Rainbow",
    "image": null
  },
  {
    "name": "Blueberry Lime",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-pods-blueberry-lime_480x.webp?v=1754140720"
  },
  {
    "name": "Strawberry Kiwi",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-pods-strawberry-kiwi_480x.webp?v=1754140753"
  },
  {
    "name": "Blueberry Cherry Cranberry",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-pods-blueberry-cherry-cranberry_480x.webp?v=1754140713"
  },
  {
    "name": "Banana Ice",
    "image": "https://vaping101.co.uk/cdn/shop/files/ske-600-pro-pods-banana-ice_480x.webp?v=1754140703"
  }
];
const PAGE_SIZE=24;
export default function Ske600PodsPage(){
 const [query,setQuery]=useState('');const [page,setPage]=useState(1);
 const filtered=useMemo(()=>products.filter(p=>p.name.toLowerCase().includes(query.trim().toLowerCase())),[query]);
 const pages=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));const current=Math.min(page,pages);
 const visible=filtered.slice((current-1)*PAGE_SIZE,current*PAGE_SIZE);
 useEffect(()=>{document.title='SKE Crystal Pro 600 Pods Collection | Vape247';let m=document.querySelector('meta[name="description"]');if(!m){m=document.createElement('meta');m.name='description';document.head.appendChild(m)}m.content='SKE Crystal Pro 600 pod product reference catalogue at Vape247. Review flavour names, product information and compatibility notes.';},[]);
 return <div className="site-shell ske-collection">
  <div className="collection-topline">VAPE247.PK <span>•</span> LAHORE, PAKISTAN <span>•</span> ADULT-ONLY PRODUCT INFORMATION</div>
  <header className="collection-header"><Link className="collection-brand" to="/"><b>VAPE<span>247</span></b><small>LAHORE · PAKISTAN</small></Link><nav><Link to="/collections/vape-kits/">Vape Kits</Link><Link to="/collections/e-liquids/">E-Liquids</Link><Link to="/collections/disposable-vapes/">Disposable Vapes</Link><Link to="/collections/pods/">Pods</Link><Link className="active" to="/collections/ske-600-pro-pods/">SKE 600 Pro Pods</Link><Link to="/products/">All Products</Link></nav><Link className="collection-home" to="/">Home <ArrowUpRight size={15}/></Link></header>
  <main>
   <section className="ske-hero"><div className="collection-breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/collections/pods/">Pods</Link><span>/</span><b>SKE 600 Pro Pods</b></div><span className="collection-eyebrow">SKE CRYSTAL PRO · PRODUCT REFERENCE</span><h1>SKE 600 Pro Pods<em>.</em></h1><p>This Vape247 page lists the flavour variants supplied in the reference material. Check the exact device model and local product requirements before relying on compatibility or product specifications.</p><div className="ske-hero-tags"><span>26 listed variants</span><span>Product information only</span><span>Adults 18+</span></div></section>
   <section className="ske-specs"><div><b>Pack information</b><span>2 prefilled pods per pack (source text)</span></div><div><b>Pod capacity</b><span>2ml per pod (source text)</span></div><div><b>Compatibility</b><span>SKE Crystal Pro 600 device — verify model</span></div></section>
   <section className="collection-products"><div className="collection-heading"><div><span>VAPE247 PRODUCT CATALOGUE</span><h2>Flavour variants</h2></div><label className="collection-search"><Search size={17}/><input value={query} onChange={e=>{setQuery(e.target.value);setPage(1)}} placeholder="Search flavour..." /></label></div><div className="collection-result-line">{filtered.length} of {products.length} listed variants</div>
    <div className="collection-grid">{visible.map((p,i)=><article className="collection-card" key={p.name}><div className="collection-photo">{p.image?<img src={p.image} alt={`SKE Crystal Pro 600 ${p.name} pod pack`} loading="lazy"/>:<div className="collection-photo-placeholder"><span>SKE CRYSTAL</span><small>Image not verified</small></div>}</div><div className="collection-card-info"><small>SKE CRYSTAL PRO 600 · PODS</small><h3>{p.name} – SKE 600 Pro Pods</h3><p>Flavour variant listed in the supplied product reference.</p><div className="collection-price"><span>Vape247 price</span><b>Not confirmed</b></div>{p.image?<a href={p.image} target="_blank" rel="noreferrer">Image source <ArrowUpRight size={13}/></a>:<small className="collection-pending">Rainbow variant: image and compatibility need verification</small>}</div></article>)}</div>
    {visible.length===0&&<div className="collection-empty">No matching flavour found.</div>}
    <div className="collection-pagination"><button disabled={current===1} onClick={()=>setPage(x=>Math.max(1,x-1))}><ChevronLeft size={15}/> Previous</button><span>Page <b>{current}</b> of <b>{pages}</b></span><button disabled={current===pages} onClick={()=>setPage(x=>Math.min(pages,x+1))}>Next <ChevronRight size={15}/></button></div>
   </section>
   <section className="ske-description"><div><span className="collection-eyebrow">PRODUCT DETAILS FROM PROVIDED COPY</span><h2>About SKE 600 Pro replacement pods</h2><p>The supplied description identifies these as replacement prefilled pods for the SKE Crystal Pro 600 device. It states that each pack contains two 2ml pods and describes a 20mg nicotine-salt formulation, up to 600 puffs per pod and a built-in mesh coil. These specifications have not been independently verified for every listed variant.</p><p>The supplied copy also says the pods are sealed and not designed to be refilled. It describes the Crystal Plus and Crystal Pro as the same kit name family; confirm compatibility against the manufacturer's current documentation before listing that claim.</p></div><aside><b>Compatibility reminder</b><p>Do not assume these pods fit SKE Bar 15K or other SKE devices. Confirm the exact device and pod model with the manufacturer.</p></aside></section>
   <section className="ske-faq"><span className="collection-eyebrow">HELP & INFORMATION</span><h2>Frequently asked questions</h2><details><summary>Which device are these pods listed for?</summary><p>The supplied source describes them for the SKE Crystal Pro 600. Verify the exact device model and pod version with SKE before relying on compatibility.</p></details><details><summary>How many pods are listed in a pack?</summary><p>The supplied product copy states two prefilled pods per pack, each with 2ml capacity. Verify the packaging for the exact variant.</p></details><details><summary>Can these pods be refilled?</summary><p>The supplied description says they are sealed, prefilled replacement pods and are not designed to be refilled.</p></details><details><summary>Are Vape247 prices and stock confirmed?</summary><p>No. This page does not set a selling price or confirm stock, supplier authorization, product authenticity or legal sale status.</p></details></section>
   <section className="collection-disclaimer"><ShieldCheck/><div><b>Product information and image notice</b><p>This is an informational catalogue, not an order or checkout page. Product claims are transcribed from supplied reference material and have not all been independently verified. Prices, stock, authenticity, supplier authorization and local legal status are not confirmed. Product photos are externally hosted reference images; confirm commercial-use permission or replace them with manufacturer-authorized assets before commercial publication. This page is intended for adults only and must not be marketed to minors.</p></div></section>
  </main><footer className="collection-footer"><Link to="/">VAPE247.PK</Link><span>Product information for adults · Lahore, Pakistan</span><Link to="/contact/">Contact</Link></footer>
 </div>;
}
