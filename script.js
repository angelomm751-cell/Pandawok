document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu');
  const nav=document.querySelector('.nav nav');
  menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

  const items=document.querySelectorAll('.essence-grid>*,.flavor-grid article,.experience-grid>*,.visit-inner,.section-no,.flavor-head,.manifesto p,.food-photo,.panda-doodle');
  items.forEach(el=>el.classList.add('scroll-reveal'));
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  }),{threshold:.12,rootMargin:'0px 0px -50px 0px'});
  items.forEach(el=>io.observe(el));

  const heroPhoto=document.querySelector('.hero-photo');
  const panda=document.querySelector('.panda-doodle');
  const navBar=document.querySelector('.nav');
  window.addEventListener('scroll',()=>{
    const y=Math.min(window.scrollY,600);
    if(heroPhoto) heroPhoto.style.transform=`translateY(${y*.10}px) rotate(2deg)`;
    if(panda) panda.style.transform=`translateY(${-y*.18}px) rotate(-9deg)`;
    navBar?.classList.toggle('scrolled',window.scrollY>30);
  },{passive:true});
});