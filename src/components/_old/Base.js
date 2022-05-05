import React from 'react'
import { useParams, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";

import Container from 'react-bootstrap/Container'

function Base () {
  const { t } = useTranslation();
  const location = useLocation()

  return (
    <>
      <Container style={{ "backgroundColor": "#c68e44", "height": "600" }}>

        <div id="base" name="Base" className="mb-3">estas en: <strong>{location.pathname}</strong></div>
        <h2>{t('welcome_to_react')}</h2>

        <p>{t('inicio_carta')}</p>
      </Container>

    </>
  )
}

export default Base