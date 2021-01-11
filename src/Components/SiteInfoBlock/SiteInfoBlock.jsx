import PropTypes from 'prop-types'
import React from 'react'
import { dateForCopyrights } from '../../utils/index'

const SiteInfoBlock = (props) => {
  const { data } = props

  return (
    <>
      <div className="site-info">
        <span>
          &copy; Copyright 2010 -
          {new Date().getFullYear()}
          {' '}
          <a href="https://listratenkov.com">Listratenkov.com</a>
          {' '}
          - All Rights Reserved.
          {' '}
          <br />
          Последнее обновление :
          {' '}
          {dateForCopyrights(data)}
        </span>
      </div>
    </>
  )
}

SiteInfoBlock.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default SiteInfoBlock
