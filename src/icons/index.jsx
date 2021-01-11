import PropTypes from 'prop-types'
import React from 'react'
import imageSelector from './imageSelector'

class Icon extends React.PureComponent {
  render() {
    const {
      name,
      className,
    } = this.props
    const selected = imageSelector(name)
    return (
      <img src={selected} className={className} alt="" />
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
}

export default Icon
