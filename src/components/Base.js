import React from 'react'
import { useParams, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";



function Base () {
  const { t } = useTranslation();
  const location = useLocation()

  return (
    <>
      <div className="mb-3">estas en: <strong>{location.pathname}</strong></div>
      <h2>{t('welcome_to_react')}</h2>

      <p>{t('inicio_carta')}</p>

    </>
  )
}

export default Base