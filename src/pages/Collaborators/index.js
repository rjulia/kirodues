import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './collaborators.scss';
import { Spinner, BlockTitle, BoxImage } from 'components'
import { getCollaborators } from '../../services/contenful'

const Collaborators = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setLoading] = useState(true)
  const [collaborators, setCollaborators] = useState([])
  const promise = getCollaborators(i18n.language)

  useEffect(() => {
    setLoading(true)

    promise
      .then(data => {
        setCollaborators(data)
      }).finally(() => {
        setLoading(false)
      })


  }, [])
  console.log(collaborators)
  if (isLoading) return <Spinner />
  return (
    <div className="collaborators">
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
