import PropTypes from 'prop-types'
import React from 'react'
import imageSelector from './imageSelector'

const Icon = (props) => {
  const {
    name,
    className
  } = props
  const selected = imageSelector(name)
  return (
    <img src={selected} className={className} alt="" />
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
}

export default Icon
