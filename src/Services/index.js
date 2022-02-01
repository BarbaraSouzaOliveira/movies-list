/* eslint-disable */
let baseUrl = process.env.REACT_APP_BASE_URL
let apiKey = process.env.REACT_APP_API_KEY
/* eslint-enable */
export const teste = () => {
    fetch(`${baseUrl}movie/popular?api_key=${apiKey}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.error(error)
        })
}
