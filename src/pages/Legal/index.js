import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './Legal.scss'
import { useParams } from "react-router-dom";
import { Spinner, Title } from 'components';
import { getLegalStatements } from '../../services/contenful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Legal = () => {
  let { slug } = useParams();
  console.log(slug)
  const { i18n } = useTranslation();
  const [isLoading, setLoading] = useState(true)
  const [legalText, setLegalText] = useState([])

  useEffect(() => {
    const promise = getLegalStatements(i18n.language, slug)
    setLoading(true)
    promise
      .then(data => {
        setLegalText(data[0])
      }).finally(() => {
        setLoading(false)
      })
  }, [i18n.language, slug])


  if (isLoading) return <Spinner />
  const { title, content } = legalText.fields
  return (
    <div className="legal container">
      <Title tag={'h2'} text={title} />
      <div className="legal__text">{documentToReactComponents(content)}</div>
    </div>
  )
}

export default Legal
