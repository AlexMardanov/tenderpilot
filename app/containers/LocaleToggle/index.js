/*
 *
 * LanguageToggle
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { appLocales } from '../../i18n'
import { changeLocale } from '../LanguageProvider/actions'
import { makeSelectLocale } from '../LanguageProvider/selectors'

export function LocaleToggle(props) {
  const { onLocaleToggle } = props

  function handleLocaleChange(lang) {
    return () => onLocaleToggle(lang)
  }

  return (
    <>
      {appLocales.map(lang => (
        <button type="button" key={lang} onClick={handleLocaleChange(lang)}>
          {lang}
        </button>
      ))}
    </>
  )
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
}

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}))

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: lang => dispatch(changeLocale(lang)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle)
