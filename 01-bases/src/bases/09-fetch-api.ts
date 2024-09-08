import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'Y28QPI8wfTGD25QSxHW8eYMwWwfcIAN0';
const url = 'https://api.giphy.com/v1/gifs/';

fetch(`${url}random?api_key=${ apiKey }`)
    .then((resp) => resp.json())
    .then((body: GIFResponse) => {
        console.log(body.data.images.downsized_medium.url)
    })
    .catch(err => console.log( err ));