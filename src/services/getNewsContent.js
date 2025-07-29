const BASE_URL = `https://newsapi.org/v2`;
const API_KEY = '6c3ff90be8064c3fb0b2e50b8eb13e97';

export default function fetchNews(query = 'pets', pageSize = 4, language = "en") {
    return fetch(
        `${BASE_URL}/everything?q=${query}&pageSize=${pageSize}&language=${language}&sortBy=publishedAt&apiKey=${API_KEY}`
    ).then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(new Error());
    }).then(data => {
        return data.articles;
    });
}