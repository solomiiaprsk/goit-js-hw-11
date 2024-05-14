import{i as c,S as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=document.querySelector(".search-form"),u=document.querySelector("#searchInput"),f=document.querySelector(".searchBtn"),n=document.querySelector("ul.gallery"),l=document.querySelector(".loader");function p(o){const s="https://pixabay.com/api/",i="43849659-9c68b2f1fcc3f13b9ce5bf5a4",r=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}?key=${i}&${r}`;return fetch(e).then(t=>t.json())}function h(){if(u.value.trim()==="")return c.warning({title:"Caution",message:"Searchfield empty. Please fill it out",position:"topRight"})}function g(o){h()||o.preventDefault()}f.addEventListener("click",g);d.addEventListener("submit",o=>{o.preventDefault(),l.classList.add("is-open");const s=o.target.elements.query.value.trim();p(s).then(i=>{if(i.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),n.innerHTML="";return}n.innerHTML="",y(i.hits)}).catch(i=>{console.log(i),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML=""}).finally(()=>l.classList.remove("is-open")),u.value=""});function y(o){const s=o.map(r=>`<li class="img-container">
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
`).join(" ");n.insertAdjacentHTML("beforeend",s),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
