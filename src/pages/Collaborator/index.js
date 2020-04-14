import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './collaborator.scss';
import { useParams } from "react-router-dom";
import { Spinner, BlockTitle, Title } from 'components'
import { getCollaborator } from '../../services/contenful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Collaborator = () => {

  let { slug } = useParams();
  console.log(slug)
  const { i18n } = useTranslation();
  const [isLoading, setLoading] = useState(true)
  const [collaborator, setCollaborator] = useState([])

  useEffect(() => {
    const promise = getCollaborator(i18n.language, slug)
    setLoading(true)
    promise
      .then(data => {
        setCollaborator(data[0])
      }).finally(() => {
        setLoading(false)
      })
  }, [i18n.language, slug])

  console.log(collaborator)
  if (isLoading) return <Spinner />
  const { workName, workUrl, nameCollaborator, jobTitle, image, content } = collaborator.fields

  return (
    <div className="collaborator container">
      <BlockTitle title={nameCollaborator} />
      <div className="collaborator__content">
        <div className="row">
          <div className="col-12 col-md-4">
            <img src={_.get(image, 'fields.file.url')} alt={_.get(image, 'fields.title')} />
          </div>
          <div className="col-12 col-md-8">
            <Title tag={'h2'} text={jobTitle} />


            <div className="collaborator__text">{documentToReactComponents(content)}</div>


            {
              workUrl && workName &&
              <a href={workUrl} target="_blank" rel="noopener noreferrer">

                <p>{workName}</p>
              </a>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Collaborator
