const BASE_URL = `https://pixabay.com/api`;
const API_KEY = '583e53da8e81b7f76fbb83c907e74178';

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
