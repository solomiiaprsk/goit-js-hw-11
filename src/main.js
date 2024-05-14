import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { imgTemplate } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('.searchBtn');
const galleryList = document.querySelector('ul.gallery');
const loaderEl = document.querySelector(".loader");


    function validateSearchField() {
        if (searchInput.value.trim() === '') {
            return iziToast.warning({
      title: "Caution",
      message: "Searchfield empty. Please fill it out",
      position: "topRight",
    });
        }
        return true;
    }

    function handleSubmit(event) {
        if (!validateSearchField()) {
            event.preventDefault(); 
        }
    }

    searchBtn.addEventListener('click', handleSubmit);

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    loaderEl.classList.add("is-open");
    const query = e.target.elements.query.value.trim();
    getImages(query).then(data => {
        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
            });
            galleryList.innerHTML = "";
            return;
        };
        galleryList.innerHTML = "";
        imgTemplate(data.hits);
    }).catch(error => {
                console.log(error);
                iziToast.error({
                    title: 'Error',
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    position: 'topRight',
                });
        galleryList.innerHTML = "";
    }
        )
    .finally(() => loaderEl.classList.remove("is-open"));
  searchInput.value = "";
    
});





      
          