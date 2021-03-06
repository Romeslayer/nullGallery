
const cleanResponse = ({pagination, data, config}) => {
  const result = {};
   result.artworks = data.map(art => {
    return {
      id: art.id,
      title: art.title,
    }
  })
  return result;
}


const cleanArtworks = ({ data, config}) => {
  const result = {};
  result.artworks = data.map(art => {
    return {
      id: art.id,
      title: art.title,
      artist: art.artist_title,
      image: `${config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`,
      heart: false
    }
  })
  return result;
}
export { cleanResponse, cleanArtworks };
