import { API_KEY } from "../apiConfig";

const fetchImgs = event => {
    return fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${event}&per_page=20`
    ).then(response => response.json());
};

export default fetchImgs;
