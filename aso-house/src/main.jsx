import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Plus, Minus, ShoppingBag, MoveUpRight, Instagram, Play, Sparkles } from 'lucide-react';
import './styles.css';

const pieces = [
{
  n: '01',
  name: 'The Ọ̀run Set',
  type: 'HAND-DYED ADIRE · 02 PIECES',
  price: '₦185,000',
  image: 'https://images.unsplash.com/photo-1791394867741-6790be751370?auto=format&fit=crop&w=2000&q=90',
  shape: 'tall'
},
{
  n: '02',
  name: 'Ìfẹ́ in Motion',
  type: 'WOVEN COTTON · MADE TO ORDER',
  price: '₦240,000',
  image: 'https://plus.unsplash.com/premium_photo-1726098115160-ef8049665c0d?w=2000&auto=format&fit=crop&q=90&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  shape: 'wide'
},
{
  n: '03',
  name: 'The Sunday Wrapper',
  type: 'ASO-OKE · LIMITED RUN',
  price: '₦160,000',
  image: 'https://plus.unsplash.com/premium_photo-1718275466762-f92cffbbae21?w=2000&auto=format&fit=crop&q=90&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  shape: 'tall'
}
];

function App() {
  const [intro, setIntro] = useState(true);
  const [menu, setMenu] = useState(false);
  const [bag, setBag] = useState(0);
  const [selected, setSelected] = useState(null);
  const [added, setAdded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 2050);
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      document.documentElement.style.setProperty('--scroll', `${window.scrollY}px`);
      document.querySelectorAll('[data-reveal]').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) el.classList.add('is-visible');
      });
    };
    const onMove = (e) => {
      if (pointerRef.current) {
        pointerRef.current.style.left = `${e.clientX}px`;
        pointerRef.current.style.top = `${e.clientY}px`;
      }
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect && window.innerWidth > 760) {
        const x = (e.clientX - rect.left) / rect.width - .5;
        const y = (e.clientY - rect.top) / rect.height - .5;
        heroRef.current.style.setProperty('--mx', `${x * 18}px`);
        heroRef.current.style.setProperty('--my', `${y * 14}px`);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    onScroll();
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); window.removeEventListener('mousemove', onMove); };
  }, []);

  const closeMenu = () => setMenu(false);
  const openPiece = (piece) => { setSelected(piece); setAdded(false); };

  return <>
    <div className={`intro ${intro ? 'intro--on' : 'intro--off'}`} aria-hidden={!intro}>
      <div className="intro-mark">ÀṢỌ<span>®</span></div>
      <div className="intro-bottom"><span>MADE OF MEMORY</span><div className="intro-track"><i /></div><span>LAGOS · EVERYWHERE</span></div>
      <div className="intro-orbit orbit-a"/><div className="intro-orbit orbit-b"/>
    </div>
    <div className="cursor-dot" ref={pointerRef} />
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="wordmark" aria-label="ÀṢỌ House home">ÀṢỌ<span>HOUSE</span></a>
      <nav className="nav-links"><a href="#collection">COLLECTION <sup>01</sup></a><a href="#story">OUR STORY</a><a href="#craft">THE CRAFT</a></nav>
      <div className="nav-right"><button className="bag-button" onClick={() => setSelected({ bagView: true })}><ShoppingBag size={16} strokeWidth={1.5}/><span>BAG ({bag})</span></button><button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button></div>
    </header>
    {menu && <div className="mobile-menu"><button className="menu-close" onClick={closeMenu}><X size={22}/></button><a onClick={closeMenu} href="#collection">COLLECTION <sup>01</sup></a><a onClick={closeMenu} href="#story">OUR STORY</a><a onClick={closeMenu} href="#craft">THE CRAFT</a><span>LAGOS, NIGERIA · EST. 2021</span></div>}

    <main id="top">
      <section className={`hero ${intro ? 'hero--intro' : 'hero--ready'}`} ref={heroRef}>
        
        <div className="hero-stage">
          <div className="hero-stamp"><span>THE NEW</span><b>ROOTS<br/>RUN DEEP</b><span>VOL. 01 / 2026</span></div>
          <div className="hero-photo hero-photo-main"><img src="https://images.unsplash.com/photo-1681545303529-b6beb2e19f02?auto=format&fit=crop&w=2000&q=90" alt="Fashion editorial portrait"/><div className="photo-grain"/></div>
          <div className="hero-photo hero-photo-side"><img src="https://plus.unsplash.com/premium_photo-1729702169709-87c1e287a2a5?auto=format&fit=crop&w=2000&q=90"/></div>
          <div className="hero-roundel"><svg viewBox="0 0 120 120" aria-label="Made with intention"><defs><path id="roundPath" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"/></defs><text><textPath href="#roundPath">MADE WITH INTENTION · WORN WITH PRIDE · </textPath></text><path d="M60 38 L66 54 L83 60 L66 66 L60 83 L54 66 L37 60 L54 54Z" fill="currentColor"/></svg></div>
          
        </div>
      
      </section>

      <section className="ticker" aria-label="Brand statement"><div className="ticker-track">{Array.from({length: 4}).map((_, i) => <span key={i}>CULTURE IS NOT A COSTUME <b>✳</b> IT'S A CONTINUUM <b>✳</b> WEAR YOUR ORIGIN <b>✳</b></span>)}</div></section>

      <section className="manifesto" id="story">
        <div className="manifesto-content"><h2 data-reveal>WE MAKE<br/>ROOM FOR <em>US.</em></h2><div className="manifesto-lower" data-reveal><div className="manifesto-symbol">À</div><p>ÀṢỌ means cloth. But cloth is never just cloth. It holds the hands that made it, the stories that shaped it, the people who pass it down. We make contemporary pieces with that memory stitched in — and enough room for what comes next.</p><a href="#craft" className="text-link">GET TO KNOW US <ArrowUpRight size={15}/></a></div></div>
        <div className="manifesto-image" data-reveal><img src="https://images.unsplash.com/photo-1709809081557-78f803ce93a0?auto=format&fit=crop&w=2000&q=90&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Portrait representing contemporary African identity"/><div className="image-label">A LIVING ARCHIVE, NEVER A MUSEUM.</div></div>
      </section>

      <section className="collection" id="collection">
        <div className="collection-head" data-reveal><div><h2>THE <em>ROOTS</em><br/>COLLECTION</h2></div><div className="collection-note"><p>Considered silhouettes. Textiles with a past. Pieces that are very much about now.</p><a className="text-link" href="#craft">HOW IT'S MADE <ArrowUpRight size={15}/></a></div></div>
        <div className="product-grid">{pieces.map((p, i) => <article className={`product product-${i+1}`} key={p.n} data-reveal style={{'--delay': `${i * 120}ms`}}><button className="product-image" onClick={() => openPiece(p)} aria-label={`View ${p.name}`}><img src={p.image} alt={p.name}/><span className="product-number">{p.n} / 03</span><span className="product-open"><ArrowUpRight size={19}/></span><span className="product-view">VIEW PIECE</span></button><div className="product-meta"><div><span>{p.type}</span><h3>{p.name}</h3></div><span className="product-price">{p.price}</span></div></article>)}</div>
     
      </section>

      <section className="craft" id="craft">
        <div className="craft-left" data-reveal><h2>NOT MASS<br/>PRODUCED.<br/><em>PERSONALLY</em><br/>CONSIDERED.</h2><p>We work with makers, dyers and weavers who know their craft by heart. Their skill is not a trend. It's the foundation.</p><a href="mailto:studio@aso.example" className="circle-link"><span>LET'S<br/>MAKE<br/>SOMETHING</span><ArrowUpRight size={22}/></a></div>
        <div className="craft-right"><div className="craft-image craft-image-a" data-reveal><img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=85" alt="Hands working on a textile craft"/><span>01 / THE HAND</span></div><div className="craft-image craft-image-b" data-reveal><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85" alt="Textile details and material"/><span>02 / THE MATERIAL</span></div><div className="craft-annotation">SLOW BY DESIGN<br/>NEVER BY ACCIDENT ↗</div></div>
      </section>

      <section className="closing" data-reveal><div className="closing-pattern"/><span className="eyebrow">THE NEXT CHAPTER IS YOURS</span><h2>TAKE YOUR<br/><em>STORY</em> WITH YOU.</h2><a href="#collection" className="closing-cta">FIND YOUR PIECE <ArrowUpRight size={18}/></a><div className="closing-orbit">ÀṢỌ · ÀṢỌ · ÀṢỌ · ÀṢỌ · </div></section>
    </main>

    <footer className="footer"><a href="#top" className="footer-mark">ÀṢỌ<span>HOUSE</span></a><div className="footer-note">CLOTHES WITH MEMORY.<br/>DESIGNED FOR WHAT'S NEXT.</div><div className="footer-links"><a href="#collection">COLLECTION</a><a href="#story">OUR STORY</a><a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM <ArrowUpRight size={12}/></a></div><div className="footer-bottom"><span>© ÀṢỌ HOUSE 2026</span><span>MADE WITH INTENTION IN LAGOS, NG.</span><a href="#top">BACK TO TOP ↑</a></div></footer>

    {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className={`modal ${selected.bagView ? 'modal-bag' : ''}`} onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close"><X size={21}/></button>{selected.bagView ? <><span className="eyebrow">YOUR EDIT</span><h2>THE BAG<span> ({bag})</span></h2>{bag === 0 ? <p className="empty-bag">Nothing in here yet. Your next favourite might be waiting.</p> : <p className="empty-bag">You have {bag} piece{bag === 1 ? '' : 's'} in your bag. Checkout is a demo in this portfolio preview.</p>}<button className="modal-action" onClick={() => setSelected(null)}>BACK TO THE COLLECTION <ArrowRight size={16}/></button></> : <><div className="modal-image"><img src={selected.image} alt={selected.name}/></div><div className="modal-details"><span className="eyebrow">PIECE {selected.n} / ROOTS COLLECTION</span><h2>{selected.name}</h2><p className="modal-type">{selected.type}</p><p className="modal-copy">Made in considered numbers, with texture and detail that reward a closer look. A contemporary piece grounded in the things we carry forward.</p><div className="modal-price">{selected.price}</div><button className="modal-action" onClick={() => {setBag(v => v + 1); setAdded(true)}}>{added ? 'ADDED TO YOUR BAG ✓' : 'ADD TO BAG'} <Plus size={16}/></button><span className="demo-note">Portfolio demo · no payment is taken</span></div></>}</div></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
