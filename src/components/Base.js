import React from 'react'
import { useParams, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";



function Base () {
  const { t } = useTranslation();
  const location = useLocation()

  return (
    <>
      <h2>{t('welcome_to_react')}</h2>
      <h3>{t("pedo")}</h3>
      <div className="mb-3">estas en: <strong>{location.pathname}</strong></div>

    </>
  )
}

export default Base