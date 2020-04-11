const client = require('contentful').createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})



const getComments = (language) =>
  client
    .getEntries({
      content_type: 'review',
      locale: language,
      order: 'sys.createdAt'
    })
    .then(response => response.items)

const getReviews = (language) =>
  client
    .getEntries({
      content_type: 'mediaReview',
      locale: language,
      order: 'sys.createdAt'
    })
    .then(response => response.items)


const getPacks = (language) =>
  client
    .getEntries({
      content_type: 'discountPacks',
      locale: language,
      order: 'sys.createdAt'
    })
    .then(response => response.items)

const getTreatments = (language) =>
  client
    .getEntries({
      content_type: 'treatment',
      locale: language,
      order: 'fields.nameTreatment',
      select: 'sys.id,fields.slug,fields.thumbnail,fields.nameTreatment'
    })
    .then(response => response.items)


export { getComments, getReviews, getPacks, getTreatments }