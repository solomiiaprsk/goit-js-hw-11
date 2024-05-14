import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('.searchBtn');
const galleryList = document.querySelector('ul.gallery');
const loaderEl = document.querySelector(".loader");


function getImages(query) {
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

    function validateSearchField() {
        if (searchInput.value.trim() === '') {
            return iziToast.warning({
      title: "Caution",
      message: "Searchfield empty. Please fill it out",
      position: "topRight",
    });
        }
    
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



function imgTemplate(images) {
  const markUp = images
    .map(
      image => `<li class="img-container">
  <a
    href=${image.largeImageURL}
    ><img
      src=${image.webformatURL}
      alt=${image.tags}
  /></a>
  <ul class="img-card">
    <li class="img-des">
      <p><b>Likes</b> ${image.likes}</p>
    </li>
    <li class="img-des">
      <p><b>Views</b> ${image.views}</p>
    </li>
    <li class="img-des">
      <p><b>Comments</b> ${image.comments}</p>
    </li>
    <li class="img-des">
      <p><b>Downloads</b> ${image.downloads}</p>
    </li>
  </ul>
</li>
`
    )
    .join(' ');
    galleryList.insertAdjacentHTML("beforeend", markUp);
    const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});
lightbox.refresh();
}

      
          