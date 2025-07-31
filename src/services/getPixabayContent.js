const BASE_URL = `https://pixabay.com/api`;
const API_KEY = '47021183-57cb9b4788280b138c9bad41f';

export default function fetchImages() {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=nature&image_type=photo&orientation=horizontal&per_page=10`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error());
  });
}
