// const BASE_URL = `https://gnews.io/api/v4`;
// const API_KEY = '174a772d8027fe09eebbc63a99c7b3b3';

// export default function fetchNews(
//   query = 'pets',
//   max = 20,
//   lang = 'en',
//   page = 1
// ) {
//   return fetch(
//     `${BASE_URL}/search?q=${encodeURIComponent(query)}&lang=${lang}&max=${max}&page=${page}&sortby=publishedAt&apikey=${API_KEY}`
//   )
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(new Error());
//     })
//     .then(data => {
//       return data.articles;
//     });
// }

const API_KEY = '174a772d8027fe09eebbc63a99c7b3b3';
const BASE_URL = 'https://gnews.io/api/v4';

export default function fetchNews(
  query = 'pets',
  max = 10,
  lang = 'en',
  page = 1
) {
  return fetch(
    `${BASE_URL}/search?q=${encodeURIComponent(
      query
    )}&lang=${lang}&max=${max}&page=${page}&sortby=publishedAt&apikey=${API_KEY}`
  )
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    })
    .then(data => data.articles);
}

