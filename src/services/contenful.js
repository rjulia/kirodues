const client = require('contentful').createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

const getHomeHero = (language) =>
  client
    .getEntries({
      content_type: 'home',
      locale: language,
      limit: 1
    })
    .then(response => response.items)

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
      select: 'sys.id,fields.slug,fields.thumbnail,fields.sortTreatment'
    })
    .then(response => response.items)

const getTreatment = (language, slug) =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'treatment',
      locale: language
    })
    .then(response => response.items)

const getCollaborators = (language) =>
  client
    .getEntries({
      content_type: 'collaborator',
      locale: language,
      order: 'fields.order',
      select: 'sys.id,fields.slug,fields.image,fields.nameCollaborator,fields.jobTitle'
    })
    .then(response => response.items)

const getCollaborator = (language, slug) =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'collaborator',
      locale: language
    })
    .then(response => response.items)

const getLegalStatements = (language, slug) =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'legal',
      locale: language
    })
    .then(response => response.items)

const getAddress = (language) =>
  client
    .getEntries({
      content_type: 'address',
      locale: language
    })
    .then(response => response.items)


const getAboutUs = (language) =>
  client
    .getEntries({
      content_type: 'aboutus',
      locale: language
    })
    .then(response => response.items[0])

const getFooter = (language) =>
    client
      .getEntries({
        content_type: 'footer',
        locale: language
      })
      .then(response => response.items[0])

export { 
  getComments, 
  getReviews, 
  getPacks, 
  getTreatments, 
  getHomeHero, 
  getTreatment, 
  getCollaborators, 
  getCollaborator, 
  getLegalStatements, 
  getAddress,
  getAboutUs,
  getFooter,
 }