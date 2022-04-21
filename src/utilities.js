
const cleanArtResponse = ({pagination, data, config}) => {
  const result = {};
  console.log(config)
   result.artworks = data.map(art => {
    return {
      id: art.id,
      title: art.title,
      artist: art.artist_title,
      type: art.artwork_type_title,
      copyright: art.copyright_notice,
      image: `${config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`,
      heart: false
    }
  })
  return result;
}

export { cleanArtResponse };
