import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=document.querySelector("ul.gallery");function f(o){const s=o.map(r=>`<li class="img-container">
  <a
    href=${r.largeImageURL}
    ><img
      src=${r.webformatURL}
      alt=${r.tags}
  /></a>
  <ul class="img-card">
    <li class="img-des">
      <p><b>Likes</b> ${r.likes}</p>
    </li>
    <li class="img-des">
      <p><b>Views</b> ${r.views}</p>
    </li>
    <li class="img-des">
      <p><b>Comments</b> ${r.comments}</p>
    </li>
    <li class="img-des">
      <p><b>Downloads</b> ${r.downloads}</p>
    </li>
  </ul>
</li>
`).join(" ");d.insertAdjacentHTML("beforeend",s),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function p(o){const s="https://pixabay.com/api/",i="43849659-9c68b2f1fcc3f13b9ce5bf5a4",r=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}?key=${i}&${r}`;return fetch(e).then(t=>t.json())}const h=document.querySelector(".search-form"),u=document.querySelector("#searchInput"),g=document.querySelector(".searchBtn"),a=document.querySelector("ul.gallery"),c=document.querySelector(".loader");function y(){return u.value.trim()===""?l.warning({title:"Caution",message:"Searchfield empty. Please fill it out",position:"topRight"}):!0}function b(o){y()||o.preventDefault()}g.addEventListener("click",b);h.addEventListener("submit",o=>{o.preventDefault(),c.classList.add("is-open");const s=o.target.elements.query.value.trim();p(s).then(i=>{if(i.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),a.innerHTML="";return}a.innerHTML="",f(i.hits)}).catch(i=>{console.log(i),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML=""}).finally(()=>c.classList.remove("is-open")),u.value=""});
//# sourceMappingURL=commonHelpers.js.map
