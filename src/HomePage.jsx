import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone, ShieldCheck, SearchCheck, PackageCheck, CircleHelp, BadgeCheck, Menu } from 'lucide-react';

const phone = '+923204855261';
const categories = [
  { title: 'Vape Devices', keyword: 'Vape devices in Lahore', to: '/vape-devices/', image: 'https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d', alt: 'Photograph of vape hardware and electronic cigarette components', text: 'Explore device category information, model details and manufacturer specifications.' },
  { title: 'E-Liquids', keyword: 'E-liquids in Lahore', to: '/e-liquids/', image: 'https://c.pxhere.com/photos/73/f1/vape_vaping_e_cig_clouding_e_cigarette_smoking_atomizer_ecig-652423.jpg!d', alt: 'Photograph showing an e-cigarette and liquid bottle', text: 'Review product labels, ingredient information and verified manufacturer details.' },
  { title: 'Replacement Coils', keyword: 'Replacement coils in Lahore', to: '/replacement-coils/', image: 'https://c.pxhere.com/photos/cd/b1/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489520.jpg!d', alt: 'Close-up photograph of vape atomizer and tank components', text: 'Check model compatibility and part numbers before selecting a replacement.' },
  { title: 'Vape Accessories', keyword: 'Vape accessories in Lahore', to: '/vape-accessories/', image: 'https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d', alt: 'Photograph of vape hardware and related accessories', text: 'Browse information about compatible accessories and device components.' }
];
const faqs = [
  ['Is Vape247 a vape shop in Lahore?', 'Vape247.pk is being developed as a Lahore-focused online product catalogue. Contact us to confirm current service availability and business details before visiting or placing an order.'],
  ['Which product categories are covered?', 'The website is organized around vape devices, e-liquids, replacement coils and related accessories. Product listings will only be added after their details have been checked.'],
  ['How can I check whether a coil fits my device?', 'Use the exact device or tank model and compare it with the replacement part number and compatibility information supplied by the manufacturer.'],
  ['Are product prices and stock shown online?', 'The current website build does not yet contain a verified live inventory or checkout. Contact Vape247 to ask about current information.'],
  ['Does Vape247 offer delivery in Lahore?', 'Delivery coverage, charges and timings have not yet been confirmed on this website. Please contact the team before relying on any delivery estimate.'],
  ['Are vape products suitable for minors?', 'No. This website is intended for adults only. Regulated products must not be sold or promoted to minors, and applicable local requirements must be followed.']
];

function SeoHome() {
  useEffect(() => {
    const title = 'Vape Products in Lahore, Pakistan | Vape247.pk';
    const description = 'Vape247 Lahore product catalogue for vape devices, e-liquids, replacement coils and accessories. Check product details and contact us for local availability.';
    document.title = title;
    const setMeta = (key, value, property = false) => {
      const selector = property ? `meta[property="${key}"]` : `meta[name="${key}"]`;
      let el = document.head.querySelector(selector);
      if (!el) { el = document.createElement('meta'); el.setAttribute(property ? 'property' : 'name', key); document.head.appendChild(el); }
      el.setAttribute('content', value);
    };
    setMeta('description', description);
    setMeta('robots', 'index,follow');
    setMeta('geo.region', 'PK-PB');
    setMeta('geo.placename', 'Lahore');
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', 'https://vape247.pk/', true);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://vape247.pk/';
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Vape247',
      url: 'https://vape247.pk/',
      telephone: phone,
      areaServed: { '@type': 'City', name: 'Lahore', containedInPlace: { '@type': 'Country', name: 'Pakistan' } }
    };
    let script = document.getElementById('vape247-home-schema');
    if (!script) { script = document.createElement('script'); script.id = 'vape247-home-schema'; script.type = 'application/ld+json'; document.head.appendChild(script); }
    script.textContent = JSON.stringify(schema);
  }, []);
  return null;
}

function Visual({ src, alt, className = '' }) {
  return <div className={`home-visual ${className}`}><img src={src} alt={alt} loading="lazy" /></div>;
}
function Eyebrow({ children }) { return <div className="home-eyebrow"><span />{children}</div>; }
function SectionLink({ to, children }) { return <Link className="home-text-link" to={to}>{children}<ArrowUpRight size={16}/></Link>; }

