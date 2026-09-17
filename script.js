document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu');
  const nav=document.querySelector('.nav nav');
  menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  const items=document.querySelectorAll('.essence-grid>*,.flavor-grid article,.experience-grid>*,.visit-inner');
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.animate([{opacity:0,transform:'translateY(28px)'},{opacity:1,transform:'translateY(0)'}],{duration:750,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'});
      io.unobserve(entry.target);
    }
  }),{threshold:.12});
  items.forEach(el=>io.observe(el));
});