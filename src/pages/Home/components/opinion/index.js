import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { Title, Spinner, Comment } from 'components'
import { withTranslation, useTranslation } from 'react-i18next';
import { getComments } from '../../../../services/contenful'
import './opinion.scss';

const Opinion = ({ i18n }) => {

  const { t } = useTranslation();
  const promise = getComments(i18n.language)
  const [comments, setComments] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    promise
      .then(data => {
        setComments(data)
      }).finally(() => {
        setLoading(false)
      })

  }, [])

  if (isLoading) return <Spinner />
  return (
    <div className="opinion row">
      <div className="opinion__title">
        <Title tag={'h3'} text={t('home.third_block.title')} />
      </div>
      <div className="opion__comments container">
        <div className="row">
          {comments.map(comment => (
            <div key={comment.sys.id} className="col-12 col-md-3">

              <Comment
                text={_.get(comment, 'fields.review')}
                author={_.get(comment, 'fields.authorReview')}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Opinion)
