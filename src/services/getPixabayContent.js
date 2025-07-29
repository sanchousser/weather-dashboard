const BASE_URL = `https://pixabay.com/api`;
const API_KEY = '42288068-1aa5220c6fe3b03abf2540867';

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
