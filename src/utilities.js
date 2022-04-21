
const cleanArtResponse = ({pagination, data}) => {
  const result = {};
   result.artworks = data.map(art => {
    return {
      id: art.id,
      title: art.title,
      artist: art.artist_title,
      type: art.artwork_type_title,
      copyright: art.copyright_notice,
      image: art.thumbnail,
      heart: false
    }
  })
  return result;
}

export { cleanArtResponse };
