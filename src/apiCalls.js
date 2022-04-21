const fetchArtworks = () => {
   let fetchCall = fetch(`https://api.arctic.edu/api/v1/artworks?limit=12`)
    .then(response => {
        if (response.status === 404) {
            throw new Error("404: Not Found")
        } else if (response.status === 500) {
            throw new Error("500: Server is having issues")
        }
        return response.json()
    })
    return fetchCall
}

export { fetchArtworks }
