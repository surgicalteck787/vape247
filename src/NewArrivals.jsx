import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Search, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { catalogueProducts } from './catalogueData.js';

const PAGE_SIZE = 24;
const categories = ['All Products', 'Devices', 'E-Liquids', 'Coils & Cartridges', 'Accessories'];

function SeoNewArrivals() {
  useEffect(() => {
    document.title = 'Vape Product Catalogue | Vape247 Lahore, Pakistan';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Browse the Vape247 product reference catalogue by category. Product details, source-list prices and manufacturer image availability require verification.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://vape247.pk/products/';
  }, []);
  return null;
}

function ProductVisual({ product }) {
  if (product.image) return <div className="catalogue-image"><img src={product.image} alt={product.alt || product.name} loading="lazy" /><span className="catalogue-photo-tag">Product photo</span></div>;
  return <div className="catalogue-placeholder" aria-label="Official product photo not yet added">
    <div className="catalogue-placeholder-art"><span></span><i></i></div>
    <div className="catalogue-placeholder-caption"><ImageOff size={13}/> Official product photo pending</div>
  </div>;
}

export default function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => catalogueProducts.filter(product => {
    const categoryMatch = activeCategory === 'All Products' || product.category === activeCategory;
    const query = search.trim().toLowerCase();
    const searchMatch = !query || product.name.toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  }), [activeCategory, search]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const counts = useMemo(() => categories.reduce((acc, category) => {
    acc[category] = category === 'All Products' ? catalogueProducts.length : catalogueProducts.filter(p => p.category === category).length;
    return acc;
  }, {}), []);

  const changeCategory = category => { setActiveCategory(category); setPage(1); };
  const changeSearch = value => { setSearch(value); setPage(1); };

  return <div className="site-shell new-arrivals-page catalogue-page">
    <SeoNewArrivals />
    <div className="na-topline">VAPE247.PK <span>•</span> LAHORE, PAKISTAN <span>•</span> ADULT-ONLY PRODUCT INFORMATION</div>
    <header className="na-header">
      <Link className="na-brand" to="/"><span className="na-brand-mark">V</span><span>VAPE<span>247</span><small>LAHORE · PAKISTAN</small></span></Link>
      <nav aria-label="Main navigation">
        <Link to="/">Home</Link><Link to="/collections/vape-kits/">Vape Kits</Link><Link to="/collections/e-liquids/">E-Liquids</Link><Link to="/collections/disposable-vapes/">Disposable Vapes</Link><Link to="/collections/pods/">Pods</Link><Link className="active" to="/products/">All Products</Link>
      </nav>
    </header>
    <main>
      <section className="na-hero">
        <div><p className="na-eyebrow">VAPE247 / COMPLETE PRODUCT CATALOGUE</p><h1>Product <em>Catalogue.</em></h1><p>Browse the supplied product reference list by category or search by model and product name. Listings are catalogue records, not confirmation of current stock or availability.</p></div>
        <div className="na-hero-note"><span>{catalogueProducts.length}</span><small>Catalogue records</small></div>
      </section>
      <section className="catalogue-listing">
        <div className="catalogue-toolbar">
          <div className="catalogue-search"><Search size={18}/><input value={search} onChange={e => changeSearch(e.target.value)} placeholder="Search product name or model..." aria-label="Search products"/></div>
          <span className="na-count">{filtered.length} MATCHING PRODUCTS</span>
        </div>
        <div className="catalogue-filters" aria-label="Filter products by category">
          {categories.map(category => <button type="button" key={category} className={activeCategory === category ? 'active' : ''} onClick={() => changeCategory(category)}>{category}<span>{counts[category]}</span></button>)}
        </div>
        <div className="catalogue-grid">
          {visible.map((product, index) => <article className="catalogue-card" key={product.name}>
            <ProductVisual product={product}/>
            <div className="catalogue-card-body">
              <span className="catalogue-category">{product.category}</span>
              <h3>{product.name}</h3>
              {product.specs && <p className="catalogue-specs">{product.specs}</p>}
              <div className="catalogue-price"><small>Source-list reference price</small><strong>{product.referencePrice || 'Not supplied'}</strong></div>
              {product.source ? <a className="na-source-link" href={product.source} target="_blank" rel="noreferrer">Product image source <ArrowUpRight size={14}/></a> : <span className="catalogue-source-pending">Manufacturer link not verified</span>}
            </div>
          </article>)}
        </div>
        {visible.length === 0 && <div className="catalogue-empty">No products match this search. Try another model name or category.</div>}
        <div className="catalogue-pagination">
          <button type="button" onClick={() => setPage(p => Math.max(1,p-1))} disabled={currentPage === 1}><ChevronLeft size={16}/> Previous</button>
          <span>Page <b>{currentPage}</b> of <b>{pageCount}</b></span>
          <button type="button" onClick={() => setPage(p => Math.min(pageCount,p+1))} disabled={currentPage === pageCount}>Next <ChevronRight size={16}/></button>
        </div>
      </section>
      <section className="na-note">
        <ShieldCheck size={22}/>
        <div><strong>Important catalogue and compliance notice</strong><p>The product names and reference prices above were transcribed from the supplied third-party catalogue. They are not confirmed Vape247 selling prices, stock levels or offers. Verify every item, price, authenticity, applicable taxes and local legal requirements before publication as a sales listing. {catalogueProducts.filter(product => product.image).length} product cards currently have a matched online product photo; the remaining {catalogueProducts.filter(product => !product.image).length} cards show a photo-pending placeholder rather than an unrelated image. Images are linked from external manufacturer or retailer sources and may be protected by copyright; confirm permission before commercial use. No cart, checkout or order function is provided by this catalogue.</p></div>
      </section>
    </main>
    <footer className="na-footer"><Link to="/">VAPE247.PK</Link><span>Product information for Lahore, Pakistan</span><Link to="/contact/">Contact</Link></footer>
  </div>;
}
