import axios from 'axios'
/* eslint-disable */
let baseUrl = process.env.REACT_APP_BASE_URL
let apiKey = process.env.REACT_APP_API_KEY
let baseImageUrl = process.env.REACT_APP_BASE_URL_IMAGE
/* eslint-enable */
export const teste = async () => {
    let teste
    await axios
        .get(`${baseUrl}movie/popular?api_key=${apiKey}`, {
            language: 'pt',
        })
        .then((resp) => {
            teste = resp.data
        })
        .catch((error) => {
            return error
        })
    return teste
}

export const imageLoad = async (size, path) => {
    let img
    await axios
        .get(`https://image.tmdb.org/t/p/${size}${path}`)
        .then((resp) => {
            img = resp.data.data
        })
        .catch((error) => {
            return error
        })
    return img
}
