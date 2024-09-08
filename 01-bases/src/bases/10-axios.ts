import axios from "axios";
import { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'Y28QPI8wfTGD25QSxHW8eYMwWwfcIAN0';
const url = 'https://api.giphy.com/v1/gifs';

const giphyAPI = axios.create({
    baseURL: url,
    params: {
        api_key: apiKey,
    }
});

giphyAPI.get<GIFResponse>('/random')
    .then((resp) => console.log(resp.data.data.images.downsized_large.url))
    .catch((err) => console.log(err));

export default giphyAPI;