import _ from 'lodash'
import React, {useState, useEffect} from 'react';
import "./Footer.scss";
import { withTranslation, useTranslation } from 'react-i18next';
import { getFooter } from '../../services/contenful'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "assets/images/kirodues_centro_de_naturopatia_barcelona_salud_bienestar_transparente.png";
import { Link } from 'react-router-dom';
import { Spinner } from 'components';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


const Footer = () => {
  const { t, i18n } = useTranslation();
  const [footer, setFooter] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const promise = getFooter(i18n.language)
    setLoading(true)
    promise
      .then(data => {
        setFooter(data)
      }).finally(() => {
        setLoading(false)
      })

  }, [i18n.language])
  console.log(footer)
  if (isLoading) return <Spinner />
  return (
    <div className="container-fluid footer__container">
      <div className="container">
        <div className="row footer__box-links">
          <div className="col-12 col-md-4">
            <h2>{t('footer.contact_us')}</h2>
            <span className="tel">
              {_.get(footer, 'fields.tel')}
              </span>
            <a href={`mailto:${_.get(footer, 'fields.emailFooter')}`}>{_.get(footer, 'fields.emailFooter')}</a>
          </div>
          <div className="col-12 col-md-4">
            <h2>{t('footer.visit_us')}</h2>
            <span className="address">
            {documentToReactComponents(_.get(footer, 'fields.addressFooter'))}
            </span>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer__social-media">
              <ul>
                <li>
                  <a href={_.get(footer, 'fields.urlFacebook')} target="_blank" rel="noopener noreferrer"><FaFacebookF size={15} /></a>


                </li>
                <li>
                  <a href={_.get(footer, 'fields.urlTwitter')} target="_blank" rel="noopener noreferrer"><FaTwitter size={15} /></a>
                </li>
                <li>
                  <a href={_.get(footer, 'fields.urlInstagram')} target="_blank" rel="noopener noreferrer"><FaInstagram size={15} /></a>
                </li>
              </ul>
            </div>
            <div className="footer__logo">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
        <div className="footer__box-legal">
          <ul>
            <li> <Link to={'/legal/politica-de-cookies'}>{t('footer.cookies')}</Link> </li> |
            <li> <Link to={'/legal/aviso-legal'}>{t('footer.legal')}</Link> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Footer)
