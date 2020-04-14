import React from 'react';
import './contact.scss';
import { Title, Button, FormContact } from 'components';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PhoneIcon } from "../../assets/icons/receiver.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/mail.svg";
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';


const Contact = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const { t } = useTranslation();
  const sizeIcon = isTabletOrMobileDevice ? '35' : '50';

  return (
    <div className="contact container">
      <Helmet>
        <title>{t('helmet.contact.title')}</title>
        <meta name="description" content={t('helmet.contact.description')} />
      </Helmet>
      <div className="row">
        <div className="col-12 col-md-6">
          <Title tag={"h2"} text={"Kirodues"} />
          <Title tag={"h3"} text={"Centro de Narutopatia"} />
          <div className="contact__box-icons">
            <PhoneIcon width={sizeIcon} height={sizeIcon} />
            <div className="contact__box-icons--text">
              <p>+34 627 907 876</p>
            </div>
          </div>
          <div className="contact__box-icons">
            <LocationIcon width={sizeIcon} height={sizeIcon} />
            <div className="contact__box-icons--text">
              <p>Carrer mare de due del Pilar 12</p>
              <p>Sevilla</p>
            </div>
          </div>
          <div className="contact__box-icons email">
            <EmailIcon width={sizeIcon} height={sizeIcon} />
            <div className="contact__box-icons--text">
              <p><a href="mailto:info@kirodues.com">info@kirodues.com</a></p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <FormContact />
        </div>
      </div>
    </div>
  )
}

export default Contact
