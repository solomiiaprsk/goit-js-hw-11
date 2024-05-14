import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function getImages(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '43849659-9c68b2f1fcc3f13b9ce5bf5a4';
    const params = new URLSearchParams({
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });
    const url = `${BASE_URL}?key=${API_KEY}&${params}`;
    
    return fetch(url).then(res => res.json());
    
};