export default function HomePage() {
  return <div className="site-shell vape-home">
    <SeoHome />
    <div className="home-topline">VAPE247.PK <span>•</span> LAHORE, PAKISTAN <span>•</span> ADULT-ONLY PRODUCT INFORMATION</div>
    <header className="home-header">
      <Link className="home-brand" to="/" aria-label="Vape247 homepage"><span className="home-brand-mark">V</span><span>VAPE<span>247</span><small>LAHORE · PAKISTAN</small></span></Link>
      <nav className="home-nav" aria-label="Main navigation">
        <Link to="/vape-devices/">Devices</Link><Link to="/products/">All Products</Link><Link to="/e-liquids/">E-Liquids</Link><Link to="/replacement-coils/">Coils</Link><Link to="/vape-accessories/">Accessories</Link><Link to="/about-us/">About</Link><Link to="/faq/">FAQs</Link>
      </nav>
      <a className="home-header-cta" href={`tel:${phone}`}>Call Vape247 <Phone size={15}/></a>
    </header>

    <main>
      <section className="home-hero">
        <div className="home-hero-copy">
          <Eyebrow>LAHORE · PAKISTAN</Eyebrow>
          <h1>Vape product information for <em>Lahore.</em></h1>
          <p>Explore Vape247’s organized catalogue of device categories, e-liquids, replacement coils and accessories. Check product specifications and compatibility before making a decision.</p>
          <div className="home-hero-actions"><Link className="home-primary-btn" to="/vape-devices/">Explore categories <ArrowUpRight size={17}/></Link><a className="home-secondary-btn" href={`tel:${phone}`}>Speak to our team <Phone size={16}/></a></div>
          <div className="home-hero-note"><ShieldCheck size={17}/> Adults-only information · Follow applicable local rules</div>
        </div>
        <Visual src="https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d" alt="Close-up product photograph of vape hardware and tank components" className="home-hero-art"/>
        <div className="home-hero-location"><MapPin size={14}/> LAHORE, PUNJAB, PAKISTAN</div>
      </section>

      <section className="home-category-section">
        <div className="home-section-head"><div><Eyebrow>01 / BROWSE CATEGORIES</Eyebrow><h2>Explore the catalogue<span>.</span></h2></div><p>Four clear categories. Product information first.</p></div>
        <div className="home-category-grid">{categories.map((c,i)=><Link className="home-category-card" to={c.to} key={c.to}><Visual src={c.image} alt={c.alt}/><div className="home-card-content"><span>0{i+1} · {c.keyword}</span><h3>{c.title}</h3><p>{c.text}</p><b>View category <ArrowUpRight size={15}/></b></div></Link>)}</div>
      </section>

      <section className="home-local-section">
        <Visual src="https://images.pexels.com/photos/14406074/pexels-photo-14406074.jpeg?cs=srgb&dl=pexels-m1ddl3-m7n-288920932-14406074.jpg&fm=jpg" alt="Badshahi Mosque in Lahore, Punjab, Pakistan" />
        <div><Eyebrow>02 / LOCAL TO LAHORE</Eyebrow><h2>Built around Lahore search intent.</h2><p>Looking for vape product information in Lahore, Pakistan? Vape247 brings key categories and product-checking guidance together in one easy-to-navigate place.</p><p>Our website is being localized for people searching for vape devices, e-liquids, coils and accessories in Lahore. Contact us to confirm current availability and service coverage.</p><div className="home-local-tags"><span>Vape devices Lahore</span><span>E-liquids Lahore</span><span>Vape coils Lahore</span></div></div>
      </section>

      <section className="home-feature-row">
        <div><Eyebrow>03 / DEVICE INFORMATION</Eyebrow><h2>Start with the exact device model.</h2><p>Device names can look similar while specifications and compatible parts differ. Check manufacturer model numbers, included components and published technical details.</p><SectionLink to="/vape-devices/">Explore device information</SectionLink></div>
        <Visual src="https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d" alt="Generic vape device category illustration"/>
      </section>

      <section className="home-feature-row reverse">
        <Visual src="https://c.pxhere.com/photos/73/f1/vape_vaping_e_cig_clouding_e_cigarette_smoking_atomizer_ecig-652423.jpg!d" alt="Generic e-liquid bottle illustration"/>
        <div><Eyebrow>04 / E-LIQUID INFORMATION</Eyebrow><h2>Read the product label carefully.</h2><p>Product identity, package size, ingredients, nicotine disclosure and required warnings should come from accurate manufacturer documentation. Do not rely on unclear or incomplete listings.</p><SectionLink to="/e-liquids/">Explore e-liquid information</SectionLink></div>
      </section>

      <section className="home-feature-row">
        <div><Eyebrow>05 / REPLACEMENT PARTS</Eyebrow><h2>Check coil compatibility first.</h2><p>Replacement coils are not universally interchangeable. Confirm the exact device or tank family, manufacturer part number and compatibility notes before selecting a component.</p><SectionLink to="/replacement-coils/">Explore replacement coils</SectionLink></div>
        <Visual src="https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d" alt="Generic replacement coil illustration"/>
      </section>

      <section className="home-feature-row reverse">
        <Visual src="https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d" alt="Generic accessory components illustration"/>
        <div><Eyebrow>06 / ACCESSORIES</Eyebrow><h2>Accessories and device components.</h2><p>Find category information for related accessories and components. Listings should state what is included and identify supported models using verified specifications.</p><SectionLink to="/vape-accessories/">Explore accessories</SectionLink></div>
      </section>

      <section className="home-check-section">
        <div className="home-check-copy"><Eyebrow>07 / BEFORE YOU CHOOSE</Eyebrow><h2>What to check in a product listing.</h2><p>Clear information helps customers understand exactly what a product is—and what it is compatible with.</p><ul><li><BadgeCheck size={17}/> Exact brand, model and product identity</li><li><BadgeCheck size={17}/> Manufacturer specifications and package contents</li><li><BadgeCheck size={17}/> Compatibility and replacement part numbers</li><li><BadgeCheck size={17}/> Accurate label details and required warnings</li></ul></div>
        <Visual src="https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d" alt="Photograph of vape product hardware and components"/>
      </section>

      <section className="home-compat-section">
        <Visual src="https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d" alt="Photograph of vape tank and component parts"/>
        <div><Eyebrow>08 / COMPATIBILITY GUIDE</Eyebrow><h2>Match parts to the correct model.</h2><p>Before choosing a replacement pod, coil or accessory, compare the product code with the device manufacturer’s compatibility guide. If details are unclear, ask for confirmation rather than guessing.</p><SectionLink to="/replacement-coils/">Read coil category details</SectionLink></div>
      </section>

      <section className="home-label-section">
        <div><Eyebrow>09 / PRODUCT DETAILS</Eyebrow><h2>Transparent information matters.</h2><p>Product pages should show verified label information and avoid unsupported health, safety or performance claims. Vape247’s catalogue structure is designed to keep specifications and product notes easy to review.</p><SectionLink to="/e-liquids/">Review e-liquid information</SectionLink></div>
        <Visual src="https://c.pxhere.com/photos/73/f1/vape_vaping_e_cig_clouding_e_cigarette_smoking_atomizer_ecig-652423.jpg!d" alt="Photograph of an e-cigarette and e-liquid bottle"/>
      </section>

      <section className="home-adult-section">
        <Visual src="https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d" alt="Photograph of vape hardware components"/>
        <div><Eyebrow>10 / RESPONSIBLE ACCESS</Eyebrow><h2>Adults only. Know the rules.</h2><p>Vape247 is intended for adults and does not target minors. Product sales, advertising, display and use may be subject to federal and Punjab rules. Always check current requirements and never use regulated products in prohibited places.</p><SectionLink to="/age-verification/">Read our age and access information</SectionLink></div>
      </section>

      <section className="home-verification-section">
        <div><Eyebrow>11 / INFORMATION STANDARDS</Eyebrow><h2>No invented specs. No misleading claims.</h2><p>We aim to publish product information only when it can be checked against reliable manufacturer or supplier documentation. Availability, pricing and authenticity claims must be verified before publication.</p><div className="home-standard-points"><span><SearchCheck size={18}/> Check product identity</span><span><PackageCheck size={18}/> Confirm package details</span><span><ShieldCheck size={18}/> Review applicable rules</span></div></div>
        <Visual src="https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d" alt="Photograph of electronic cigarette hardware"/>
      </section>

      <section className="home-support-section">
        <Visual src="https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d" alt="Photograph of vape hardware and accessories"/>
        <div><Eyebrow>12 / LAHORE CUSTOMER SUPPORT</Eyebrow><h2>Need help finding the right information?</h2><p>Contact Vape247 to ask about the website, category details or current Lahore service availability. Please confirm product compatibility using the exact model number.</p><a className="home-primary-btn" href={`tel:${phone}`}>Call +92 320 4855261 <Phone size={16}/></a></div>
      </section>

      <section className="home-faq-section">
        <div className="home-section-head"><div><Eyebrow>13 / QUICK ANSWERS</Eyebrow><h2>Frequently asked questions<span>.</span></h2></div><Visual src="https://c.pxhere.com/photos/f9/58/vaping_ecig_vgod_atomvape_smoking_rda_rta_vape-489521.jpg!d" alt="Photograph of vape device components and liquid" className="home-faq-art"/></div>
        <div className="home-faq-grid">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
        <SectionLink to="/faq/">Visit all FAQs</SectionLink>
      </section>

      <section className="home-local-proof-section">
        <div><Eyebrow>14 / FIND VAPE247</Eyebrow><h2>Connect with Vape247 in Lahore.</h2><p>For current business hours, physical location, product availability and service coverage, please contact us directly. We will add verified store details here once confirmed.</p><div className="home-hero-actions"><a className="home-secondary-btn" href={`tel:${phone}`}>Call Vape247 <Phone size={16}/></a><Link className="home-primary-btn" to="/vape-devices/">Explore catalogue <ArrowUpRight size={17}/></Link></div></div>
        <Visual src="https://images.pexels.com/photos/14406074/pexels-photo-14406074.jpeg?cs=srgb&dl=pexels-m1ddl3-m7n-288920932-14406074.jpg&fm=jpg" alt="Badshahi Mosque in Lahore, Punjab, Pakistan"/>
      </section>

    </main>

    <footer className="home-footer">
      <div className="home-footer-main"><div className="home-footer-brand"><Link className="home-brand" to="/"><span className="home-brand-mark">V</span><span>VAPE<span>247</span><small>LAHORE · PAKISTAN</small></span></Link><p>Product category information and customer support for Lahore, Pakistan.</p><a href={`tel:${phone}`}>+92 320 4855261</a></div><div><b>Categories</b><Link to="/vape-devices/">Vape devices</Link><Link to="/e-liquids/">E-liquids</Link><Link to="/replacement-coils/">Replacement coils</Link><Link to="/vape-accessories/">Accessories</Link></div><div><b>Vape247</b><Link to="/about-us/">About us</Link><Link to="/contact/">Contact</Link><Link to="/blog/">Guides</Link><Link to="/faq/">FAQs</Link></div><div><b>Policies</b><Link to="/shipping-policy/">Shipping</Link><Link to="/returns-refunds/">Returns</Link><Link to="/privacy-policy/">Privacy</Link><Link to="/terms-and-conditions/">Terms</Link><Link to="/age-verification/">Age information</Link></div></div>
      <p className="home-image-credits">Image sources: <a href="https://pxhere.com/en/photo/489520" target="_blank" rel="noreferrer">PxHere CC0 hardware photo 1</a> · <a href="https://pxhere.com/en/photo/489521" target="_blank" rel="noreferrer">PxHere CC0 hardware photo 2</a> · <a href="https://pxhere.com/en/photo/652423" target="_blank" rel="noreferrer">PxHere CC0 e-cigarette and liquid photo</a> · <a href="https://www.pexels.com/photo/facade-of-the-badshahi-mosque-lahore-punjab-pakistan-14406074/" target="_blank" rel="noreferrer">Badshahi Mosque photo via Pexels</a></p>
      <p className="home-footer-legal">Adults only. Products containing nicotine are addictive. This website is a catalogue framework; product inventory, pricing, checkout, payment, delivery and age-verification systems must be confirmed and configured before sales are enabled. Follow applicable laws and restrictions in Pakistan and Punjab.</p>
      <div className="home-footer-bottom"><span>© {new Date().getFullYear()} Vape247.pk</span><span>Lahore, Punjab, Pakistan</span></div>
    </footer>
  </div>;
}
