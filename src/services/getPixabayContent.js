const BASE_URL = `https://pixabay.com/api`;
const API_KEY = '583e53da8e81b7f76fbb83c907e74178';

export default function fetchImages(query, page) {
  return fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error());
  });
}
