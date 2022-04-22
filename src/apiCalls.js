const fetchArtworks = () => {
   let fetchCall = fetch(`https://api.artic.edu/api/v1/artworks/search?q= ?query[term][is_public_domain]=true[term][image_id][must_not]=null`)
    .then(response => {
        if (!response.ok) {
            throw new Error("404: Not Found")
        }
        return response.json()
    })
    return fetchCall
}


const fetchArtDetails = (ids) => {
  let idQuery = ids.join(',');
  console.log(idQuery);

  let fetchCall = fetch(`https://api.artic.edu/api/v1/artworks?ids=${idQuery}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("404: Not Found")
      }
      return response.json()
    })
    return fetchCall
}
export { fetchArtworks, fetchArtDetails }
