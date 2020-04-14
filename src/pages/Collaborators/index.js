import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import './collaborators.scss';
import { Spinner, BlockTitle, BoxImage } from 'components';
import { getCollaborators } from '../../services/contenful';

const Collaborators = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setLoading] = useState(true)
  const [collaborators, setCollaborators] = useState([])

  useEffect(() => {
    const promise = getCollaborators(i18n.language)
    setLoading(true)
    promise
      .then(data => {
        setCollaborators(data)
      }).finally(() => {
        setLoading(false)
      })
  }, [i18n])

  if (isLoading) return <Spinner />
  return (
    <div className="collaborators">
      <Helmet>
        <title>{t('helmet.collaborators.title')}</title>
        <meta name="description" content={t('helmet.collaborators.description')} />
      </Helmet>
      <BlockTitle title={t('collaborators.title')} />
      <div className="container">
        <div className="collaborators__grid">
          {
            collaborators.map(collaborator => (
              <BoxImage
                key={collaborator.sys.id}
                title={_.get(collaborator, 'fields.nameCollaborator')}
                slug={`/colaboradores/${_.get(collaborator, 'fields.slug')}`}
                thumbnail={_.get(collaborator, 'fields.image.fields')}
              />))
          }
        </div>
      </div>
    </div>
  )
}

export default Collaborators
