import {API_KEY}  from "../apiConfig";

// const API_KEY = '13090089-06f959f68796467a30f5ec45e'

console.log(API_KEY)

const fetchImgs = event => {
  
    return fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${event}`
      )
      .then(response => response.json());
};

export default fetchImgs;