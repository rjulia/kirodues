import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { getReviews, getAboutUs } from '../../services/contenful'
import './aboutus.scss';
import { Title, Spinner, Review, FrameImage } from 'components';
import { Helmet } from 'react-helmet';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AboutUs = ({ i18n }) => {

  const { t } = useTranslation();
  const [reviews, setReviews] = useState([])
  const [aboutUs, setAboutUS] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const promise = getReviews(i18n.language)
    const promiseAbout = getAboutUs(i18n.language)
    setLoading(true)
    Promise.all([promise, promiseAbout])
      .then(data => {
        setReviews(data[0])
        setAboutUS(data[1])
      }).finally(() => {
        setLoading(false)
      })

  }, [i18n.language])

  if (isLoading) return <Spinner />
  console.log(aboutUs)
  const { fields: { title, pictureDwon, pictureUp, content } } = aboutUs
  return (
    <div className="about">
      <Helmet>
        <title>{t('helmet.about_us.title')}</title>
        <meta name="description" content={t('helmet.about_us.description')} />
      </Helmet>
      <div className="container">
        <div className="row about__content">
          <div className="col-12 col-md-7">
            <Title tag="h2" text={title} />
            <div className="collaborator__text">{documentToReactComponents(content)}</div>
          </div>
          <div className="col-12 col-md-5">
            <FrameImage img={pictureUp.fields.file.url} height={250} />
            <FrameImage img={pictureDwon.fields.file.url} height={250} />
          </div>
        </div>
      </div>
      <div className="about__title-reviews">
        <Title tag={'h3'} text={t('about.opinion')} />
      </div>
      <div className="about_content-reviews container">
        {reviews.map(review => (
          <div key={review.sys.id} className="col-12 col-md-3">
            <Review
              link={_.get(review, 'fields.urlMedia')}
              imgData={_.get(review, 'fields.logoMedia.fields')}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default withTranslation()(AboutUs)
